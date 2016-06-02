import Nav from './nav.jsx';
import Filter from './filter.jsx';
import Listings from './listings.jsx';
import ListingInfo from './listingInfo.jsx';
import helpers from '../lib/helpers.js';
import { Grid, Row, Col } from 'react-bootstrap';

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
    helpers.postListing(this.state.navCategory);
    this.retrieveListings(this.state.navCategory);
  }

  handleNavClick(value) {
    this.setState({
      navCategory: value
    });
    this.retrieveListings(value);
  }

  handleFilterItemClick(event) {
    this.setState({
      activeFilter: event.currentTarget.id
    });
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

  render () {
    return (
      <div className='app'>
        <Nav handleNavClick={this.handleNavClick.bind(this)}/>
        <Grid>
          <Row className="show-grid">
            <Col xs={4} md={4}>
              <Filter handleFilterItemClick={this.handleFilterItemClick.bind(this)} listings={this.state.listings}/>
            </Col>
            <Col xs={8} md={8}>
              <Listings handleListingEntryClick={this.handleListingEntryClick.bind(this)} 
                  handleListingInfoClick={this.handleListingInfoClick.bind(this)}
                  activeFilter={this.state.activeFilter}
                  activeListing={this.state.activeListing}
                  listings={this.state.listings}/>
            </Col>
          </Row>
        </Grid>
        <button id="getButton" type="button" onClick={this.retrieveListings.bind(this)}>GET</button>
        <button id="postButton" type="button" onClick={this.sendListing.bind(this)}>POST</button>
      </div>
    );
  }

}

export default App;

