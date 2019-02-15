// let material = prompt("Qual será o material da sua escada")
// let escadinha = material;
// let tamanho = Number(prompt("Quantos degraus terá a sua escada"))

// for (let i=1; i<= tamanho; i++) {
//     console.log(material)
//     material=material+escadinha;
// }

// ******************************************************** 

// let advinhar = (prompt("Tente advinhar em qual número eu estou pensando entre 1 e 50."))
// // let numeros = ;
//   for (i=1; i<=50; i++) {
//       console.log(i)
//   }

// let escolha= i;


// if (advinhar==escolha) {
//     console.log("Você acertou")
// }
// else {
//     console.log ("Tente novamente")
// }

//***********************************************************

// const caixa = document.querySelector('div');
 
// const text = document.querySelector('p');

// console.log(caixa)
// console.log(text)

// const caixas= document.querySelectorAll('.caixa')
// const botao=document.querySelector('button')
// const transformaEmTomate = () => {
//     caixas[0].classList.add('tomato')
// }

// botao.onclick = transformaEmTomate;

const burger = document.querySelector('[menu-button]');

const menuItems =  document.querySelector('[menu-items]');

const toggleMenu = () => {
    menuItems.classList.toggle('esconder');
    }
burger.onclick = toggleMenu;
