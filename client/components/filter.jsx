let Filter = props => {
  let locations = {};
  let filterLocs = [];

  props.listings.forEach( listing => {
    if( !locations[listing.location] ) {
      locations[listing.location] = 0;
      filterLocs.push(listing.location);
    }
    locations[listing.location]++;
  });

  filterLocs.sort();

  return (
    <div>
      { filterLocs.map(loc => 
        <div>
          <span className='filter-item'>Filter: {loc}</span>
          <span className='filter-count'>{'(' + locations[loc] + ')'}</span>
        </div>
      )}
    </div>
  );
};

export default Filter;

