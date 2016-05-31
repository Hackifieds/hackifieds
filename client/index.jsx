import App from './components/app.jsx';
import Listings from './components/listings.jsx';
import Filter from './components/filter.jsx';

let listings;

ajaxGet(function(data) {
  listings = data;

  ReactDOM.render(
    <Filter listings={listings}/>,
    document.getElementById('app')
  );
});
// [
  // {
  //   createdAt: '26 May 2016',
  //   title: 'Room to let in apartment centrally located',
  //   description: 'Clean room located in heart of Tenderloin, 10 minute walk to HR',
  //   location: 'Tenderloin',
  //   price: '$1,500pm'
  // },
  // {
  //   createdAt: '30 May 2016',
  //   title: 'Room to let in Russian Hill',
  //   description: 'Nice quiet neighborhood, 25 min walk to Hack Reactor',
  //   location: 'Russian Hill',
  //   price: '$1,400'
  // }
// ];

console.log(listings);