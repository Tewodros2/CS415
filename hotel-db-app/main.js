/*
*Main.js

*/
const currentDateTime = new Date();
console.log(`Hello HotelDBApp.DateTime is  ${currentDateTime}`);

const mysql = require("mysql");

const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "hotel-db-sys",
    password: "123456",

})

dbConnection.connect((error) => {
    if (error)
        throw error;
});

//fetch list of all hotels 
const qrystrGetAllHotels = " select * from `hottelfinder-db`.`hotel`";
dbConnection.query(qrystrGetAllHotels, (error, result) => {
    if (error)
        throw error;
    console.log(`list of all hotels`);
    //console.log(result);
    displayHotels(result);
})
const displayHotels = function (hotels) {
    for (let hotel of hotels) {
        console.log(`HotelNo: ${hotel.hotelNo}, hotelName : ${hotel.hotelNmae} City: ${hotel.city}`)
    }
}
dbConnection.end();
