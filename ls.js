const fs = require('fs');

module.exports.ls = function() {
    fs.readdir('./', 'utf8', (err, files) => {
        if(err) {
            throw err
        } else {
            process.stdout.write(files.join('\n'))
            process.stdout.write("prompt > ");
        }
    })
}