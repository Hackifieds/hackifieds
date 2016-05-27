var ajaxGet = () => {
  console.log('called');
  $.ajax({
    url: '/api/listings',
    method: 'GET',
    success: function(data) {
      console.log('GET success', data);
    },
    error: function(a, b, c, d) {
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
    }
  });
};

var ajaxPost = () => {
  //placeholder - will be an input to the ajax request

  let data = {
    date: '26 May 2016' + Math.floor(Math.random() * 100),
    title: 'Room to let in apartment centrally located',
    description: 'Clean room located in heart of Tenderloin, 10 minute walk to HR',
    location: 'Tenderloin',
    price: '$' + Math.floor(Math.random() * 2000) + 'pm'
  };

  $.ajax({
    url: '/api/listings',
    method: 'POST',
    data: JSON.stringify(data),
    success: function(data) {
      console.log('POST success', data);
    }
  });
};