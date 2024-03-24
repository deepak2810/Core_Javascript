function bikeRepair() {
  console.log("Servicing your bike... .. .. ");
  console.log("Checking accelerator......, fixing it.... fixed ! ");
  console.log("checking brakes..........., new installation done.");
  console.log("Checking Gear box......  Fixed! ");
  console.log("Washing bike now ! :) ");
}

function callOwner(name) {
  console.log(`Bike is ready now ..... !`);
  console.log(`${name} Please take your bike now.`);
}

function printBill(amount, tax) {
  console.log(`Total amount to be paid is ${amount + tax}`);
}

// without call_back function in JS.....
//   bikeRepair();
//   callOwner("deepak");
//   printBill(2500, 750);

// With call back function in javascript.  when we put another function as parameter in a function call.

bikeRepair(callOwner, printBill);
