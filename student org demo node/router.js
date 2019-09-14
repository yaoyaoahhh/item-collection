var express = require('express');
var router = express.Router();
var fs = require('fs');
var Student = require('./student');
router.get('/', function(req, res) {

    /* fs.readFile('./db.json', 'utf8', function(err, data) {
         if (err) {
             console.log('error');
         } else {
             var datas = JSON.parse(data);
             res.render('index.html', {
                 datas: datas.students
             });
         }
     });   */
    Student.find(function(err, datas) {
        if (err) {
            return res.status(500).send('server error');
        }
        // console.log(datas);
        res.render('index.html', {
            datas: datas.datas
        });
        // console.log(datas.datas);
    });

});
router.get('/studentAdd', function(req, res) {
    res.render('studentAdd.html');
});
router.post('/studentAdd', function(req, res) {
    Student.save(req.body, function(err) {
        if (err) {
            return res.status(500).send('server error');
        }
        return res.redirect('/');
    });
});
router.get('/studentEdit', function(req, res) {
    Student.findById(req.query.id, function(err, student) {
        if (err) {
            return res.status(500).send('server error!');
        }
        res.render('edit.html', {
            student: student
        });
        // console.log(student);
    });
});
router.post('/studentEdit', function(req, res) {
    Student.update(req.body, function(err) {
        // console.log(req.body);
        if (err) {
            return res.status(500).send('server error!!');
        }
        res.redirect('/');
    });
});
router.get('/studentDel', function(req, res) {
    Student.delete(req.query, function(err) {
        if (err) {
            res.status(500).send('server error');
        }
        res.redirect('/');
    });
});
module.exports = router;