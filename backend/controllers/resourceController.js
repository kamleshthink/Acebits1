const Resource = require('../models/Resource');
const cloudinary = require('cloudinary').v2;

// @desc    Upload a new resource
// @route   POST /api/resources
// @access  Public (for now)
exports.uploadResource = async (req, res) => {
    try {
        console.log('Upload request received:', req.body);
        console.log('File received:', req.file);

        if (!req.file) {
            console.error('No file in request');
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        const { title, description, category } = req.body;

        // Detect file type
        let fileType = 'other';
        if (req.file.mimetype.includes('pdf')) fileType = 'pdf';
        else if (req.file.mimetype.includes('image')) fileType = 'image';
        else if (req.file.mimetype.includes('word') || req.file.mimetype.includes('document')) fileType = 'doc';

        console.log('Creating resource in DB...');
        const resource = await Resource.create({
            title: title || req.file.originalname,
            description,
            fileUrl: req.file.path,
            originalName: req.file.originalname,
            fileType,
            category: category || 'Other'
            // uploadedBy: req.user.id // TODO: Add when auth middleware is ready
        });
        console.log('Resource created:', resource);

        res.status(201).json({
            success: true,
            data: resource
        });
    } catch (error) {
        console.error('Upload Error Details:', error);
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

// @desc    Get all resources
// @route   GET /api/resources
// @access  Public
exports.getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: resources.length,
            data: resources
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
