const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    extname: 'handlebars'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        style: '<link rel="stylesheet" href="/css/style.css">',
        script: '<script src="/js/main.js"></script>'
    });
});


module.exports = app;
