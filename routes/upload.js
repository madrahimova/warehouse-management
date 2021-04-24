module.exports = function(app, db) {
    app.post('/upload', (req, res) => {
        console.log(req.body);
        res.send(req.body);
    });
};
