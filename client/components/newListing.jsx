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
          Title:
            <input type="text" name="listingTitle" id="listingTitle" size="72"
                   maxlength="72" placeholder=" Enter listing title here"
                   onChange={ e => this.setListingField('title', e.target.value) }/>
        </p>
        <p>
          <select name="listingCategory" id="listingCategory" defaultValue={this.props.navCategory}
                  onChange={ e => this.setListingField('categoryId',
                    this.props.categories.filter(cat => cat.categoryName === e.target.value)[0].categoryId) }>
            { this.props.categories.map( cat => <option key={cat.categoryId}
              value={cat.categoryName}
              >{cat.categoryName}</option> ) }
          </select>
        </p>
        <p>
          Location:
          <input type="text" name="listingLocation" id="listingLocation"
                 size="48" maxlength="48"
                 placeholder=" Enter listing location here"
                 onChange={ e => this.setListingField('location', e.target.value) }/>
        </p>
        <p>
          Price:
          <input type="number" name="listingPrice" id="listingPrice"
                 placeholder=" 0"
                 onChange={ e => this.setListingField('price', e.target.value) }/>
        </p>
        <p>
          Start Date:
          <input type="date" name="listingStartDate" id="listingStartDate"
                 defaultValue={ new Date().getFullYear() + '-'
                   + ( new Date().getMonth() + 1 < 10 ? '0' : '' ) + (new Date().getMonth() + 1) + '-'
                   + ( new Date().getDate() < 10 ? '0' : '' ) + new Date().getDate() }
                 onChange={ e => this.setListingField('startDate', e.target.value) }/>
        </p>
        <p>
          End Date:
          <input type="date" name="listingEndDate" id="listingEndDate"
                 defaultValue={ new Date().getFullYear() + '-'
                   + ( new Date().getMonth() + 1 < 10 ? '0' : '' ) + (new Date().getMonth() + 1) + '-'
                   + ( new Date().getDate() < 10 ? '0' : '' ) + new Date().getDate() }
                 onChange={ e => this.setListingField('endDate', e.target.value) }/>
        </p>
        <p>Description:</p>
        <textarea name="listingDescription" id="listingDescription" cols="80"
                  maxlength="4096" rows="24"
                  placeholder=" Enter listing title here"
                  onChange={ e => this.setListingField('description', e.target.value) }/>
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

