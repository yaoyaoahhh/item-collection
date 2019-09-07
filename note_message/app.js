var express = require('express');
var app = express();
var template = require('art-template');
var bodyParser = require('body-parser');

var comments = [{
    name: '张三',
    message: '你好哇你好哇',
    time: new Date(),
}];
app.use('/public/', express.static('public'));

app.engine('html', require('express-art-template'));
app.get('/', function(req, res) {
    res.render('index.html', {
        comments: comments,
    });
});
app.get('/post', function(req, res) {
    res.render('post.html');
});
/* app.get('/comments', function(req, res) {

    var comment = {};
    comment = req.query;
    comment.time = new Date();
    comments.unshift(comment);
    res.redirect('/');
   
});
*/

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/comments', function(req, res) {
    var comment = {};
    comment = req.body;
    comment.time = new Date();
    comments.unshift(comment);

    /*res.render('/', {
        comments: comments,
    });*/
    res.redirect('/');
});
app.listen(3001, function() {
    console.log('express is running');
});