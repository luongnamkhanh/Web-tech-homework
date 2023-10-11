const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Name: "iPhone 13 Pro Max"
// Brand: "Apple"
// Operating System: "iOS 15"
// Release Date: "2021-09-24"
// Price: 1099
// Storage: "128 GB"
// RAM: "6 GB"
// Screen Size: "6.7 inches"
// Battery Capacity: "4352 mAh"
const smartPhoneSchema = new Schema({
    name: String,
    brand: String,
    operatingSystem: String,
    releaseDate: {
        type: Date,
        // required: true,
        default: Date.now
    },
    price: Number,
    storage: String,
    ram: String,
    screenSize: String,
    batteryCapacity: String,
});

    
module.exports = mongoose.model('smartPhones', smartPhoneSchema);;
