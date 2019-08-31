const express = require('express');
const formidable = require('formidable');
const util = require('util');
const fs = require('fs-extra');
const port = 3999;
const path = require('path');

// form source

const formSource =
    `<form action="/upload" enctype="multipart/form-data" method="post">
<input type="text" name="title"><br>
<input type="file" name="upload" multiple="multiple"><br>
<input type="submit" value="Upload">
</form>
`
const app = express();
app.listen(port, () => {
    console.log(`App listen in port: ${port}.`);
});

app.get('/', (req, res) => {
    res.send(formSource);
});

app.post('/upload', (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {

        /* Temporary location of our uploaded file */
        var temp_path = files.upload.path;
        /* The file name of the uploaded file */
        var file_name = files.upload.name;
        /* Location where we want to copy the uploaded file */
        var new_location = path.join(__dirname, 'files', file_name);

        fs.copy(temp_path, new_location, err => {
            if (err) {
                console.error(err);
            } else {
                res.writeHead(200, { 'content-type': 'text/plain' });
                res.write('received upload:\n\n');
                res.end('File uploaded to: ' + new_location);
            }
        });


    });
});