// Works
printCar({
  make: 'Honda',
  model: 'Accord',
  year: 2017,
});
// Also works
printCar({
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  chargeVoltage: 220,
});

export function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  let str = `${car.make} ${car.model} (${car.year}) ${car.chargeVoltage}`;
  // hover over
  car.chargeVoltage;

  // TYPE GUARD // use !! also , null or undefined
  if (typeof car.chargeVoltage !== 'undefined')
    // hover over
    str += `// ${car.chargeVoltage}v`;

  console.log(str);
}

//Excess property checking

//TASK can be solved in 3 ways:
//1.Remove the color property from the object
//2.Add a color: string to the function argument type
//3.Create a variable to hold this value, and then pass the variable into the printCar function
printCar({
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  chargeVoltage: 220,
  color: 'RED', // <0------ EXTRA PROPERTY
});
//Object literal may only specify known properties,
//and ‘color’ does not exist in type
//<the type the function expects>
