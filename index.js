var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.use(ejsLayouts);

// Home Route
app.get('/', (req, res) => {
	res.render('home');
});

// About route
app.get('/about', (req, res)=>{
	res.render('about');
})


app.listen(8000);