import { Modal, Button } from 'react-bootstrap';
import helper from '../lib/helpers';

const ListingInfo = props => (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>{props.listing.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="listing-info-date"> List Date: {helper.dateFormatter(props.listing.createdAt)} </div>
        <div className="listing-info-location"> Location: {props.listing.location} </div>
        <div className="listing-info-price"> Price: ${props.listing.price} </div>
        <div className="listing-info-start-date"> Start Date: {helper.dateFormatter(props.listing.startDate)} </div>
        <div className="listing-info-end-date"> End Date: {helper.dateFormatter(props.listing.endDate)} </div>
        <div className="listing-info-description"> Description: {props.listing.description} </div>
        <div className="listing-info-email"> Email: {props.listing.email} </div>
        <div className="listing-info-telphone"> Telephone: {props.listing.telephone} </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.handleListingInfoClick}>Close</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);

export default ListingInfo;
