const fs = require('fs');
const path = require('path');

function createLogFiles() {
    const logsDir = path.join(__dirname, 'Logs');
    
    if (!fs.existsSync(logsDir)) {
        console.log("Creating Logs directory...");
        fs.mkdirSync(logsDir);
    } else {
        console.log("Logs directory already exists");
    }

    console.log("Changing current directory to Logs...");
    process.chdir(logsDir);
    
    for (let i = 1; i <= 10; i++) {
        let fileName = 'log' + i + '.txt';
        fs.writeFileSync(fileName, 'This is log file number ' + i);
        console.log("Created file:", fileName);
    }
}

createLogFiles();
