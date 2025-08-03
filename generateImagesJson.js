const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'gallery');
const outputFile = path.join(__dirname, 'src', 'images.json');

const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];

fs.readdir(galleryDir, (err, files) => {
    if (err) {
        console.error('Failed to read gallery directory:', err);
        return;
    }

    const imagePaths = files
        .filter(file => allowedExtensions.includes(path.extname(file).toLowerCase()))
        .map(file => `/gallery/${file}`);

    fs.writeFile(outputFile, JSON.stringify(imagePaths, null, 2), (err) => {
        if (err) {
            console.error('Failed to write images.json:', err);
        } else {
            console.log(`✅ Successfully generated images.json with ${imagePaths.length} images.`);
        }
    });
});
