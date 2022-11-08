let animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];
// need to look into the array and filter all animals
//that begin with b
let bListAnimals = animals.filter((blist) => {
  //return blist.startsWith("b");
  return blist[0] === "b";
}); // Your 'filter' code here.
console.log(bListAnimals);
