var fs = require('fs')

const engine = (filePath, options, callback) => { // define the template engine
    fs.readFile(filePath, (err, content) => {

        if (err)
            return callback(err)

        let rendered = content.toString()
            .replace(/\#title\#/g, '<title>' + options.title + '</title>')
            .replace(/\#message\#/g, '<h1>' + options.message + '</h1>')
        return callback(null, rendered)

    })
}

module.exports = engine;