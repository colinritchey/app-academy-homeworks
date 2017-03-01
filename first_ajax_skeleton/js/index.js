console.log(Date.now(), "Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=d5b9f053bb73d62fc7bdd02f4de24144",
  type: "GET",
  success: function(weatherData) {
    console.log(Date.now(), "Success");
    console.log(weatherData);
  },
  error: function(errMsg) {
    console.log(errMsg);
  }
});
// Add another console log here, outside your AJAX request
console.log(Date.now(), "This is after the api request" );
