const express = require('express');
const app = express();
const path = require('path');
const port = 5000;
const hbs = require('hbs');

const staticPath = path.join(__dirname, '../public');
const templets_path = path.join(__dirname, '../Templates/views');
const partials_path =  path.join(__dirname, '../Templates/partials');

app.set('view engine', 'hbs');
app.set('views',templets_path)
hbs.registerPartials(partials_path)
app.use(express.static( staticPath))

        // Routing 
// Main page of weather site
app.get('/', (req, res) => {
    res.render('index')
});
        // about Page
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/weather', (req, res) => {
    res.render('weather')
});





















     // Error Page 
        app.get('*', (req, res) => {
            res.render('404')
        });
        
        
app.listen(port, (err)=>{
    console.log(`listening port ${port}`)
})