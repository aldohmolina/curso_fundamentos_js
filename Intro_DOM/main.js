
const actualizarLocalStorage = (todos) => {
    const todosString = JSON.stringify(todos);
    localStorage.setItem('todos',todosString);
}

const render = (todos) => {
    const todosTemplate = todos.map(t => `<li>${t}</li>`);
       todo_list.innerHTML = todosTemplate.join('');
       const elm_todo_list = document.querySelectorAll('#todo_list li');
       elm_todo_list.forEach((element,i) => element.onclick = () =>{
           element.parentElement.removeChild(element);
           todos.splice(i,1);
           actualizarLocalStorage(todos);
        //    console.log('elemento eliminado',element,i);
           render(todos);
        });
}

window.onload = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    render(todos);
    const form = document.getElementById('todo_form');
   form.onsubmit = (e)=>{
       e.preventDefault();
       const todo = document.getElementById('todo');

       if(todo.value != '' ){
           todos.push(todo.value);
           actualizarLocalStorage(todos);
           render(todos);
       }
       todo.value = '';

       
    //    console.log(todosTemplate);

    //    const list = document.createElement('li');
    //    list.innerText= todo.value;
    //    todo_list.appendChild(list);
   }
}