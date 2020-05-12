//Objects Concepts


//Task 1:-
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {}
user.name = "John"
user.surname = "Smith"
console.log(user)
console.log(user.name)
console.log(user.surname)

// //OUTPUT
// C:\Development\JAVASCRIPT>node objects.js
// { name: 'John', surname: 'Smith' }
// John
// Smith

user.name = "Pete"
console.log(user)
console.log(user.name)
console.log(user.surname)
//After changing value
// C:\Development\JAVASCRIPT>node objects.js
// { name: 'John', surname: 'Smith' }
// John
// Smith
// { name: 'Pete', surname: 'Smith' }
// Pete
// Smith

//Delete property name

delete user.name
console.log(user)
console.log(user.name)
console.log(user.surname)

// C:\Development\JAVASCRIPT>node objects.js
// { name: 'John', surname: 'Smith' }
// John
// Smith
// { name: 'Pete', surname: 'Smith' }
// Pete
// Smith
// { surname: 'Smith' }
// undefined
// Smith


//Task 2
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(schedule) {
    for (key in schedule) {
        return true
    }
    return false
}


// C:\Development\JAVASCRIPT>node objects.js
// { name: 'John', surname: 'Smith' }
// John
// Smith
// { name: 'Pete', surname: 'Smith' }
// Pete
// Smith
// { surname: 'Smith' }
// undefined
// Smith
// false
// true


//Task 4
// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(salaries.John + salaries.Ann + salaries.Pete)


// C:\Development\JAVASCRIPT>node objects.js
// { name: 'John', surname: 'Smith' }
// John
// Smith
// { name: 'Pete', surname: 'Smith' }
// Pete
// Smith
// { surname: 'Smith' }
// undefined
// Smith
// false
// true
// 390


//TAsk 5
// Multiply numeric properties by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// For instance:

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(menu) {
    console.log("Before Multiply" + menu.width, menu.height, menu.title)
    for (key in menu) {
        if (typeof menu[key] == "number")
            menu[key] = menu[key] * 2
    }
    console.log("After Multiply" + menu.width, menu.height, menu.title)
}

// C:\Development\JAVASCRIPT>node objects.js
// { name: 'John', surname: 'Smith' }
// John
// Smith
// { name: 'Pete', surname: 'Smith' }
// Pete
// Smith
// { surname: 'Smith' }
// undefined
// Smith
// false
// true
// 390
// Before Multiply200 300 My menu
// After Multiply400 600 My menu


//we can use  square bracket to have multiword Key name
let user2 = {}
user2["user Name"] = "Sneha Konkati"
console.log(user2)
console.log(user2["user Name"])

//delete then "delete user2["user Name"]"


// C:\Development\JAVASCRIPT>node objects.js
// { name: 'John', surname: 'Smith' }
// John
// Smith
// { name: 'Pete', surname: 'Smith' }
// Pete
// Smith
// { surname: 'Smith' }
// undefined
// Smith
// false
// true
// 390
// Before Multiply200 300 My menu
// After Multiply400 600 My menu
// { 'user Name': 'Sneha Konkati' }
// Sneha Konkati
