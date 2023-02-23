'use strict';

// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
];

const tax = 1.20;


// Implement getPrices()
function getPrices(taxBoolean) {
    for (let dish of dishData) {
        let finalPrice;

        if (taxBoolean) {
            finalPrice = dish.price * tax;
        } else if (!taxBoolean) {
            finalPrice = dish.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        console.log(`Dish: '${dish.name}' => Price: $${finalPrice}`);
    }
}

// Call getPrices()
getPrices(true);
console.log("\n");
getPrices(false);

// OUTPUTS
/**
Dish: 'Italian pasta' => Price: $11.46
Dish: 'Rice with veggies' => Price: $10.38
Dish: 'Chicken with potatoes' => Price: $18.66
Dish: 'Vegetarian Pizza' => Price: $7.74


Dish: 'Italian pasta' => Price: $9.55
Dish: 'Rice with veggies' => Price: $8.65
Dish: 'Chicken with potatoes' => Price: $15.55
Dish: 'Vegetarian Pizza' => Price: $6.45
*/


// Implement getDiscount()
function getDiscount() {

}
// Call getDiscount()


// module.exports = index;

