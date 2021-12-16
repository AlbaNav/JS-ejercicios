/*1.1*/
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];
const categories = [];

for (const movie of movies) {
  for (const category of movie.categories) {
    if (!categories.includes(category)) {
      categories.push(category);
    }
  }
}
console.log(categories);

/*1.2*/

const users = [
  {name: 'Manolo el del bombo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'Mortadelo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
];

const volumein = {totalVolume: 0 , totalCount: 0};
for (const user of users) {
 for (const key in user.favoritesSounds) {
  const favoriteSound = user.favoritesSounds[key];
  volumein.totalVolume += favoriteSound.volume;
  volumein.totalCount++;
 }
} 
console.log(volumein);


let sounds = [];
for (const user of users) {
 for (const key in user.favoritesSounds) {
 if (sounds[key] !== undefined) {
 sounds[key]++;
 } else {
 sounds[key] = 1;
 }
 }
} 
console.log(sounds);

/*1.4*/


function findArrayIndex(array,texto) {
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    if(obj === texto) {
      return i;
    }
       
  }

  }
  const i=findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote');
  console.log(i);
  const i2=findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito');
  console.log(i2);
  const i0=findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Caracol');
  console.log(i0);

  /*1.5*/

  function rollDice(maxNum) {
    return Math.floor(Math.random() * (maxNum-1)+1);
    }
    console.log(rollDice(20));
    console.log(rollDice(40));
    console.log(rollDice(100));

    /*1.6*/

    function swap(array, index1, index2) {
      const firstelement = array[index1];
      array[index1]=array[index2];
      array[index2]=firstelement;
       return array;
     
    }
    const array1= ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
    swap(array1,[1],[3]);
    console.log(array1);