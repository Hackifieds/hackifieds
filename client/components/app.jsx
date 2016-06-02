import Listings from './listings.jsx';
import Filter from './filter.jsx';
import helpers from '../lib/helpers.js';
import Nav from './nav.jsx';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      listings: [],
      navCategory: 'Rent',
      activeFilter: 'All',
      activeListing: null
    };
  }

  componentWillMount () {
    this.retrieveListings(this.state.navCategory);
  }

  retrieveListings (category) {
    helpers.getListings( category, data => {
      this.setState( {
        listings: data
      })
    });
  }

  sendListing () {
    helpers.postListing();
    this.retrieveListings();
  }

  handleNavClick(value) {
    this.setState({
      navCategory: value
    });
    this.retrieveListings(value);
  }
  
  handleListingEntryClick(event) {
    if (event.currentTarget.class === 'listing-title') {

    }
  }

  render () {
    return (
      <div>
        <Nav handleNavClick={this.handleNavClick.bind(this)}/>
        <Listings handleListingEntryClick={this.handleListingEntryClick.bind(this)} listings={this.state.listings}/>
        <Filter listings={this.state.listings}/>
        <button id="getButton" type="button" onClick={this.retrieveListings.bind(this)}>GET</button>
        <button id="postButton" type="button" onClick={this.sendListing.bind(this)}>POST</button>
      </div>
    );
  }

}

export default App;

