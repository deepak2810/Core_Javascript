let employee = new Map();

employee.set("Deepak", "A1");
employee.set("Chris", "B1");
employee.set("Rex", "B2");

// To perform the delete operation.

employee.delete("Rex");

//to print the map.
console.log(employee);

// To check if a value is present or not : check it by has method.

console.log(employee.has("Deepak"));
