const express = require('express'); //Import the express dependency
const path = require('path');       //Import the path dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.use(express.static(path.join(__dirname,'public')));  //serve static files from the public folder

app.get('/about', (req, res) => {   //get requests to "/about" will route here
    res.sendFile('pages/aboutMe.html', {root: __dirname});      //server responds by sending the about.html file to the client's browser
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});
