let ajax = require('./lib/helpers.js');
let listing = {
  date: '26 May 2016',
  title: 'Room to let in apartment centrally located',
  description: 'Clean room located in heart of Tenderloin, 10 minute walk to HR',
  location: 'Tenderloin',
  price: '$1,500pm'
};

ReactDOM.render(
  <Listing listing={listing}/>,
  document.getElementById('app')
);