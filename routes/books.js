var express = require('express');
var router = express.Router();
var db_con = require('../lib/db');


/* GET users listing. */
router.get('/', function(req, res, next) {
    const query = 'select * from cb12ptjs.books';
    db_con.query(query, function(err,rows) {
        if(err){
            res.render('books', {title: 'books error has occured', books:''})
        } else {
            res.render('books', {title: 'List of books', books:rows})
        }
    });
});


router.get('/add', function(req,res,next){
    res.render('books_new', {title : "Books - add new"})
})


router.post('/add', function(req,res){
    const newEntry = {
        title : req.body.inputtitle,
        author : req.body.inputauthor
    };

    if(!newEntry.title || !newEntry.author){
        return res.status(400).json({msg:'please include title and author'})
    }
    console.log(`added book with ${newEntry.title} by ${newEntry.author}`)

})



module.exports = router;
