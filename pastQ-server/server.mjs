import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';

const app = express();
const PORT = process.env.PORT || 5000;

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }));
app.use(express.static(path.join(__dirname, 'public')));

let documents = {};

// Function to load documents from JSON file
const loadDocuments = () => {
    try {
        documents = JSON.parse(fs.readFileSync(path.join(__dirname, 'documents.json'), 'utf8'));
        console.log('Documents loaded successfully.');
    } catch (error) {
        console.error('Error loading documents:', error);
    }
};

// Initial load of documents
loadDocuments();

// Watch the documents.json file for changes
fs.watchFile(path.join(__dirname, 'documents.json'), () => {
    console.log('documents.json file changed, reloading...');
    loadDocuments();
});

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'db_source'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route to handle document requests
app.post('/get-document', (req, res) => {
    const { courseCode, level, program, section } = req.body.reqInfo;
    console.log('Request body:', req.body);

    try {
        if (documents[section] && documents[section][level] && documents[section][level][program] && documents[section][level][program][courseCode]) {
            const document = documents[section][level][program][courseCode];
            res.json({ success: true, document });
            console.log('Document found:', document);
        } else {
            res.status(404).json({ success: false, message: 'Document not found' });
            console.log('Document not found.');
        }
    } catch (error) {
        console.error('An error occurred while retrieving the document:', error);
        res.status(500).json({ success: false, message: 'An error occurred while retrieving the document' });
    }
});

// Route to handle file uploads
app.post('/upload-document', upload.array('documents', 10), (req, res) => {
    const { courseCode, level, program, section } = req.body;
    console.log('Uploaded files:', req.files);
    console.log('Upload request body:', req.body);

    if (!documents[section]) {
        documents[section] = {};
    }
    if (!documents[section][level]) {
        documents[section][level] = {};
    }
    if (!documents[section][level][program]) {
        documents[section][level][program] = {};
    }
    if (!documents[section][level][program][courseCode]) {
        documents[section][level][program][courseCode] = [];
    }

    req.files.forEach(file => {
        let fileName = file.originalname.replace('/db_source/', ''); // Remove '/db_source/' from the filename
        documents[section][level][program][courseCode].push(fileName);
    });

    fs.writeFileSync(path.join(__dirname, 'documents.json'), JSON.stringify(documents, null, 2));
    res.json({ success: true, message: 'Files uploaded successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
