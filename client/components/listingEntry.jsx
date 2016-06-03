import ListingInfo from './listingInfo.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

const ListingEntry = props => (
  <div className='listing-entry'>
    <Grid>
      <Row>
        <Col xs={1} md={1} lg={1}>
          <span className="listing-entry-end-date">{props.listing.createdAt}</span>
        </Col>
        <Col xs={1} md={1} lg={1}>
          <span className="listing-entry-price">${props.listing.price}</span>
        </Col>
        <Col xs={2} md={2} lg={2}>
          <span className="listing-entry-location">{props.listing.location}</span>
        </Col>
        <Col xs={5} md={5} lg={5}>
          <span className="listing-entry-title" id={props.listing.listingId} onClick={props.handleListingEntryClick}>{props.listing.title}</span>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default ListingEntry;