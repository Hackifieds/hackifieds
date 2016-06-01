let ListingDetail = props => (
  <div>
    <div class="listing-detail-title"> {props.listing.title} </div>
    <div class="listing-detail-location"> {props.listing.location} | </div>
    <div class="listing-detail-price"> {props.listing.price} | </div>
    <div class="listing-detail-date"> {props.listing.createdAt} | </div>
    <div class="listing-detail-description" listing={props.listing}> {props.listing.description}/> | </div>
  </div>
);

export default ListingDetail;
