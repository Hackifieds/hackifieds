let getListings = (category, callback) => {
  $.ajax({
    url: '/api/listings',
    method: 'GET',
    contentType: 'application/json',
    data: {category: category},
    success: data => callback(data),
    error: err => console.log( 'Error getting listings from server.', err)
  });
};

let postListing = listing => {
  $.ajax({
    url: '/api/listings',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(listing),
    success: data => console.log('Sent new listing to server.', data),
    error: err => console.log( 'Error sending listing to server.', err)
  });
};

export default { getListings, postListing };

