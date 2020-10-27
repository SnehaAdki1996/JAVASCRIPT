// console.log("Hello")

// //alert("Hey")

// var b = "Some Thing"
// console.log(b)
// // var age = prompt('What is your Age?');

// // console.log(age)

// //document.getElementById('someText').innerHTML = age

// //Numer operations
// var num1 = 10
// //All Arithmetic operation
// console.log(num1 + 10);
// //Increment both ways
// console.log("Post Increment " + num1++)
// console.log("Increment 2nd way", +num1 + 1)

// //Decrement
// console.log("Post Increment " + num1--)
// console.log("Increment 2nd way", +num1 - 1)

// //Reminder
// console.log("Reminder", 40 % 6)

// //Quotion
// console.log("Quotient", 9 / 3)

// num = 20
// num += 20
// console.log("Short Hand Operator", num)


// //Functions:

// //Define a function
// //Call a function
// function greeting(name) {

//     document.getElementById("someText").innerHTML = "Hello " + name
// }

// //var name = prompt("Name Please?")

// //greeting(name)


// // String + num = String
// // num + num = num

// function sunNumber(no1, no2) {
//     console.log(no1 + no2)
// }

// //sunNumber(8,50)



// //Loops

// /// 1 While Loop
// /// 2 For Loop



// var num = 0

// while (num < 5) {
//     console.log("num")
//     num += 1
// }

// // For Loop

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }



// //Data Type in JS
// let yourName = "Sneha" //string
// let youAge = 50        //Int
// let name = { fname: 'Sneha', last: 'cad' }       //Object
// let truth = true //Boolean
// let grocessary = ['apple', 'banana', 'Oranges'] // Array
// let random = undefined // undefined
// let nothing = null // Value null


// //String Common Methods

// var fruit = "Banana,Apple,Orange"
// let moreFruit = "Banana\nApple" //New Line '\n' new Line
// console.log(moreFruit)
// console.log(fruit.length)
// console.log(fruit.indexOf('qn')) //-1
// console.log(fruit.indexOf('an')) //1
// console.log(fruit.indexOf('nan')) //2
// console.log(fruit.slice(2, 4)) //na
// console.log(fruit.replace('Ban', '123')) //123ana
// console.log(fruit.toLocaleLowerCase()) //banana
// console.log(fruit.toLocaleUpperCase()) //BANANA
// console.log(fruit.charAt(1)) //a
// console.log(fruit.split(',')) //["Banana", "Apple", "Orange"]
// console.log(fruit.split(''))// ["B", "a", "n", "a", "n", "a", ",", "A", "p", "p", "l", "e", ",", "O", "r", "a", "n", "g", "e"] //split by character


// //Arrays in JS
// let fruits = ['Banana', 'Orange', 'Apple', 'Cheery'] //one way
// fruits = new Array('Banana', 'Orange', 'Apple', 'Cheery') //2nd Way

// console.log(fruits[0]) // Banana // Access Value at index
// fruits[0] = "Pear" //REplace or change
// console.log(fruits)

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// //Common MEthods
// console.log(fruits.toString())//Convert to string
// console.log(fruits.join('-')) //taken an array join by '-'
// console.log(fruits.pop(), fruits) // removed last element
// console.log(fruits.push('Pineapple'), fruits) // Adds at last
// console.log(fruits[fruits.length])  //undefiend becz no value
// fruits[fruits.length] = "BlackBerry" // Adds
// console.log(fruits)
// fruits.shift() // Removes frist element
// console.log(fruits)
// fruits.unshift('Kivi') //Add first elemet  in an array
// console.log(fruits)

// let veg = ['Spinach', 'Brocoli']
// let allGRoceries = fruits.concat(veg) // joins 2 array
// console.log(allGRoceries)

// //slice an array

// console.log(allGRoceries.slice(1, 4)) // from index 1 to 4

// //REverse an array
// console.log(allGRoceries.reverse())

// console.log(allGRoceries.sort())

// let someNumber = [1, 5, 3, 457647, 67, 867, 8]
// //Sort
// console.log(someNumber.sort(function (a, b) { return a - b })) //Ascending ORder b-a in descending


// let emptyArray = new Array()

// for (let i = 0; i < 10; i++) {
//     emptyArray.push(i)
// }
// console.log(emptyArray)

// //Objects

// studet = {
//     fname: 'Sneha',
//     lname: 'Konkati',
//     age: 20,

//     studentInfo: function () {
//         return this.fname + " " + this.lname
//     }
// }

// console.log(studet)
// console.log(studet.fname)
// studet.height = 1.7
// console.log(studet.height)

// studet.height = 2.0 //reassign the value
// console.log(studet)

// console.log(studet.studentInfo())


// //If else Conditional & switch
// //Boolean Operator 
// //&& And
// //|| OR
// //var age = prompt("Your Age")
// var age = 8

// if (age >= 18 && age <= 35) {
//     status = "target Demo"
// }
// else {
//     status = "not my Target Demo"
// }

// console.log(status)


// //SWITCH 
// // Differentiate Week Day vs Week End

// // var day = parseInt(prompt("Enter Day in number"));
// var day = 10
// switch (day) {
//     case 0:
//         console.log("Weekend")
//         break;
//     case 5:
//         console.log("Weekend")
//         break;
//     case 6:
//         console.log("Weekend")
//         break;
//     default:
//         console.log("Weekday")
// }

// let let1 = 20;
// //let let1 =30
// console.log(let1)

// //Above scenario throws error i.e let1 already declared


// var var1 = 20;
// var var1 = 30;
// console.log(var1)



var a =['a','b','c']
var b = a 
var c = a.slice()
a.push('date')
console.log(a,b)

console.log('1' == 1)
console.log('1' === 1)

console.log(false == 0)
console.log(false === 0)

console.log(false == '')
console.log(false === '')

console.log('abc' == 'abc')
console.log([1,2,3] == [1,2,3])


function foo(a,b,c){
    a++;
    b = "new String"
    c['key'] = "new Value"
}

var a = 1,
    b= "old String",
    c ={"key" : "old Value"}

    foo(a,b,c)
    console.log(a,b,c)


    var counter = ( function(){
        var mycounter =0;
        function changeBy(val){
            mycounter+= val
        }

        return{
            inc : function(){
                changeBy(1)
            },
            dec : function(){
                changeBy(-1)
            },
            value : function(){
                return mycounter
            }
        }
    }

    )();

    console.log(counter.value())
    counter.inc();
    counter.inc()
    console.log(counter.value())
    counter.dec();
    console.log(counter.value())
    // counter.changeBy(2)
    console.log(counter.value())

    var x =2
    var y  =4
    if((y>x || y++ === 4)&& ++y === 5){
        x =1
    }
    else{
        x = 4
    }

    console.log(x,y)