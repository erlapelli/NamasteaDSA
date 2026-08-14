
// call, Apply, bind 

// let name = {
//     firstname:"Akshay",
//     lastname:"Saini",
//     printFullName: function(){
//         console.log(this.firstname + " " + this.lastname);
//     }

// }

// name.printFullName();

// let name2 = {

//     firstname: "Sachin",
//     lastname : "Tendulkar",
// }

// //function borrowing

// name.printFullName.call(name2);



// let name = {
//     firstname:"Akshay",
//     lastname:"Saini",
   

// }


// let printFullName = function(hometown, state){
//         console.log(this.firstname + " " + this.lastname + " from " + hometown + " , "+ state );
//     }

// printFullName.call(name,"Dehradun","uttarakhand");

// let name2 = {

//     firstname: "Sachin",
//     lastname : "Tendulkar",
// }

// //function borrowing

// printFullName.call(name2,"Mumbai","hyd");

// printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// let printMyname = printFullName.bind(name2,"Mumbai","bang")

// console.log(printMyname)

// printMyname()






//Currying in javascript


// let multiply = function (x,y){

//     console.log(x * y);
// }


// let multiply = function (x){
//     return function (y){
//         console.log(x * y);
//     }
// }


// let multiplyByTwo = function(y){

//     let x =2;

//     console.log(x * y);
// }

// let multiplyByTwo = multiply(2);
// multiplyByTwo(3);



// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(3)


// let multiplyByThree = multiply.bind(this,3);
// multiplyByThree(5);


// Currying is the process of taking a function with multiple arguments and
// turning it into a sequence of functions each with only a single argument