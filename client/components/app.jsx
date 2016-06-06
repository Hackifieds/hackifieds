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

    window.globalVar = {};
    this.state = {
      categories: [],
      listings: [],
      navCategory: 'Rent',  //Default listings category to show
      activeFilter: 'All',  //Default filter to show All
      activeListing: parseInt(window.localStorage.getItem('activeListing')) || null, //If activeListing exists in localStorage, set state to that listing
      currentUser: {},
      currentView: 'listingsView'
    };
  }

  componentWillMount () {
    helpers.userAuth((user) => this.setSession(user));
    globalVar.callback = user => {
      user = user || {};
      this.setState({currentUser: user})
      this.setSession(user);
    };
    this.retrieveCategories();
    this.retrieveListings(this.state.navCategory);
  }

  retrieveCategories () {
    helpers.getCategories( data => this.setState({categories: data}) );
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
    this.setState({currentView: 'listingsView', navCategory: value, activeFilter: 'All'});
    this.retrieveListings(value);
  }

  handleFilterItemClick (event) {
    //Set the current activeFilter value
    this.setState({activeFilter: event.currentTarget.id});
  }

  handleListingEntryClick (event) {
    //Store the clicked listing in browser localStorage & set the current activeListing state
    let activeListing = Number(event.currentTarget.id);
    window.localStorage.setItem('activeListing', JSON.stringify(activeListing));
    this.setState({activeListing: activeListing});
  }

  handleListingInfoClick (event) {
    //Clear localStorage & set the current activeListing to null / close the Listing Info component
    window.localStorage.setItem('activeListing', null);
    this.setState({activeListing: null});
  }

  handleNewListingClick (event) {
    this.setState({currentView: 'newListingView'});
  }

  setSession (user) {
    this.setState({currentUser: user});
  }

  logOut () {
    helpers.logout( data => this.setState({ currentUser: {} }));
  }

  render () {
    let viewLogic;
    let loginLogic;
    let newListingLogic;

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
                      listings={this.state.listings}
                      user={this.state.currentUser}/>
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

    if (Object.keys(this.state.currentUser).length === 0) {
      loginLogic =
        <a href="/auth/github">Login with GitHub</a>;
      newListingLogic =
        <a href="/auth/github">Create New Listing</a>;
    } else {
      loginLogic =
        <a href="/" onClick={this.logOut.bind(this)}>Logout</a>;
      newListingLogic =
        <a href="javascript:void(0);" onClick={this.handleNewListingClick.bind(this)}>Create New Listing</a>;
    }

    return (
      <div className="app">
        {newListingLogic}
        {loginLogic}
        <Nav handleNavClick={this.handleNavClick.bind(this)}/>
        <Grid>
          {viewLogic}
        </Grid>
      </div>
    );
  }

}

export default App;

