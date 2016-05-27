
let helpers = {
  ajaxGet: () => {
    $.ajax({
      url: '',
      method: 'GET',
      success: function(data) {
        console.log('Success', data);
        window.listing = JSON.parse(data);
      }
    });
  },
  ajaxPost: (data) => {
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
