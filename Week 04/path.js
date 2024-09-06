const path = require('path');

// Paths ko join karna
const fullPath = path.join('folder', 'subfolder', 'file.txt');
console.log('Joined Path:', fullPath);

// Absolute path ka pata karna
const absolutePath = path.resolve('folder', 'file.txt');
console.log('Absolute Path:', absolutePath);

// Basename aur dirname lena
console.log('Base Name:', path.basename(fullPath));
console.log('Directory Name:', path.dirname(fullPath));

// File extension lena
console.log('File Extension:', path.extname(fullPath));
