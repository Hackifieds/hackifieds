let Filter = props => {
  let locations = {All: 0};
  let filterLocs = ['All'];

  props.listings.forEach( listing => {
    if( !locations[listing.location] ) {
      locations[listing.location] = 0;
      filterLocs.push(listing.location);
    }
    locations[listing.location]++;
    locations['All']++;
  });

  filterLocs.sort();

  return (
    <div className='filter'>
      { filterLocs.map(loc => 
        <div>
          <span className='filter-item' id={loc} onClick={props.handleFilterItemClick}>{loc}</span>
          <span className='filter-count'>{'(' + locations[loc] + ')'}</span>
        </div>
      )}
    </div>
  );
};

export default Filter;

