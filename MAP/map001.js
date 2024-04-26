let temp = new Map();

temp.set("Raman", "1000");
temp.set("XYZ", "2000");
temp.set("Deepak", "4000");
temp.set("Bob", "12000");

for (let [key, val] of temp) {
  console.log("Key : " + key + " Value : " + val);
}

let target = "4000";

for (let val of temp.values()) {
  if (val == target) {
    console.log(true);
  }
}
