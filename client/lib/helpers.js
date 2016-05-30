var ajaxGet = () => {
  console.log('Client GET called');
  $.ajax({
    url: '/api/listings',
    method: 'GET',
    contentType: 'application/json',
    success: function(data) {
      console.log('Client GET success', data);
    },
    error: function error(xhr, ajaxOptions, thrownException) {
      console.log('Client GET error');      
      console.log('XHR: ', xhr);
      console.log('ajaxOptions: ', ajaxOptions);
      console.log('Exception: ', thrownException);
    }
  });
};

var ajaxPost = () => {
  //placeholder - will be an input to the ajax request

  var data = {
    date: Math.floor(Math.random() * 10),
    title: Math.floor(Math.random() * 100),
    description: Math.floor(Math.random() * 1000),
    location: Math.floor(Math.random() * 10000),
    price: Math.floor(Math.random() * 100000)
  };
  console.log(JSON.stringify(data));
  $.ajax({
    url: '/api/listings',
    method: 'POST',
    data: JSON.stringify(data),
    success: function(data) {
      console.log('POST success', data);
    }
  });
};