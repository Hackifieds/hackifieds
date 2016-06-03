let Filter = props => {
  //Set default values for All items
  let locations = {All: 0};
  let filterLocs = ['All'];

  //Populate the filtered list
  props.listings.forEach( listing => {
    if( !locations[listing.location] ) {
      locations[listing.location] = 0;
      filterLocs.push(listing.location);
    }
    //Listings count for each filter item
    locations[listing.location]++;
    locations['All']++;
  });

  //Sort the filter items alphabetically
  filterLocs.sort();

  //Return the filter component
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

