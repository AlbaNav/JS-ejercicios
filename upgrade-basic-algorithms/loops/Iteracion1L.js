/*1.1*/
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
for (let i = 0; i < products.length; i++) {
  if (products[i].includes("Camiseta")) {
    console.log(products[i]);
  }
}

/*1.2*/

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i = 0; i < alumns.length; i++) {
  alumn = alumns[i];

  let count = 0;
  count = alumn.T1 ? count + 1 : count;
  count = alumn.T2 ? count + 1 : count;
  count = alumn.T3 ? count + 1 : count;

  alumn.isApproved = count >= 2 ? true : false;
}
console.log(alumns);

/*1.3*/

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const place of placesToTravel) {
  console.log(place);
}

/*1.4*/

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const key in alien) {
  console.log("Propiedad:" + key + ", valor:" + alien[key]);
}
/*1.5*/

const placesToTravel1 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let i = 0; i < placesToTravel1.length; i++) {
  const places = placesToTravel1[i];

  if (places.id ===11 || places.id===40){
    placesToTravel1.splice(i,1);
  }
  }
 console.log(placesToTravel1);  

 /*1.6*/

 const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ];

  for (const toy of toys) {
     
    if (toy.name.includes('gato')){
      toys.splice(toys.indexOf(toy));
      
    }
  }
  console.log(toys);

  /*1.7*/

const popularToys1 = [];
const toys1 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 41, name: 'El gato felix', sellCount: 35}
];

  for (const toy1 of toys1){
     
      if (toy1.sellCount >15){
        popularToys1.push(toy1);
        
      }
    }
    console.log(popularToys1);
  
