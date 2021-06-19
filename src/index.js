//@ToDo add debouncing function when we type something in text area//
//@ToDo add strong validation to type only JSON //
import App from "./App";
const root = document.querySelector('#root')
const postman = new App('#root');
root.appendChild(postman.render())