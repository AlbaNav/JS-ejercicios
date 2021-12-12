/*1.1*/

function higher(numa, numb){
  if (numa > numb){
    return console.log(numa)
  } else (numa <numb);{
    return console.log(numb)
  }
}
let resu = higher(2,7);
console.log(resu);


/*1.2*/

const avengers = ["Hulk", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];

function findLongestWord(array){
  let longestWord = array[0];
  for (let i = 0; i <array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return console.log(longestWord)
}
findLongestWord(avengers)

/*1.3*/

const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll (array){
    let sum=0;
    for (let i = 0; i <array.length; i++){
        sum+=array[i];
    }
    return console.log(sum)
}
sumAll(numbers);

/*1.4*/

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function media(array) {
    let med=0;
    for (let i = 0; i <array.length; i++) {
        med+= array[i]/2;
    }
    return console.log(med)
            
    }
 media(numbers2);

/*1.5*/

 const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
 const palabras = [];
 const numeros=[];
           

            
            
                  
 /*1.6*/

 const duplicates = ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda'];
 const pedido= [];
      numeros.forEach((duplicates)=> {
        if (!pedido.includes(duplicates)){
          pedido.push(duplicates);
        }
      });
      console.log(pedido);