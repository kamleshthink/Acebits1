const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
        type: String,
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    fileUrl: {
        type: String,
        required: [true, 'File URL is required']
    },
    originalName: {
        type: String
    },
    fileType: {
        type: String,
        enum: ['pdf', 'doc', 'image', 'other'],
        default: 'other'
    },
    category: {
        type: String,
        enum: ['PYQ', 'Notes', 'Tutorial', 'Other'],
        default: 'Other'
    },
    uploadedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false // Temporarily false until auth is fully integrated
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Resource', resourceSchema);
