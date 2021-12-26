const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let countryList= document.createElement('ul');
for (const country of countries) {
let countryUnit = document.createElement('li');
countryUnit.textContent= country;
countryList.appendChild(countryUnit);
};
document.body.appendChild(countryList);
console.log(countries);

let deleteP = document.querySelector(".fn-remove-me");
deleteP.remove();


cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let carsList= document.createElement('ul');
for (const car of cars) {
let carUnit = document.createElement('li');
carUnit.textContent= car;
carsList.appendChild(carUnit);
};
document.body.appendChild(carsList);
console.log(cars);


