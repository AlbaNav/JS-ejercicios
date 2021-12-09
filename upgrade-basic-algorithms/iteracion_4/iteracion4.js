//1.1//
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2//
avengers.splice(0,1,"IRONMAN");
console.log(avengers);

//1.3//

console.log(avengers.length);

//1.4//

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty","Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[4]);

//1.5//
rickAndMortyCharacters.pop();
rickAndMortyCharacters.push("lapiz Lopez");
console.log(rickAndMortyCharacters[0],rickAndMortyCharacters[4]);


//1.6//

rickAndMortyCharacters.splice(1,2);
console.log(rickAndMortyCharacters);
