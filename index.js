var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<body><h1>Vlad</h1></body>');
});

app.post('/Posts', (req, res, next) => {
    console.log(req.body);
    res.send('fsdfdsfds')
});

app.delete('/users/:userId', myMid(), (req, res) => {
    console.log(req.params);
    let query = req.query
    let userId = req.params.userId
    let userName = req.params.username
    res.json("status: 200")
})

function myMid (req, res, next) {
    fs.appendFile('message.txt', `${req.url} ${new Date().toISOString()}`, (err) => {
        if (err) throw err;
    })
}

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});