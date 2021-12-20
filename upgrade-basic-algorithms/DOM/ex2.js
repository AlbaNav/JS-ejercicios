/*2.1.2.3.4.5.6.7.8.9*/

const newdiv = document.createElement('div');
document.body.appendChild(newdiv);

let DivconP = document.createElement('Div');
let p = document.createElement('p');
DivconP.appendChild(p);
document.body.appendChild(DivconP);

const DivsixP = document.createElement('div');
document.body.appendChild(DivsixP);
for (let i = 0; i < 6; i++) {
    let sixp = document.createElement('p');
    DivsixP.appendChild(sixp);   
}

let dinamico = document.createElement('p');
dinamico.textContent = "Soy Dinámico";
document.body.appendChild(dinamico);

let textoh2 = document.querySelectorAll('.fn-insert-here');
textoh2.innerHtml = `${'Wubba Lubba dub dub'}`;

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let newul = document.createElement('ul');
for (const app of apps) {
    let newli=document.createElement('li');
    newli.textContent =app;
    newul.appendChild(newli);
    
}


const delet$$ = document.querySelectorAll('.fn-remove-me');
for (const del of delet){
    del.removeAttribute();
    }


const newP = document.createElement('p');
const divS = document.querySelectorAll('div')
newP.textContent = 'voy en medio!';
document.body.insertBefore(newp,divS[1]);

const clases = document.querySelectorAll('.fn-insert-here');
for (const clase of clases) {
    let nuevaP = document.createElement('p');
    nuevaP.textContent ='voy dentro!';

    clase.appendChild(nuevaP);
    
    
}