//create a variable to hold the quantity of available plane seats left on a flight
let seatsRemaining = 9;

//create a variable to hold the cost of groceries at checkout
let groceryCost = 76.29;

//create a variable to hold a person's middle initial
let middleInitial = "A";

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHot = true;

//create a variable to hold a customer's first name
let firstName = "David"

//create a variable to hold a street address
let address = "123 Example Rd"

//print all variables to the console
console.log(seatsRemaining);
console.log(groceryCost);
console.log(middleInitial);
console.log(isHot);
console.log(firstName);
console.log(address);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable
seatsRemaining -= 2;

//impulse candy bar purchase, add 2.15 to the grocery total
groceryCost += 2.15;

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "T";

//the season has changed, update the hot outside variable to be opposite of what it was
isHot = false;

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = firstName + " " + middleInitial + " Stringer";

//print a line to the console that introduces the customer and says they live at the address variable
console.log(`${fullName} currently resides at ${address}`);

console.log('testing github file change');