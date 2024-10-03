// removeLogs.js
const fs = require('fs');
const path = require('path');

function removeLogFiles() {
    const logsDir = path.join(__dirname, 'Logs');

    if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(file => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);  // Remove each file
            console.log(`Deleted file: ${file}`);
        });

        fs.rmdirSync(logsDir);  // Remove Logs directory
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}

// Example usage:
removeLogFiles();
