const fs = require('fs'); // fs = filesystem for web server where code is running
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8')); // read the trips.json file 


const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', { title: pageTitle, trips });
  }
  
  // this is used to render the index page
  
  module.exports = {
      travel
  };