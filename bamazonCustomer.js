// initial requires
var mysql = require("mysql");
var inquirer = require ("inquirer");
// connetcion info to SQL
var connetcion = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:"rhyn0key77",
    database: "bamazon" 
});
// leaving room for adding functions later






// setting up inquirer


    // first prompt asks for the item number of what they want to purchase

    // the second prompt asks for a quantity

// upon order placement app needs to preform the following functions:

    // determine if the inventory avaliable will fill the order
        // IF NOT: clg an "Insuffecient Inventory" notification, and prevent the order from being placed.

        // IF SO: Complete the customer's order and perform the following functions:
            // Update the SQL database to reflect the remaining quantity of inventory.

            // Upon update of quantity, show the customer the total cost of the purchase.
 