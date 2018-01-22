

DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;
-- creating the intital table cells
CREATE TABLE inventory(
    id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price VARCHAR (255) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);
-- adding items to the table
INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("5x7 Photo frame","Housewares",15, 12);

INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("50 foot Garden Hose","Garden", 32, 18);

INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("Blue Mountain Coffee","Groceries", 8, 37); 

INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("Left-handed Monkey Wrench","Automotive", 48, 3);

INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("Boonie Hat", "Menswear", 8,24);

INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("Sundress", "Misses", 32 ,1 );

INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("Alpo Select", "Pet Care", 25, 103);

INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("Sony PS4", "Electronics", 399, 72);

INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("Johnny Cash's Greatest Hits","Music",12 ,1 );

INSERT INTO inventory ( product_name, department_name, price, stock_quantity)
VALUES ("The Incredibly Strange Creatures Who Stopped Living and Became Mixed-Up Zombies", "Movies", 18, 13);

