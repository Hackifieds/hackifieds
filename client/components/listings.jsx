import ListingEntry from './listingEntry.jsx';

let Listings = props => (
  <div className="listings">
    { props.listings.map( listing => 
      if (props.state.activeListing) {
        <ListingInfo
      } else {
        <ListingEntry listing={listing}/> ) }
      }
  </div>
);

export default Listings;

