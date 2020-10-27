function calculateTrip()
{
  var tripLengthMiles = prompt("How long is your trip?");

  //convert string to a number
  tripLengthMiles = parseFloat(tripLengthMiles);

  //get the mpg of a vehicle
  var mpg = prompt("What MPG does your vehicle get?");
  mpg = parseFloat(mpg);

  //get the dollar per gallon
  var dollarsPerGallon = parseFloat(prompt("How much is gas?"));

  //get the average mph driven
  var mph = parseFloat(prompt("What is your average speed?"));

  //find total gallons by dividing miles by mpg
  var totalGallons = tripLengthMiles/mpg;

  //find total gas cost by total gallons * $/gallon
  var totalGasCost = totalGallons*dollarsPerGallon;
  var totalGasCostDisplay = totalGasCost.toFixed(2);

  //find total hours by dividing miles by mph
  var totalHours = tripLengthMiles/mph;
  var totalHoursDisplay = totalHours.toFixed(1);

  //output total gas cost
  alert("Your trip will cost $" + totalGasCostDisplay);

  //output hours of trip
  alert("Your trip will take "+ totalHoursDisplay + `hours`);

}