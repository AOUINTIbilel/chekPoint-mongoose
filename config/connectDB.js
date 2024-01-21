const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
    await mongoose.connect('mongodb+srv://aouintibilel:72221041@chekpoint-mongoose.dgbsxkm.mongodb.net/Persons');    
console.log("database connected..")   
} catch (error) {
        console.log(error)
    }
}
module.exports = connectDB 