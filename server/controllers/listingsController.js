var db = require('../../db/db');
var _ = require('underscore');

//Controller method - retrieve joined listing/user/category fields from DB
exports.getAll = function(category, callback) {
  // Listing.findAll({ order: ['createdAt', 'DESC'] })
  db.Listing.findAll({
    include:
    [{
      model: db.Category,
      attributes: ['categoryName'],
      where: {categoryName: category},
    },
    {
      model: db.User,
      attributes: ['username', 'phone', 'email']
    },
    {
      model: db.Image,
      attributes: ['path']
    }],
    order: 'createdAt DESC'
  })
    .then(function(listings) {
      callback(200, listings);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

//Controller method - add a listings to DB
exports.addOne = function(listing, images, callback) {
  db.Listing.create(listing)
    .then(function(listing) {
      if (images.length > 0) {
        _.each(images, function(image) {
          var img = {
            path: 'uploads/' + image.filename,
            listingId: listing.listingId
          };
          db.Image.create(img)
            .then(function(image) {
              console.log('Image upload successful');
            })
            .catch(function(error) {
              console.error(error);
            });
        });
      }
      callback(201, listing);
    })
    .catch(function(error) {
      console.error(error);
      callback(404, error);
    });
};

