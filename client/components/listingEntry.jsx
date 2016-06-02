import ListingInfo from './listingInfo.jsx';

const ListingEntry = props => (
  <div>
    <span className="listing-date"> {props.listing.createdAt} | </span>
    <span className="listing-price"> {props.listing.price} | </span>
    <span className="listing-location"> {props.listing.location} | </span>
    <span className="listing-title" onClick={props.handleListingEntryClick}> {props.listing.title} | </span>
    
  </div>
);

export default ListingEntry;