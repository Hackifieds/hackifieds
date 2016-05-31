  //Basic Stateless Functional Component

let Filter = (props) => {
  let locations = {};
  let filterLocs = [];

  props.listings.forEach(listing => {
    if(!locations[listing.location]) {
      locations[listing.location] = listing.location;
      filterLocs.push(listing.location);
    }
  });

  filterLocs.sort();

  return (
    <div> 
      {
        filterLocs.map(loc => <div class='filter-item'>{ loc }</div>)
      }
    </div>
  );
};

export default Filter;