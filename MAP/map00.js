let employee = new Map();

employee.set("Deepak", "A1");
employee.set("Chris", "B1");
employee.set("Rex", "B2");
employee.set("harry", "A2");
employee.set("pratap", "A1");

// To perform the delete operation.

employee.delete("Rex");

//to print the map.
console.log(employee);

// To check if a value is present or not : check it by has method.

console.log(employee.has("Deepak"));

// To print the keys and value in JS.

console.log(employee.keys());

console.log(employee.values());

//to iterate over the map

for (let arr of employee) {
  let key = arr[0];

  let val = arr[1];

  console.log("key: " + key + " " + " val: " + val);
}
