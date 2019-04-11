const mongoose =require('mongoose');


mongoose.connect("mongodb://localhost/mean-db", { useNewUrlParser: true });
  

module.exports = mongoose;
