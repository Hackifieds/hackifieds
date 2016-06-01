import Listings from './listings.jsx';
import Filter from './filter.jsx';
import helpers from '../lib/helpers.js';
import Nav from './nav.jsx';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      listings: []
    };
  }

  componentWillMount () {
    this.retrieveListings();
  }

  retrieveListings () {
    helpers.getListings( data => {
      this.setState( {
        listings: data
      })
    });
  }

  sendListing () {
    helpers.postListing();
  }

  render () {
    return (
      <div>
        <Nav />
        <Listings listings={this.state.listings}/>
        <Filter listings={this.state.listings}/>
        <button id="getButton" type="button" onClick={this.retrieveListings.bind(this)}>GET</button>
        <button id="postButton" type="button" onClick={this.sendListing.bind(this)}>POST</button>
      </div>
    );
  }

}

export default App;

