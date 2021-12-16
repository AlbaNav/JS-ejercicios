/*1.1*/
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
for (let i = 0; i < products.length; i++) {
    if (products[i].includes('Camiseta')) {
        console.log(products[i]);
      }    
}

/*1.2*/

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for (let i = 0; i < alumns.length; i++) {
    alumn = alumns[i];
  
    let count = 0;
    count = alumn.T1 ? approvedCount + 1 : approvedCount;
    count = alumn.T2 ? approvedCount + 1 : approvedCount;
    approvedCount = alumn.T3 ? approvedCount + 1 : approvedCount;
    alumn.isApproved = approvedCount >= 2 ? true : false;
  }
  
  console.log(alumns);