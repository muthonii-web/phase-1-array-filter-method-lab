// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}


function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'];

console.log(findMatching(drivers, 'bobby')); 


console.log(fuzzyMatch(drivers, 'Sa')); 


const driverObjects = [
  { name: 'Bobby', hometown: 'New York' },
  { name: 'Sammy', hometown: 'Los Angeles' },
  { name: 'Annette', hometown: 'Chicago' }
];

console.log(matchName(driverObjects, 'Sammy'));


