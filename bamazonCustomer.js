// initial requires
var mysql = require("mysql");
var inquirer = require ("inquirer");
// connetcion info to SQL
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:"rhyn0key77",
    database: "bamazon" 
});
// leaving room for adding functions later

// checking connection to the database
connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as " + connection.threadId);
});

// starting function to display items
purchase();

function purchase(){
    connection.query('SELECT * FROM inventory',function(err,res){
        // console.log(res);s

        // using a loop to display products/prices to user
        for (var i = 0; i < res.length; i++){
            console.log('ID: ' +res[i].id + ' | Product: ' + res[i].product_name + ' | Department: ' + res[i].department_name + ' | Price: ' + res[i].price + ' | Remaining: ' + res[i].stock_quantity);

            console.log('=============================================================================================================');
        }
    })
}


// setting up inquirer
// inquirer
//     .prompt([{
//         type: 'list',
//         name: 'options',
//         message: 'Please choose the ID number of desired '



//     }]);

    // first prompt asks for the item number of what they want to purchase

    // the second prompt asks for a quantity

// upon order placement app needs to preform the following functions:

    // determine if the inventory avaliable will fill the order
        // IF NOT: clg an "Insuffecient Inventory" notification, and prevent the order from being placed.

        // IF SO: Complete the customer's order and perform the following functions:
            // Update the SQL database to reflect the remaining quantity of inventory.

            // Upon update of quantity, show the customer the total cost of the purchase.
 