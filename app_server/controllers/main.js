const index = (req, res) => {
  res.render('index', { title: 'Travlr Gateways' });
}

// this is used to render the index page

module.exports = {
    index
};