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

  var mock = {
    title: 'Test data',
    description: 'Test data',
    location: 'Test data',
    price: Math.floor(Math.random() * 2000),
    startDate: Date.now(),
    endDate: Date.now(),
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  console.log(mock);
  console.log(JSON.stringify(mock));
  $.ajax({
    url: '/api/listings',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(mock),
    success: function(data) {
      console.log('POST success', data);
    },
    error: function error(xhr, ajaxOptions, thrownException) {
      console.log('Client GET error');      
      console.log('XHR: ', xhr);
      console.log('ajaxOptions: ', ajaxOptions);
      console.log('Exception: ', thrownException);
    }    
  });
};