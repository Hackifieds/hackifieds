let getCategories = callback => {
  $.ajax({
    url: '/api/categories',
    method: 'GET',
    contentType: 'application/json',
    success: data => callback(data),
    error: err => console.log( 'Error getting categories from server.', err)
  });
};

let getUsers = callback => {
  $.ajax({
    url: '/api/users',
    method: 'GET',
    contentType: 'application/json',
    success: data => callback(data),
    error: err => console.log( 'Error getting users from server.', err)
  });
};

//Helper functions performing AJAX requests
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

let postListing = (listing, callback) => {
  $.ajax({
    url: '/api/listings',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(listing),
    success: data => callback(data),
    error: err => console.log( 'Error sending listing to server.', err)
  });
};

export default { getCategories, getUsers, getListings, postListing };

