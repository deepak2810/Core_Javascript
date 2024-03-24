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
bikeRepair();
callOwner("deepak");
printBill(2500, 750);
