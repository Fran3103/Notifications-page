const todos = document.querySelector('#marcar-todo');
const notificacionALL = document.querySelectorAll ('card');
const notificacionA = document.querySelector ('.card-a');
const notificacionB = document.querySelector ('.card-b');
const notificacionC = document.querySelector ('.card-c');
const iconoA = document.querySelector('.iconA');
const iconoB = document.querySelector('.iconB');
const iconoC = document.querySelector('.iconC');
const chessA = document.querySelector('.chessA');
const chessB = document.querySelector('.chessB');
const number = document.querySelector('.number');



todos.addEventListener('click', () =>{
    
    selecionTodos (notificacionA, notificacionB, notificacionC)   ;
});




function selecionTodos(notificacionA, notificacionB, notificacionC){
    notificacionA.style.background = '#fff' ;
    iconoA.style.display= 'none'
    notificacionA.style.background = '#fff' ;
    iconoB.style.display= 'none'
    notificacionB.style.background = '#fff' ;
    iconoC.style.display= 'none'
    notificacionC.style.background = '#fff' ;
    number.style.display= 'none'
}









