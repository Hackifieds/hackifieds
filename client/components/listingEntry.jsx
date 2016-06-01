let ListingEntry = props => (
  <div>
    <div class="listing-date"> {props.listing.createdAt} | </div>
    <div class="listing-price"> {props.listing.price} | </div>
    <div class="listing-location"> {props.listing.location} | </div>
    <div<ListingInfo class="listing-title" listing={props.listing.title}/> </div>
  </div>
);

export default ListingEntry;

