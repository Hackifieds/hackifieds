import Listings from './listings.jsx';
import ListingInfo from './listingInfo.jsx';
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
      loggedIn: false
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
    helpers.postListing(this.state.navCategory);
    this.retrieveListings(this.state.navCategory);
  }

  handleNavClick(value) {
    this.setState({
      navCategory: value
    });
    this.retrieveListings(value);
  }
  
  handleListingEntryClick(event) {
    this.setState({
      activeListing: Number(event.currentTarget.id)
    });
  }

  handleListingInfoClick(event) {
    this.setState({
      activeListing: null
    });
  }

  loggedIn(){
    this.setState({

      loggedIn: true
    });
  }



  render () {
    return (
      <div className='app'>
        <Nav handleNavClick={this.handleNavClick.bind(this)}/>
        <Listings handleListingEntryClick={this.handleListingEntryClick.bind(this)} 
                  handleListingInfoClick={this.handleListingInfoClick.bind(this)}
                  activeListing={this.state.activeListing}
                  listings={this.state.listings}/>
        <Filter listings={this.state.listings}/>
        <button id="getButton" type="button" onClick={this.retrieveListings.bind(this)}>GET</button>
        <button id="postButton" type="button" onClick={this.sendListing.bind(this)}>POST</button>
        <p>
          {this.state.loggedIn ? (
            <a href="mailto:someone@example.com?Subject=Hello%20again" >Send mail!</a>) : 
            (
              <div>
                <a href="/api/auth/github/" onClick={this.loggedIn.bind(this)}>Login</a>
              </div>
            ) 
          }
        </p>
      </div>
    );
  }

}

export default App;

