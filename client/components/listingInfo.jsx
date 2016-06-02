const ListingInfo = props => (
  <div>
    <div className="listing-detail-date"> {props.listing.createdAt} | </div>
    <div className="listing-detail-title"> {props.listing.title} </div>
    <div className="listing-detail-location"> {props.listing.location} | </div>
    <div className="listing-detail-price"> {props.listing.price} | </div>
    <div className="listing-detail-description"> {props.listing.description} | </div>
    <div className="listing-detail-email"> {props.listing.email} | </div>
    <div className="listing-detail-telphone"> {props.listing.telephone} | </div>
  </div>
);

export default ListingInfo;
