
const  express = require("express");
const main = express();
const path = require('path');
const { Script } = require("vm");
const pagepath = path.join(__dirname, 'pages');


// Connectiong the Port
const PORT = process.env.PORT || 3002;


// Connecting the css page
// main.use(path.join(__dirname + 'style'));
main.use(express.static('public/style'));
main.use(express.static('public/images'));
main.use(express.static('public/script'));

// Connecting The Route with html page
main.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'home.html'));
  });

// Starting the PORT
const start = async() => {
    try {
        main.listen(PORT, () => {
            console.log(` ${PORT} Server is connected`);
        });
        } catch (error){
            console.log(error);
    }
}
start();