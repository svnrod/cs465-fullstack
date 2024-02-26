//const fs = require('fs'); // fs = filesystem for web server where code is running
//const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8')); // read the trips.json file 
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

// internal method to render the travel list
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if(!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if(!responseBody.length) {
            message = "No trips exist in our database!";
        }
    }
    res.render('travel', { title: pageTitle, trips: responseBody, message });
}

//GET travel list view
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: '${apiOptions.server}${path}',
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};

/*const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', { title: pageTitle, trips });
  }
  
  // this is used to render the index page
  
  module.exports = {
      travel
  };
  */