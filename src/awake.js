var http = require("http");
setInterval(function() {
    http.get("https://mauricio-rosas-api.herokuapp.com");
}, 300000); 