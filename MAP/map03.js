let sales_data = new Map();

sales_data.set("JAN", 200);
sales_data.set("FEB", 300);

// console.log(sales_data.keys());

// console.log(sales_data.values());

for ([key, val] of sales_data) {
  console.log("key " + key + " value " + val);
}
