const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

async function testUpload() {
    try {
        // Create a dummy file
        const filePath = path.join(__dirname, 'test_upload.txt');
        fs.writeFileSync(filePath, 'This is a test file for upload debugging.');

        const form = new FormData();
        form.append('file', fs.createReadStream(filePath));
        form.append('title', 'Test Upload Resource');
        form.append('description', 'Debugging upload 500 error');
        form.append('category', 'Notes');

        console.log('Sending upload request...');
        const response = await axios.post('http://localhost:5001/api/resources', form, {
            headers: {
                ...form.getHeaders()
            }
        });

        console.log('Upload Success:', response.data);
    } catch (error) {
        if (error.response) {
            console.error('Upload Failed with Status:', error.response.status);
            console.error('Error Data:', error.response.data);
        } else {
            console.error('Upload Failed:', error.message);
        }
    } finally {
        // Cleanup
        if (fs.existsSync(path.join(__dirname, 'test_upload.txt'))) {
            fs.unlinkSync(path.join(__dirname, 'test_upload.txt'));
        }
    }
}

testUpload();
