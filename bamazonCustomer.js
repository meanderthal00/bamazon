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


// var stockArray = [];
// console.log("stockArrayI" + stockArray);

function purchase() {
    connection.query('SELECT * FROM inventory', (err, res) => {
        // console.log(res);
        if (err) throw err;
        console.log("Here is a list of avaliable items:");
        console.log('=============================================================================================================');

        // using a loop to display products/prices to user
        for (var i = 0; i < res.length; i++) {
            console.log('ID: ' + res[i].id + ' | Product: ' + res[i].product_name + ' | Department: ' + res[i].department_name + ' | Price: ' + res[i].price + ' | Remaining: ' + res[i].stock_quantity);

            console.log('=============================================================================================================');
        }
        inquirer
            .prompt([{
                // prompt for purchase item
                name: 'stock',
                type: 'input',
                message: 'Please choose the ID number of desired item ',
                validate: function (value) {
                    // validation
                    if (isNaN(value) == false) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }, {
                // prompt for quantity
                name: 'quantity',
                type: 'input',
                message: 'Please enter desired quantity.',
                validate: function (value) {
                    // validation
                    if (isNaN(value) == false) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }]).then(function (answer) {
                // pulling item object
                for (var i = 0; i < res.length; i++) {
                    if (res[i].id == answer.stock) {
                        var itemChoice = res[i];
                    }
                }
                // shows entire object chosen
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log(itemChoice);
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~");

                // determine if the inventory avaliable will fill the order

                // stock remaining calculations
                var stockUpdate = parseInt(itemChoice.stock_quantity) -
                    parseInt(answer.quantity);
                console.log('oooooooooooooooooooooooooooo');
                console.log('the updated quantity is: ' + stockUpdate);
                console.log('oooooooooooooooooooooooooooo');

                // IF NOT: clg an "Insuffecient Inventory" notification, and prevent the order from being placed.

                if (itemChoice.stockUpdate < parseInt(answer.quantity)) {
                    console.log('There are only ' + stockUpdate + ' left in stock.');

                    // IF SO: Complete the customer's order and perform the following functions:
                    // Update the SQL database to reflect the remaining quantity of inventory.

                } else {
                    connection.query('UPDATE inventory SET ? WHERE ?', [{
                            stockUpdate: stockUpdate
                        }, {
                            id: itemChoice.id
                        }],
                        function (err, res) {
                            console.log("Purchase completed");
                            // Upon update of quantity, show the customer the total cost of the purchase.
                            var orderTotal = (parseInt(answer.quantity) * itemChoice.price).toFixed(2);
                            console.log("Order Total is $" + orderTotal);

                            repeat();



                        });
                }
            })
    })

}

function repeat() {
    inquirer.prompt({
        name: "another",
        type: "list",
        choices: ["Yes", "No"],
        message: "Would you like to purchase another item?"
    }).then(function (answer) {
        if (answer.another == "Yes") {
            purchase();
        } else {
            console.log("Thanks for using Bamazon!");
        }

    });
} //    connection.end();


// the quantity checker function isnt working
// would like to get the "connection end" function put in the correct place 
// find out how to mask the password