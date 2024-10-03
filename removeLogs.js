const fs = require('fs');
const path = require('path');

function removeLogFiles() {
    const logsDir = path.join(__dirname, 'Logs');
    
    if (fs.existsSync(logsDir)) {
        console.log("Logs directory found, deleting files...");
        
        fs.readdirSync(logsDir).forEach(function(file) {
            let filePath = path.join(logsDir, file);
            console.log("Deleting file:", file);
            fs.unlinkSync(filePath);
        });
        
        fs.rmdirSync(logsDir);
        console.log("Logs directory removed");
    } else {
        console.log("Logs directory does not exist");
    }
}

removeLogFiles();
