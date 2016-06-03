import ListingInfo from './listingInfo.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

const ListingEntry = props => (
  <div className='listing-entry'>
    <Grid>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <span className="listing-entry-title" id={props.listing.listingId} onClick={props.handleListingEntryClick}><b>Title:</b> {props.listing.title}</span>
        </Col>
      </Row>
      <Row>
        <Col xs={2} md={2} lg={2}>
          <span className="listing-entry-price"><b>Price: $</b>{props.listing.price}</span>
        </Col>
        <Col xs={2} md={2} lg={2}>
          <span className="listing-entry-location"><b>Location:</b> {props.listing.location}</span>
        </Col>
        <Col xs={3} md={3} lg={3}>
          <span className="listing-entry-start-date"><b>Start:</b> {props.listing.startDate}</span>
        </Col>
        <Col xs={3} md={3} lg={3}>
          <span className="listing-entry-end-date"><b>End:</b> {props.listing.endDate}</span>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default ListingEntry;