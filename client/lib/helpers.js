
let helpers = {
  get: () => {
    $.ajax({
      url: '',
      method: 'GET',
      success: function(data) {
        console.log('Success', data);
        window.listing = JSON.parse(data);
      }
    });
  },
  post: (data) => {
    $.ajax({
      url: '',
      method: 'POST',
      data: JSON.stringify(data),
      success: function(data) {
        console.log('Success', data);
      }
    });
  }
};

module.exports = helpers;
