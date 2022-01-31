// pizza 1

var crust = ["traditional", "deep dish"]
var sauce = ["marinara"]
var cheese = ["mozzarella"]
var toppings = ["pepperoni" , "sausage"]

function pizzaOven(crust, sauce, cheese, toppings){
    var pizza= {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;

    return pizza

}

var pizza = pizzaOven(["traditional", "deep dish"], [" marinara"], [" mozzarella"], ["pepperoni" , "sausage"])
console.log("you ordered a " + pizza.crust + pizza.sauce + pizza.cheese + " topped with " + pizza.toppings);



// pizza 2


var crust = ["hand tossed"]
var sauce = ["marinara"]
var cheese = ["mozzarella", "feta"]
var toppings = ["onions", "mushrooms", "black olives"]

function pizzaOven(crust, sauce, cheese, toppings){
    var pizza= {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;

    return pizza

}

var pizza = pizzaOven(["hand tossed"], [" marinara"], [" mozzarella" , "feta"], ["mushrooms" , "onions", "black olives"])
console.log("you ordered a " + pizza.crust +" pizza with"+ pizza.sauce + pizza.cheese + pizza.toppings);


// random pizza


var crust = ["thin crust ", "classic crust ", "deep dish "]
var sauce = ["red sauce ", "spicy red sauce ", "bbq sauce "]
var cheese = ["mozzarella ", "feta ", "ricotta "]
var toppings = ["onions ", "mushrooms ", "black olives ", "pineapple ", "pepperoni "]

function randomPizza(crust, sauce, cheese, toppings){
    var pizza= {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;

    return pizza

}

var pizza = randomPizza(crust[Math.floor(Math.random()* crust.length)], sauce[Math.floor(Math.random()*sauce.length)], cheese[Math.floor(Math.random()* cheese.length)], toppings[Math.floor(Math.random()* toppings.length)])

console.log("you ordered a " + pizza.crust +" pizza with "+ pizza.sauce + pizza.cheese + "and " + pizza.toppings);
