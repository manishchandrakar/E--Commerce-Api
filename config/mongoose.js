const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB



// mongoose.connect('mongodb+srv://manishchandrakar2001:PUrRZkY3POiCC5vN@cluster0.w5fmnnm.mongodb.net/e-commerce'),{

mongoose.connect('mongodb+srv://manishchandrakar2001:PUrRZkY3POiCC5vN@cluster0.w5fmnnm.mongodb.net/e-commerce', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;