import Nav from './nav.jsx';
import Filter from './filter.jsx';
import Listings from './listings.jsx';
import ListingInfo from './listingInfo.jsx';
import NewListing from './newListing.jsx';
import helpers from '../lib/helpers.js';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      categories: [],
      users: [],
      listings: [],
      navCategory: 'Rent',  //Default listings category to show
      activeFilter: 'All',  //Default filter to show All
      activeListing: null,  //Default to not show Listing Info component
      currentUser: {},
      currentView: 'listingsView'
    };
  }

  componentWillMount () {
    this.retrieveCategories();
    this.retrieveUsers();
    this.retrieveListings(this.state.navCategory);
    this.setCurrentUserByName('malaneti');
  }

  retrieveCategories () {
    helpers.getCategories( data => this.setState({categories: data}) );
  }

  retrieveUsers () {
    helpers.getUsers( data => this.setState({users: data}) );
  }

  setCurrentUserByName (name) {
    helpers.getUsers( data => { this.setState({currentUser: data.filter(usr => usr.username === name)[0]}) });
  }

  retrieveListings (category) {
    helpers.getListings( category, data => this.setState({listings: data}) );
  }

  sendListing (newListing) {
    helpers.postListing(newListing, data => {
      let newCategory = this.state.categories.filter(cat => cat.categoryId === newListing.categoryId);
      this.handleNavClick(newCategory[0].categoryName);
    });
  }

  handleNavClick (value) {
    this.setState({ currentView: 'listingsView', navCategory: value, activeFilter: 'All' });
    this.retrieveListings(value);
  }

  handleFilterItemClick(event) {
    //Set the current activeFilter value
    this.setState({ activeFilter: event.currentTarget.id });
  }

  handleListingEntryClick(event) {
    //Set the current activeListing
    this.setState({ activeListing: Number(event.currentTarget.id) });
  }

  handleListingInfoClick(event) {
    //Set the current activeListing to null / close the Listing Info component
    this.setState({ activeListing: null });
  }

  render () {
    let viewLogic;

    if ( this.state.currentView === 'listingsView' ) {
      viewLogic =
        <Row className="show-grid">
          <Col xs={2} md={2} lg={2}>
            <Filter handleFilterItemClick={this.handleFilterItemClick.bind(this)}
                    listings={this.state.listings}/>
          </Col>
          <Col xs={10} md={10} lg={10}>
            <Listings handleListingEntryClick={this.handleListingEntryClick.bind(this)}
                      handleListingInfoClick={this.handleListingInfoClick.bind(this)}
                      activeFilter={this.state.activeFilter}
                      activeListing={this.state.activeListing}
                      listings={this.state.listings}/>
          </Col>
        </Row>;
    } else if (this.state.currentView === 'newListingView' ) {
      viewLogic =
        <Row className="show-grid">
          <Col xs={12} md={12} lg={12}>
            <NewListing categories={this.state.categories}
                        navCategory={this.state.navCategory}
                        user={this.state.currentUser}
                        clickHandler={this.sendListing.bind(this)}/>
          </Col>
        </Row>;
    }

    return (
      <div className="app">
        <input type="button"
               value="Create New Listing"
               onClick={ () => this.setState({currentView: 'newListingView'}) }/>
        <Nav handleNavClick={this.handleNavClick.bind(this)}/>
        <Grid>
            {viewLogic}
        </Grid>
      </div>
    );
  }

}

export default App;

