
var express = require('express');
var router = express.Router();

let serverComicArray = []; 


var ComicObject = function (pTitle, pIssue, pPublisher, pFormat, pDescription) {
  this.Title = pTitle;
  this.Issue = pIssue;
  this.Publisher = pPublisher;
  this.ID = comicArray.length + 1;
  this.Format = pFormat;
  this.Description = pDescription;
}

router.post('/addComic', function(req, res) {
  console.log(req.body);
  serverComicArray.push(req.body);
  console.log(serverComicArray);
  //res.sendStatus(200);
  res.status(200).send(JSON.stringify('success'));
});


router.get('/comicList', function(req, res) {
  res.json(serverComicArray);
 });

 
 router.delete('/deleteComic/:ID', function(req, res) {
  let id = req.params.ID;
  id = id.toLowerCase();
  console.log('deleting ID: ' + id);
   for(let i=0; i < serverComicArray.length; i++) {
     if(id == (serverComicArray[i].Title).toLowerCase()) {
     serverComicArray.splice(i,1);
     }
   }
   res.status(200).send(JSON.stringify('success'));
});


//  router.???('/userlist', function(req, res) {
//  users.update({name: 'foo'}, {name: 'bar'})



module.exports = router;

