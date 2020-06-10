/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Dwight Kappl
 * Email: kappldw@oregonstate.edu
 *
 */

var path = require('path');
var express = require('express');
var express_hdbars = require('express-handlebars')
var menudata = require('./menuData')
var single = true;


var app = express();
var port = process.env.PORT || 3000;



app.engine('handlebars', express_hdbars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// Displays homepage with all twits loaded

app.get( '/', function (req, res, next){
  res.status(200).render('home');
});

app.get( '/menu', function (req, res, next){
  res.status(200).render('menu', {allMenu: menudata});
});

// app.get( '/twits/:indexTwit', function (req, res, next){

//   if(twitData[req.params.indexTwit]){
//     res.status(200).render('home', {allTwits: [twitData[req.params.indexTwit]], button: 'single' }  );

//   }
//   else{
//     next();
//   }
// });

// app.get('*', function (req, res) {
//   res.status(404).render('404');
// });

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
