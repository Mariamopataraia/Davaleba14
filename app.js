// Array sum #!
const Num = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i< Num.length; i++) {
    sum += Num[i];
}
console.log(sum)

// Array Object #2
const myObj = {
    name: 'Mathilde',
    age: '29',
    address: 'Tbilisi'
}

// Or
const myObject = [
{
    name: 'Mathilde',
    age: '29',
    address: 'Tbilisi'
},
{
    name: 'Mathilde',
    age: '29',
    address: 'Tbilisi'
},
{
    name: 'Mathilde',
    age: '29',
    address: 'Tbilisi'
}
]

// სტრინგების გამოტანა console.log-ში #3
console.log("My name is " + myObject[0]["name"])
console.log("My age is " + myObject[0]["age"])
console.log("My address is " + myObject[0]["address"])

// if/esle statement #4
if (myObject[0]["age"] < 19) {
    console.log("I am a teenager")
    
} else {
    console.log("I am an adult")
}