// Homework pt2:

// 1. Create a function in a second file, use export to export it
// 2. In your main file import and execute the function

// import {add} from './second.js'

// console.log(add(3,5))

// 3. Write out a fat arrow function using the same line to return (as in no return keyword)
// 4. Add default parameters to the above function

const multiply = (a,b = 2) => a*b;

console.log(multiply(6));

// 5. Create an object that has a child object, that itself has a child object (3 levels).


var house = {
    road: 'football road',
    houseNo: 50,
    bedroom: {
        numberOfBedrooms: 3,
        mainBedroom: {
                ensuite:true, 
                bedSize:'king',
        }
    }
};

// 6. Use object destructuring to pull out the parts at level 3

const { bedSize } = house.bedroom.mainBedroom;

console.log(bedSize)

// 7. Add a default value to the above destructuring

// --

// 8. Destructure an array

const people = ['Max', 'Cass', 'Otis'];
const [person1, person2, person3] = people;

console.log(person2)

// 9. Create two objects. Add more than two keys/values to both objects. Copy all the items from the first object into the second object. Use the spread operator.
// 11. Add a function to one of the objects, use the object method shorthand. (edited) 

const person9 = {
        haircolour: 'black', 
        eyeColour:'brown',
};

const personCopy = {
    name: 'Max', 
    age: 26,
    ...person9,
    greeting(){
        console.log(`Hi, my name is ${this.name}`)
    },
}

console.log(personCopy)

personCopy.greeting()

// 10. Send 5 arguments to a function and use the rest operator to group them


// const firecrew = ['hannah', 'dave', 'kamarjit', 'paul', 'tom'];
// const [...rest] = firecrew;

// function sayHello(item) {
//     console.log('Hello '+ item);
// }

// sayHello(rest);



