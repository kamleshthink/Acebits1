const mongoose = require('mongoose');

// MongoDB Connection
let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    cachedDb = connection;
    return cachedDb;
}

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    registrationNumber: { type: String, required: true },
    branch: { type: String, required: true },
    college: { type: String, default: 'BIT Sindri' },
    year: { type: String, required: true },
    address: { type: String }
}, { timestamps: true });

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
    isRead: { type: Boolean, default: false },
    status: { type: String, enum: ['pending', 'replied', 'resolved'], default: 'pending' }
});

let User, Contact;

// Initialize models
function initModels() {
    if (!User) {
        User = mongoose.models.User || mongoose.model('User', userSchema);
    }
    if (!Contact) {
        Contact = mongoose.models.UserComment || mongoose.model('UserComment', contactSchema);
    }
}

// CORS Headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Content-Type': 'application/json'
};

// Response helper
function response(statusCode, body) {
    return {
        statusCode,
        headers: corsHeaders,
        body: JSON.stringify(body)
    };
}

// Main Lambda Handler
exports.handler = async (event) => {
    // Handle OPTIONS (CORS preflight)
    if (event.requestContext?.http?.method === 'OPTIONS' || event.httpMethod === 'OPTIONS') {
        return response(200, { message: 'OK' });
    }

    try {
        await connectToDatabase();
        initModels();

        // Get path - remove stage prefix if present (e.g., /prod)
        let path = event.rawPath || event.path || '';
        path = path.replace(/^\/prod/, ''); // Remove /prod prefix if present
        if (!path) path = '/';

        const method = event.requestContext?.http?.method || event.httpMethod;
        const body = event.body ? JSON.parse(event.body) : {};
        const pathParams = event.pathParameters || {};

        console.log('Request:', { path, method, rawPath: event.rawPath });

        // Health Check
        if (path === '/api/health' || path === '/health') {
            return response(200, {
                status: 'OK',
                message: 'ACE BITS API is running on AWS Lambda',
                timestamp: new Date().toISOString()
            });
        }

        // USER ROUTES
        if (path.startsWith('/api/users')) {
            // POST /api/users/register - Register new user
            if (path === '/api/users/register' && method === 'POST') {
                const { name, email, phone, registrationNumber, branch, college, year, address } = body;

                if (!name || !email || !phone || !registrationNumber || !branch || !year) {
                    return response(400, { error: 'All required fields must be provided' });
                }

                const existingUser = await User.findOne({
                    $or: [{ email }, { registrationNumber }]
                });

                if (existingUser) {
                    return response(400, { error: 'User with this email or registration number already exists' });
                }

                const newUser = new User({ name, email, phone, registrationNumber, branch, college, year, address });
                await newUser.save();

                return response(201, { message: 'Registration successful', user: newUser });
            }

            // GET /api/users - Get all users
            if (path === '/api/users' && method === 'GET') {
                const users = await User.find().sort({ createdAt: -1 });
                return response(200, users);
            }

            // GET /api/users/:id - Get user by ID
            if (path.match(/\/api\/users\/[a-f0-9]{24}$/) && method === 'GET') {
                const id = path.split('/').pop();
                const user = await User.findById(id);
                if (!user) {
                    return response(404, { error: 'User not found' });
                }
                return response(200, user);
            }

            // GET /api/users/regno/:regNo - Get user by registration number
            if (path.startsWith('/api/users/regno/') && method === 'GET') {
                const regNo = path.split('/').pop();
                const user = await User.findOne({ registrationNumber: regNo });
                if (!user) {
                    return response(404, { error: 'User not found' });
                }
                return response(200, user);
            }
        }

        // CONTACT ROUTES
        if (path.startsWith('/api/contact')) {
            // POST /api/contact - Submit contact form
            if (path === '/api/contact' && method === 'POST') {
                const { name, email, subject, message } = body;

                if (!name || !email || !subject || !message) {
                    return response(400, { error: 'All fields are required' });
                }

                const newContact = new Contact({ name, email, subject, message });
                await newContact.save();

                return response(201, { message: 'Message sent successfully', contact: newContact });
            }

            // GET /api/contact - Get all contacts
            if (path === '/api/contact' && method === 'GET') {
                const contacts = await Contact.find().sort({ submittedAt: -1 });
                return response(200, contacts);
            }

            // GET /api/contact/unread-count - Get unread count
            if (path === '/api/contact/unread-count' && method === 'GET') {
                const count = await Contact.countDocuments({ isRead: false });
                return response(200, { unreadCount: count });
            }

            // GET /api/contact/:id - Get contact by ID
            if (path.match(/\/api\/contact\/[a-f0-9]{24}$/) && method === 'GET') {
                const id = path.split('/').pop();
                const contact = await Contact.findById(id);
                if (!contact) {
                    return response(404, { error: 'Contact not found' });
                }
                return response(200, contact);
            }

            // PUT /api/contact/:id - Update contact
            if (path.match(/\/api\/contact\/[a-f0-9]{24}$/) && method === 'PUT') {
                const id = path.split('/').pop();
                const contact = await Contact.findByIdAndUpdate(id, body, { new: true });
                if (!contact) {
                    return response(404, { error: 'Contact not found' });
                }
                return response(200, contact);
            }
        }

        // Route not found
        return response(404, { error: 'Route not found' });

    } catch (error) {
        console.error('Lambda Error:', error);
        return response(500, { error: 'Internal server error', details: error.message });
    }
};
