const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', { title: pageTitle });
  }
  
  // this is used to render the index page
  
  module.exports = {
      travel
  };