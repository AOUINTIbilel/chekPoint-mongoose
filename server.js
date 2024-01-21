const express = require ("express");

const connectDB = require("./config/connectDB")

const Person = require("./model/personModal")

const app = express();

connectDB();

//app.get("/",(req,res)=>{
//    res.send("hello Word")
// })

const createPersonDoc = async()=>{
    try {
        const doc = new Person({name:"Bilel", age: 35, favoriteFoods:['RUZ', 'Chappati', 'Crepe']});
        await doc.save();
        console.log("new person :" , doc )
    } catch (error) {
        console.log(error)
    }
}
//createPersonDoc()

// ***** find one person : **********
const findPersons = async ()=>{
    try {
        const personData = await Person.find({});
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
};
//findPersons()

// ***** find one person : **********
const findPerson = async ()=>{
    try {
        const personData = await Person.findOne({name:"Ramzi"});
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
}; 
//findPerson()

// ************ find one person By ID : *******************
const findPersonById = async ()=>{
    try {
        const personData = await Person.findById("65ad99a79f332fc68eaebb26");
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
}; 
//findPersonById()

// **************** Update person : ****************************
const updatePersonById = async ()=>{
    try {
        const personData = await Person.findByIdAndUpdate("65ad975a0de6eda961acc43d" ,{favoriteFoods:['Dourade grillée', 'Fruit de mer', 'frite']} );
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
}; 
//updatePersonById()

//  *************** find by ID and remove : *****************
const removePersonById = async ()=>{
    try {
        const personData = await Person.findByIdAndDelete("65ad975a0de6eda961acc43d");
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
};
removePersonById()


const PORT = 5002 ;

app.listen(PORT,(err)=>
err? console.log(err):
console.log(`server is running on port : ${PORT}`))
