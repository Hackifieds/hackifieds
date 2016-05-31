let ajaxGet = (callback) => {
  $.ajax({
    url: '/api/listings',
    method: 'GET',
    contentType: 'application/json',
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

let ajaxPost = () => {
  //placeholder - will be an input to the ajax request

  let mock = {
    title: 'Title',
    description: 'Description',
    location: 'Location2',
    price: Math.floor(Math.random() * 2000),
    startDate: Date.now(),
    endDate: Date.now(),
    createdAt: Date.now(),
    updatedAt: Date.now()
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