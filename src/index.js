import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const addBtn = document.querySelector('.addBtn')
const delBtn = document.querySelector('.delBtn')
let list = document.querySelectorAll('List li')

const addToDoList = () => {
  let val = document.querySelector('.Box input').value 
  document.querySelector('.List').innerHTML += `<li>${val}</li>`
  list = document.querySelectorAll('.List li')
  list.forEach((e) =>{
    e.addEventListener('click', ()=>{
      e.classList.toggle('active')
    })
  })
}

const delTodoList = () =>{
  document.querySelectorAll('.active').forEach((e) =>{
    e.remove();
  })
}

addBtn.addEventListener('click', addToDoList)
delBtn.addEventListener('click', delTodoList)

