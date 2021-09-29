const user = require('./information');
const cowsay= require("cowsay");

console . log ( cowsay . say ( { 
    text : `Hi, my name is ${user.name} i'm from to ${user.campus}` ,
    e : "oO" , 
    T : "U " ,
} ) )  ;
