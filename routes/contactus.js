const express = require('express');

const router = express.Router();

const controllergetinfo = require('../controllers/adddetails');

const controllerpostinfo = require('../controllers/adddetails');

router.get('/contactus',controllergetinfo.getinfo);

//Explanation:
//The code defines a middleware function assigned to the '/add-product' path using router.get(). 
//When a GET request is made to '/add-product', this middleware function will be executed. 
//It logs the message "In the another middleware" and sends an HTML form to the client for adding a product. 
//The form contains an input field with the name "title" and a submit button.

router.post('/contactus',controllerpostinfo.postinfo);

//Explanation:
//The code defines a middleware function assigned to the '/product' path using router.post().
// When a POST request is made to '/product', this middleware function will be executed. 
//It logs the contents of req.body, which contains the data submitted through the form. 
//It then redirects the user back to the root path ('/').

module.exports = router;

