/*- Carne - 400g por pessoa | +6h - 650g
- Cerveja - 1200ml por pessoa | +6h - 2000ml
- Refrigerante/Água - 1000ml por pessoa | +6h 1500ml
- OBS: Crianças valem por 0,5*/

//Functions for calculating quntity by durantion
function calcMeat(duration) {
  if (duration < 6)
    return 450; //2450
  else return 650;
}
function calcBeer(duration) {
  if (duration < 6)
    return 1200; //4800
  else return 2000;
}
function calcRefWater(duration) {
  if (duration < 6)
    return 1000; //5000
  else return 1500;
}

//Function for calculanting quantity for person and display the result
function calculateFoodAndDrinks() {
  //Select inputs elements
  const adults = Number(document.querySelector("#adults").value);
  const kids = Number(document.querySelector("#kids").value);
  const duration = Number(document.querySelector("#duration").value);

  //Select result area element
  const resultArea = document.querySelector("#resultArea");

  //Calculation per person
  let meat = calcMeat(duration) * adults + (calcMeat(duration) / 2) * kids;
  let beer = calcBeer(duration) * adults;
  let RefWater =
    calcRefWater(duration) * adults + (calcRefWater(duration) / 2) * kids;

  //Display the result
  resultArea.innerHTML = `<p>Carne: ${meat / 1000}Kg<p>`;
  resultArea.innerHTML += `<p>Cerveja: ${Math.ceil(beer / 390)} latas<p>`;
  resultArea.innerHTML += `<p>Água e Refrigerante: ${Math.ceil(RefWater / 2000)}L<p>`;
}
