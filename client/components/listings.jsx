import ListingEntry from './listingEntry.jsx';
import ListingInfo from './listingInfo.jsx';

const Listings = props => {
  let filtered = [];
  props.listings.forEach(listing => {
    if (props.activeFilter === 'All' || listing.location === props.activeFilter) {
      filtered.push(listing);
    }
  });

  return (
    <div className="listings">
      {filtered.map(listing => 
        (props.activeListing && props.activeListing === listing.listingId) ? 
        <ListingInfo handleListingInfoClick = {props.handleListingInfoClick} listing={listing}/> : 
        <ListingEntry handleListingEntryClick={props.handleListingEntryClick} listing={listing}/>)
      }
    </div>
  );
};

export default Listings;