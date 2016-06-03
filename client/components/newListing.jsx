let NewListing = props => (
  <form className="newListing">
    <p>
      Title:
      <input type="text" name="listingTitle" id="listingTitle" size="72" maxlength="72" placeholder=" Enter listing title here"/>
    </p>
    <p>
      <select name="listingCategory" id="listingCategory">
        <option defaultValue value="Rent">Rent</option>
        <option value="Buy">Buy</option>
        <option value="Hack">Hack</option>
      </select>
    </p>
    <p>
      Location:
      <input type="text" name="listingLocation" id="listingLocation" size="48" maxlength="48" placeholder=" Enter listing location here"/>
    </p>
    <p>
      Price:
      <input type="number" name="listingPrice" id="listingPrice" placeholder=" 0"/>
    </p>
    <p>
      Start Date:
      <input type="date" name="listingStartDate" id="listingStartDate"
             defaultValue={new Date().getFullYear() + '-'
                    + ( new Date().getMonth() + 1 < 10 ? '0' : '' ) + (new Date().getMonth() + 1) + '-'
                    + ( new Date().getDate() < 10 ? '0' : '' ) + new Date().getDate()
                   }
      />
    </p>
    <p>
      End Date:
      <input type="date" name="listingEndDate" id="listingEndDate"
             defaultValue={new Date().getFullYear() + '-'
                    + ( new Date().getMonth() + 1 < 10 ? '0' : '' ) + (new Date().getMonth() + 1) + '-'
                    + ( new Date().getDate() < 10 ? '0' : '' ) + new Date().getDate()
                   }
      />
    </p>
    <p>
      Description:
      <p>
        <textarea name="listingDescription" id="listingDescription" cols="80" maxlength="4096" rows="24" placeholder=" Enter listing title here"/>
      </p>
    </p>
     <p>
      <input type="button" value="Submit Listing"/>
      <input type="reset" value="Reset Form Fields"/>
    </p>
  </form>
);

export default NewListing;

