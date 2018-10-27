// let val;

// Number to string 
// val = String(555);
// val = String(5+5);


// toString()
// val = (5).toString();

// String to number
// val = Number('555');
// val = Number([1,3,4]);

// val = parseInt('100.78');
// val = parseFloat('100');

// console.log(typeof val);




// ***************** work with Number *********


// const num1 = 100;
// const num2 = 50;
// let val;

// Simple math with numbers 
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// Math Object 
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(3.4);
// val = Math.floor(3.5);
// val = Math.sqrt(64);
// val = Math.abs(-4);
// val = Math.pow(8, 2);
// val = Math.min(2, 44, 556, 55, 3, 8);
// val = Math.max(2, 44, 556, 55, 3, 8);
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);


// **************** String **************

// const firstName = "Abid";
// const lastName = "Al Amin";
// const str = 'Hello there, My name is abid';
// const tags = 'music,funny,history,drama,political,social';

// let val;

// // Concatenation
// val = firstName +" "+ lastName;

// // Append
// val = 'Brad ';
// val += 'Traversy';

// // Escaping 
// val = 'That\'s awesome, I can\'t wait';

// // Length
// val = firstName.length;

// // concat 
// val = firstName.concat(' ', lastName);

// // change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf()
// val = firstName.indexOf(1);
// val = firstName.indexOf('i');

// // charAt()
// val = firstName.charAt('2');
// // Get Last Character 
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = lastName.substring(0, 4);

// // slice()
// val = lastName.slice(0, 4);
// val = lastName.slice(-3);

// // split()
// val = str.split(" ");
// val = tags.split(',');

// // replace()
// val = str.replace("abid", 'liza');

// // includes()
// val = str.includes('foo');

// console.log(val);



// ****************** Template Literals *********************

// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Dhaka';
// let html;

// // Without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: '+ age + '</li><li>Job: ' + job + 
// '</li><li>City: ' + city + '</li></ul>';

// // with template string
// function hello(){
//     return 'hello';
// }
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li> 
//         <li>Addition: ${3+2}</li>
//         <li>Function Call: ${hello()}</li>
//         <li>Unari Operator: ${age > 30 ? 'Older than 30' : 'Younger than 30'}</li>
//     </ul>
// `;

// document.body.innerHTML = html;



// ****************** Arrays *********************
const numbers = [43, 55, 34, 98, 78, 21, 89];
const numbers2 = new Array(33, 44, 55, 22, 99, 78);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value 
// val = numbers[3];
// val = numbers[0];
// // Insert into array 
// numbers[2] = 100;
// val = numbers[2];
// // Find index of value
// val = numbers.indexOf(21);

// // Mutating arrays
// // Add on to end 
// numbers.push(240);
// // Add on to front 
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,1);
// // Reverse 
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // sort 
// val = fruits.sort();
// val = numbers.sort();

// // use the compare function 
// val = numbers.sort((x, y) => x-y);
// val = numbers.sort((x, y) => y-x);

// Find 
function under50(num){
    return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);


