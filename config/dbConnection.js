var mongoose = require('mongoose');

function connectWithMongodb() {
  mongoose.connect(MONGO_URL + DB_NAME, (error) => {
    if (!error) {
      console.log('Connection with mongodb is successfully establish');
      return true;
    }
    console.log('Error while connect with mongo db ', JSON.stringify(error));
    return false;
  });

  
}





connectWithMongodb();

require('./../collection/userDetailSchema');
require('./../collection/driverDetailSchema');
require('./../collection/orderDetailSchema');
require('./../collection/deliveryDetailScehma');
require('./../collection/driverScheduleSchema');
require('./../collection/userLogInSchema');