import ListingInfo from './listingInfo.jsx';

const ListingEntry = props => (
  <div className='listing-entry'>
    <span className="listing-entry-date"> {props.listing.createdAt} | </span>
    <span className="listing-entry-price"> {props.listing.price} | </span>
    <span className="listing-entry-location"> {props.listing.location} | </span>
    <span className="listing-entry-title" id={props.listing.listingId} onClick={props.handleListingEntryClick}> {props.listing.title} | </span>
    
  </div>
);

export default ListingEntry;