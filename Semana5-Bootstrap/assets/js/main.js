document.addEventListener('DOMContentLoaded', function(){
     console.log('funcion anonima');

    const btn=document.querySelector('#button');
    console.log(btn);

    btn.addEventListener('click', accion);
 });

const accion=()=>{
    console.log('Presionando un boton');
}
















//console.log("Numero: " + numero2); 
//Declarar variables
// numero = 5;
// //Formas de declara variables 
// var numero2 = 10; 
// let numero3 = 15; 
// const numero4 = 20; 
// console.log("Numero "+numero3); 

// //FUNCION EN JS las dos son funciones
// //si ocupa un parametro se le pone dento del parentesis
// function miFuncion(param){
//     console.log('se ejecuto mi funcion');
// }



// const miFuncionCost =() => {
// console.log('se ejecuto mi funcion const');
// }



// //CON DOCUMENT SE ACCEDE A LA PAGINA, 



// // document.addEventListener('DOMContentLoaded',  miFuncion);
// document.addEventListener('DOMContentLoaded',  miFuncionCost);


