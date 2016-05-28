var ajaxGet = () => {
  console.log('called');
  $.ajax({
    url: '/api/listings',
    method: 'GET',
    contentType: 'application/json',
    success: function(data) {
      console.log('hi');
      console.log('GET success', data);
    },
    error: function(a, b, c, d) {
      console.log('ola');
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
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