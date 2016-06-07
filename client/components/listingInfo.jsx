import { Modal, Button } from 'react-bootstrap';
import helper from '../lib/helpers';

const ListingInfo = props => {
  let contactLogic;

  if (Object.keys(props.user).length === 0) {
    contactLogic =
      <Button href='/auth/github'>Contact</Button>;
  } else {
    contactLogic =
      <div>
        <div>
          <span className="listing-info-email" type='email'> Email: </span>
          <a href={'mailto:' + props.listing.User.email}> {props.listing.User.email} </a>
        </div>
        <div>
          <span className="listing-info-telphone"> Telephone: </span>
          <a href={'tel:+' + props.listing.User.phone}> {props.listing.User.phone} </a>
        </div>
      </div>;
  }

  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title><span className="modal-title">{props.listing.title}</span></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <span className="listing-info-date"> List Date: </span>
            <span> {helper.dateFormatter(props.listing.createdAt)} </span>
          </div>
          <div>
            <span className="listing-info-location"> Location: </span>
            <span> {props.listing.location} </span>
          </div>
          <div>
            <span className="listing-info-price"> Price: </span>
            <span> ${props.listing.price} </span>
          </div>
          <div>
            <span className="listing-info-start-date"> Start Date: </span>
            <span> {helper.dateFormatter(props.listing.startDate)} </span>
          </div>
          <div>
            <span className="listing-info-end-date"> End Date: </span>
            <span> {helper.dateFormatter(props.listing.endDate)} </span>
          </div>
          <div>
            <span className="listing-info-description"> Description: </span>
            <span> {props.listing.description} </span>
          </div>
          <div>{props.listing.Images.map(image =>
            <div className="listing-image">
              <img src={image.path}/>
            </div>)}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="contact">
            {contactLogic}
          </div>
          <Button onClick={props.handleListingInfoClick}>Close</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  );
};

export default ListingInfo;

