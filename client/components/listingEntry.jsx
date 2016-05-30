let ListingEntry = props => (
  <div>
    <span class="listingDate"> {props.listing.date} | </span>
    <span class="listingPrice"> {props.listing.price} | </span>
    <span class="listingLocation"> {props.listing.location} | </span>
    <span class="listingTitle"> {props.listing.title} </span>
  </div>
);

export default ListingEntry;

