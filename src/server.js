const mongoose = require('mongoose');
require('dotenv').config({path: './variables.env'});

const port = normalizePort(process.env.PORT || 3000);

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.error("Error "+error.message);
})

require('./modules/model/Product');
require('./modules/model/Category');
require('./modules/model/User');

const app = require("./app");

app.listen(port, () => {
    console.log("server is running");
});

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }