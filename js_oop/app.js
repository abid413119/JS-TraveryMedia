// Person constructor
// function Person(name, dob){
//     this.name = name;
//     this.birthday = new Date(dob);

//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const abid = new Person('Abid', '5-8-1994');
// console.log(abid);
// console.log(abid.calculateAge());




// String 
// const name1 = 'Abid';
// const name2 = new String('Abid');

// console.log(typeof name1); // string 
// console.log(typeof name2); // object

// if( name1 === 'Abid' ){
//     console.log("Yes");
// } else {
//     console.log("No");
    
// }

// // Number 
// const num1 = 5;
// const num2 = new Number(4);

// // Object 
// const abid1 = {name: 'Abid'};
// const abid2 = new Object({name: "abid"});

// // Arrays 
// const arr1 = [1,2,4,5];
// const arr2 = new Array(2,3,4,5);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+/');
// console.log(re2);




// ********** Prototypal Inheritance ***************

// Person constructor 
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function(){
//     return `Hello there, ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Abid', 'Al Amin');
// console.log(person1.greeting());


// // Customer constructor
// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);
// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;
// // Customer greeting 
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName} 
//     welcome to our company`;
// }

// // Create customer 
// const customer1 = new Customer('Tom', 'Smith', '444-44444', 'Standard');
// console.log(customer1);
// console.log(customer1.greeting());


// ****************** Using Object.create ************************

// const personPrototypes = {
//     greeting: function (){
//         return `Hello there, ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function (newLastName){
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;
// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'}, 
//     lastName: {value: 'Travarsy'},
//     age: {value: 34}
// });

// console.log(brad);

// ****************** ES6 method ************************


// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }
//     // methods
//     greeting(){
//         return `Hello there, ${this.firstName} ${this.lastName}.`;
//     }
//     calculateAge(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     // static methods
//     static addNum(x, y){
//         return x+y;
//     }
// }
// const mary = new Person('Mary', 'Williams', '11-13-1997');
// console.log(mary.calculateAge());
// console.log(Person.addNum(3, 5));


// Inheritance

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Doe', '9999488484', 'Standard');
console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());




