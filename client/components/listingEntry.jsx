let ListingEntry = props => (
  <div>
    <p>
      <span> {props.listing.date} / </span>
      <span> {props.listing.location} / </span>
      <span> {props.listing.price}</span>
    </p>
    <p>{props.listing.title}</p>
    <p>{props.listing.description}</p>
  </div>
);

export default ListingEntry;

