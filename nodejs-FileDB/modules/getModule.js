const template = require('./template');


// válasz get requestekre

const run = (req, res) => {
    template.render('index.html')
        .then(html) => {
    res.end(html);
});
};

module.exports = {
    run: run
};