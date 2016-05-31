  //Basic Stateless Functional Component
  let Filter = (props) => (
    <div> 
      {props.listings.map(listing, listing => 
        <div class='filter-item'>{ listing.location }</div>)}
    </div>
  );

  export default Filter;