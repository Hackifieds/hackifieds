import { Col, Row, Modal, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import helper from '../lib/helpers';

class NewListing extends React.Component {

  constructor (props) {
    super(props);
    this.newListing = {};
    this.images = [];
  }

  setListingField (field, value) {
    this.newListing[field] = value;
  }

  setUploadImage (images) {
    this.images = images;
  }

  submitHandler () {
    if ( ! this.newListing.categoryId ) {
      let currentCat = this.props.categories.filter(cat => {
        return cat.categoryName === this.props.navCategory;
      });
      this.newListing.categoryId = currentCat[0].categoryId;
    }
    this.newListing.userId = this.props.user.userId;
    this.props.clickHandler(this.newListing, this.images);
  }

  render () {
    return (
      <div className="static-modal">
        <Modal.Dialog bsSize="large">
          <form horizontal className='newListing' enctype="multipart/form-data">
            <Modal.Body>
              <FormGroup inline>
                <Row>
                  <Col sm={1}></Col>
                  <Col componentClass={ControlLabel} sm={2}>Title*</Col>
                  <Col sm={8}>
                    <FormControl type="text" name="listingTitle" id="listingTitle" size="72"
                                 maxlength="72" placeholder="Enter the title of your listing here" required
                                 onChange={ e => this.setListingField('title', e.target.value) } />
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </FormGroup>
              <FormGroup inline>
                <Row>
                  <Col sm={1}></Col>
                  <Col componentClass={ControlLabel} sm={2}>Post in*</Col>
                  <Col sm={3}>
                    <FormControl componentClass="select" name="listingCategory" id="listingCategory" required
                                 defaultValue={this.props.navCategory}
                                 onChange={ e => this.setListingField('categoryId',
                                  this.props.categories.filter(cat => cat.categoryName === e.target.value)[0].categoryId) }>
                                  { this.props.categories.map( cat => <option key={cat.categoryId}
                                    value={cat.categoryName}>{cat.categoryName}</option> ) }
                    </FormControl>
                  </Col>
                  <Col sm={6}></Col>
                </Row>
              </FormGroup>

              <FormGroup inline>
                <Row>
                  <Col sm={1}></Col>
                  <Col componentClass={ControlLabel} sm={2}>Location*</Col>
                  <Col sm={3}>
                    <FormControl type="text" name="listingLocation" id="listingLocation" required
                                 size="48" maxlength="48"
                                 placeholder="Enter your location"
                                 onChange={ e => this.setListingField('location', e.target.value) }/>
                  </Col>
                  <Col componentClass={ControlLabel} sm={2}>Price</Col>
                  <Col sm={3}>
                    <FormControl type="number" name="listingPrice" id="listingPrice"
                                 placeholder="0"
                                 onChange={ e => this.setListingField('price', e.target.value) }/>
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </FormGroup>

              <FormGroup inline>
                <Row>
                  <Col sm={1}></Col>
                  <Col componentClass={ControlLabel} sm={2}>Telephone</Col>
                  <Col sm={3}>
                    <FormControl type="text" name="listingLocation" id="listingLocation" required
                                 pattern='/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/'
                                 placeholder="Enter your contact number here"
                                 onChange={ e => this.setListingField('telephone', e.target.value) }/>
                  </Col>
                  <Col componentClass={ControlLabel} sm={2}>Email*</Col>
                  <Col sm={3}>
                    <FormControl type="email" placeholder="Email address per Github" disabled/>
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </FormGroup>

              <FormGroup inline>
                <Row>
                  <Col sm={1}></Col>
                  <Col componentClass={ControlLabel} sm={2}>Start Date</Col>
                  <Col sm={3}>
                    <FormControl type="date" name="listingStartDate" id="listingStartDate"
                                 defaultValue={ new Date().getFullYear() + '-'
                                  + ( new Date().getMonth() + 1 < 10 ? '0' : '' ) + (new Date().getMonth() + 1) + '-'
                                  + ( new Date().getDate() < 10 ? '0' : '' ) + new Date().getDate() }
                                 onChange={ e => this.setListingField('startDate', e.target.value) }/>
                  </Col>
                  <Col componentClass={ControlLabel} sm={2}>End Date</Col>
                  <Col sm={3}>
                    <FormControl type="date" name="listingEndDate" id="listingEndDate"
                                 defaultValue={ new Date().getFullYear() + '-'
                                  + ( new Date().getMonth() + 1 < 10 ? '0' : '' ) + (new Date().getMonth() + 1) + '-'
                                  + ( new Date().getDate() < 10 ? '0' : '' ) + new Date().getDate() }
                                 onChange={ e => this.setListingField('endDate', e.target.value) }/>
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </FormGroup>
            
              <FormGroup inline>
                <Row>
                  <Col sm={1}></Col>
                  <Col componentClass={ControlLabel} sm={2}>Description*</Col>
                  <Col sm={8}>
                    <FormControl componentClass="textarea" name="listingDescription" id="listingDescription" cols="80"
                                maxlength="4096" rows="10" required
                                placeholder="Enter the details of your listing here"
                                onChange={ e => this.setListingField('description', e.target.value) }/>
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </FormGroup>

              <FormGroup inline>
                <Row>
                  <Col sm={1}></Col>
                  <Col componentClass={ControlLabel} sm={2}>Images</Col>
                  <Col sm={8}>
                    <FormControl type="file" name="images" multiple="multiple" onChange={ e => this.setUploadImage(e.target.files) }/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={3}></Col>
                  <Col sm={8}>
                    <HelpBlock>Upload images to be displayed in your posting</HelpBlock>
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <FormGroup inline>
                <Row>
                  <Col sm={3}></Col>
                  <Col sm={3}>
                    <Button type="submit" onClick={ () => this.submitHandler() }>
                      Post My Listing
                    </Button>
                    <Button onClick={ this.props.handleNewListingClose }>Close</Button>
                  </Col>
                  <Col sm={6}></Col>
                </Row>
              </FormGroup>
            </Modal.Footer>
          </form>
        </Modal.Dialog>
      </div>
    );
  }
}

export default NewListing;

