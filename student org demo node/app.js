var fs = require('fs'),
    express = require('express'),
    app = express(),
    router = require('./router'),
    template = require('art-template');
var bodyParser = require('body-parser');
app.use('/public/', express.static('./public'));
app.engine('html', require('express-art-template'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.listen(3001, function() {
    console.log('express id running！');
});