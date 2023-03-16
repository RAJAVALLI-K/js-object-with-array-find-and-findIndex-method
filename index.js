const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
];

//find method---->The find() method returns the first element in the provided array 

let res = employees.find(function (value) {
    return value.name.indexOf('John') >= 0;
});
console.log(res);

//findindex method---->The findIndex() method returns the index of the first element in an array
// findindex method

let ress = employees.findIndex(function (value) {
    return value.name.indexOf('John') >= 0;
});
console.log(ress);
