import ListingEntry from './listingEntry.jsx';
import ListingInfo from './listingInfo.jsx';

const Listings = props => (
  <div className="listings">
    {props.listings.map(listing => 
      (props.activeListing && props.activeListing === listing.listingId) ? 
      <ListingInfo handleListingInfoClick = {props.handleListingInfoClick} listing={listing}/> : 
      <ListingEntry handleListingEntryClick={props.handleListingEntryClick} listing={listing}/>)
    }
  </div>
);

export default Listings;