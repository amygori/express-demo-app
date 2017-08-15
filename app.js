const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mustache = require('mustache-express');

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/our-first-app', express.static('our-first-app'));

app.get('/', function(req, res){
  res.send('Hello world!');
});

app.get('/template', function(req, res){
  res.render('index', { name: 'Lila' } );
});

app.get('/:something', function(req, res){
  //console.log(req.params);
  res.send(`The thing you typed into the url was ${req.params.something}`);
});

// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname + '/index.html'));
// });


app.listen(port, function(){
  console.log(`the app is running on port ${port}!`)
});
