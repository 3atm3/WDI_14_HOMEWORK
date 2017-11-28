var name = prompt("What is your name");
console.log('Welcome ' + name);



var menu = prompt(" What would you have from the menu tonight: steak, porkchop, tofurkey and fruitsalad");
console.log('A great choice with ' +  menu)

if (menu === "steak") {
  console.log("Vegans beware!")
}
else if (menu === "porkchop") {
  console.log ("Vegans beware!")
}
else if (menu === "tofurkey") {
  console.log ("This cuisine is vegan friendly.")
}
else if (menu === "fruitsalad") {
  console.log ("This cuisine is vegan friendly.")
}







var children = prompt("How many kids do you have?");

var partner = prompt ("What is your partners name ?");

var residence  = prompt ("Where do you live ?");

var job_title = prompt ("What do you do ?");

 console.log("You will be a " + job_title + " in " + residence + " and married to " + partner + " with " + children +" kids " );








var year = 2017

var birth = prompt ("what year were you born ?");

var age1 = year - birth

var age2 = year - birth -1

console.log("They are either " + age1 + " or " + age2)







var age = 43

var max = 100

var year = 365

var amount = 1 

var years = max - age

var total = years * year

console.log("You will need " + total + " to last you till the ripe old age " + max )
