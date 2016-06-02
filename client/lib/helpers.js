let getListings = (category, callback) => {
  $.ajax({
    url: '/api/listings',
    method: 'GET',
    contentType: 'application/json',
    data: {category: category},
    success: data => {
      console.log('GET success', data);
      callback(data);
    },
    error: (xhr, ajaxOptions, thrownException) => {
      console.log('Client GET error');
      console.log('XHR: ', xhr);
      console.log('ajaxOptions: ', ajaxOptions);
      console.log('Exception: ', thrownException);
    }
  });
};

let postListing = (category) => {
  //placeholder - will be an input to the ajax request
  let categories = {
    Rent: 1,
    Buy: 2,
    Hack: 3
  };
  
  let mock = {
<<<<<<< a42f904daaf22869a7f32a6a4ccc03bf5acb948e
    title: 'This is an example title',
    description: 'This is an example description',
    location: 'Location' + Math.floor(Math.random() * 10),
=======
    title: 'Title',
    description: 'Description',
    location: 'Location3',
>>>>>>> Added retrieveListings() function call to postListing function - refresh view.
    price: Math.floor(Math.random() * 2000),
    startDate: Date.now(),
    endDate: Date.now(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
    userId: 3,
    categoryId: categories[category]
  };

  $.ajax({
    url: '/api/listings',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(mock),
    success: data => {
      console.log('POST success', data);
    },
    error: (xhr, ajaxOptions, thrownException) => {
      console.log('Client POST error');
      console.log('XHR: ', xhr);
      console.log('ajaxOptions: ', ajaxOptions);
      console.log('Exception: ', thrownException);
    }
  });
};

export default { getListings, postListing };

