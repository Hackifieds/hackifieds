import { Modal, Button } from 'react-bootstrap';
import helper from '../lib/helpers';

class NewListing extends React.Component {

  constructor (props) {
    super(props);
    this.newListing = {};
  }

  setListingField (field, value) {
    this.newListing[field] = value;
  }

  submitHandler () {
    if ( ! this.newListing.categoryId ) {
      let currentCat = this.props.categories.filter(cat => {
        return cat.categoryName === this.props.navCategory;
      });
      this.newListing.categoryId = currentCat[0].categoryId;
    }
    this.newListing.userId = this.props.user.userId;
    this.props.clickHandler(this.newListing);
  }































  render () {
    return (
      <form className="newListing">
        <p>
          <input type="button" value="Submit Listing"
                 onClick={ () => this.submitHandler() }/>
          <input type="reset" value="Reset Form Fields"/>
        </p>
      </form>
    );
  }
}

export default NewListing;


import { Modal, Button } from 'react-bootstrap';
import helper from '../lib/helpers';

const ListingInfo = props => {
  let contactLogic;

  if (Object.keys(props.user).length === 0) {
    contactLogic =
      <a href='/auth/github'>Contact</a>;
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
          <Modal.Title>{props.listing.title}</Modal.Title>
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
          {contactLogic}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.handleListingInfoClick}>Close</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  );
};

export default ListingInfo;

const formInstance = (
  <form className='newListing'>
    <FormGroup controlId="formControlsText">
      <ControlLabel>Posting Title</ControlLabel>
      <FormControl type="text" name="listingTitle" id="listingTitle" size="72"
                   maxlength="72" placeholder=" Add a title to your listing here" required
                   onChange={ e => this.setListingField('title', e.target.value) } />
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Post in</ControlLabel>
      <FormControl componentClass="select" name="listingCategory" id="listingCategory" required
                   defaultValue={this.props.navCategory}
                   onChange={ e => this.setListingField('categoryId',
                    this.props.categories.filter(cat => cat.categoryName === e.target.value)[0].categoryId) }>
                    { this.props.categories.map( cat => <option key={cat.categoryId}
                      value={cat.categoryName}>{cat.categoryName}</option> ) }
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsText">
      <ControlLabel>Location</ControlLabel>
      <FormControl type="text" name="listingLocation" id="listingLocation" required
                   size="48" maxlength="48"
                   placeholder=" Enter listing location here"
                   onChange={ e => this.setListingField('location', e.target.value) }/>
    </FormGroup>

    <FormGroup controlId="formControlsText">
      <ControlLabel>Price</ControlLabel>
      <FormControl type="number" name="listingPrice" id="listingPrice"
                   placeholder=" 0"
                   onChange={ e => this.setListingField('price', e.target.value) }/>
    </FormGroup>

    <FormGroup controlId="formControlsText">
      <ControlLabel>Start Date</ControlLabel>
      <FormControl type="date" name="listingStartDate" id="listingStartDate"
                   defaultValue={ new Date().getFullYear() + '-'
                    + ( new Date().getMonth() + 1 < 10 ? '0' : '' ) + (new Date().getMonth() + 1) + '-'
                    + ( new Date().getDate() < 10 ? '0' : '' ) + new Date().getDate() }
                   onChange={ e => this.setListingField('startDate', e.target.value) }/>
    </FormGroup>

    <FormGroup controlId="formControlsText">
      <ControlLabel>End Date</ControlLabel>
      <FormControl type="date" name="listingEndDate" id="listingEndDate"
                   defaultValue={ new Date().getFullYear() + '-'
                    + ( new Date().getMonth() + 1 < 10 ? '0' : '' ) + (new Date().getMonth() + 1) + '-'
                    + ( new Date().getDate() < 10 ? '0' : '' ) + new Date().getDate() }
                   onChange={ e => this.setListingField('endDate', e.target.value) }/>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Description</ControlLabel>
      <FormControl componentClass="textarea" name="listingDescription" id="listingDescription" cols="80"
                  maxlength="4096" rows="24" required
                  placeholder=" Enter listing title here"
                  onChange={ e => this.setListingField('description', e.target.value) }/>
    </FormGroup>

    <FormGroup controlId="formControlsEmail">
      <ControlLabel>Email address</ControlLabel>
      <FormControl type="email" placeholder="Enter email" disabled/>
    </FormGroup>

    <FormGroup controlId="formControlsFile">
      <ControlLabel>File</ControlLabel>
      <FormControl type="file" />
      <HelpBlock>Do we need some help block text here?</HelpBlock>
    </FormGroup>

    <Button type="submit" onClick={ () => this.submitHandler() }>
      Post My Listing
    </Button>
    <Button type="reset">
      Reset Form Fields
    </Button>

  </form>
);

