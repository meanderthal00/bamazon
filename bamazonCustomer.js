// initial requires
var mysql = require("mysql");
var inquirer = require("inquirer");
// connetcion info to SQL
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rhyn0key77",
    database: "bamazon"
});
// leaving room for adding functions later

// checking connection to the database
connection.connect(function (err) {
    if (err) throw (err);
    console.log("Connected as " + connection.threadId);
    // starting function to display items
    purchase();
});


var stockArray = [];
console.log("stockArrayI" + stockArray);

function purchase() {
    connection.query('SELECT * FROM inventory', (err, res) => {
        // console.log(res);
        if (err) throw err;
        console.log("Here is a list of avaliable items:");
        console.log('=============================================================================================================');
        // for (var i = 0; i < res.length; i++) {
        //     stockArray.push(res[i].item)
        // }
        // console.log(stockArray);
    // })
    // using a loop to display products/prices to user
    for (var i = 0; i < res.length; i++) {
        console.log('ID: ' + res[i].id + ' | Product: ' + res[i].product_name + ' | Department: ' + res[i].department_name + ' | Price: ' + res[i].price + ' | Remaining: ' + res[i].stock_quantity);

        console.log('=============================================================================================================');
        // console.log("stockArrayII" + stockArray);
    }
    })
    // setting up inquirer
    // first prompt asks for the item number of what they want to purchase

    inquirer
        .prompt([{
            // prompt for purchase item
            type: 'rawlist',
            name: 'stock',
            message: 'Please choose the ID number of desired item ',
            choices: [function (value) {
                // var stockArray = [];
                for (var i = 0; i < res.length; i++) {
                    stockArray.push(res[i].inventory);
                }
                console.log(stockArray);
                return stockArray;
            }]
        }, {
            // prompt for quantity
            name: 'quantity',
            type: 'input',
            message: 'Please enter desired quantity.',
            validate: function (value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function (answer) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].id == answer.list) {
                    var itemChoice = res[i];
                }
            }
            console.log(itemChoice);

        })








}







// the second prompt asks for a quantity

// upon order placement app needs to preform the following functions:

// determine if the inventory avaliable will fill the order
// IF NOT: clg an "Insuffecient Inventory" notification, and prevent the order from being placed.

// IF SO: Complete the customer's order and perform the following functions:
// Update the SQL database to reflect the remaining quantity of inventory.

// Upon update of quantity, show the customer the total cost of the purchase.