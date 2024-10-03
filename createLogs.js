// createLogs.js
const fs = require('fs');
const path = require('path');

function createLogFiles() {
    const logsDir = path.join(__dirname, 'Logs');

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);  // Create Logs directory
    }

    process.chdir(logsDir);  // Change current working directory to Logs

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);  // Create log file
        console.log(`Created file: ${fileName}`);
    }
}

// Example usage:
createLogFiles();
