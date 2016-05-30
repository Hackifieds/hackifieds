let ListingEntry = props => (
  <div>
    <span class="listing-date"> {props.listing.createdAt} | </span>
    <span class="listing-price"> {props.listing.price} | </span>
    <span class="listing-location"> {props.listing.location} | </span>
    <span class="listing-title"> {props.listing.title} </span>
  </div>
);

export default ListingEntry;

