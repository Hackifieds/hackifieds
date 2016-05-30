import ListingEntry from './listingEntry.jsx';

let Listings = props => (
  <div className="listings">
    { props.listings.map( listing => <ListingEntry listing={listing}/> ) }
  </div>
);

export default Listings;

