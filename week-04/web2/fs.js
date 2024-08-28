const fs = require('fs');

try {
    // Step 1: Write initial data to a file
    fs.writeFileSync('example.txt', 'Hello, world!');
    console.log('File created and initial data written.');

    // Step 2: Read the file
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('Original Data:', data);

    // Step 3: Update the file
    const updatedData = data + '\nThis is an updated line.';
    fs.writeFileSync('example.txt', updatedData);
    console.log('File updated successfully.');

    // Step 4: Read the updated file
    const newData = fs.readFileSync('example.txt', 'utf8');
    console.log('Updated Data:', newData);

    // Step 5: Delete the file
    fs.unlinkSync('example.txt');
    console.log('File deleted successfully.');

} catch (err) {
    console.error('Error:', err); // Handle any errors that occur
}
