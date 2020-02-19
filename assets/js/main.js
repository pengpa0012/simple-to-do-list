const add = document.querySelector('.add');
const textInput = document.querySelector('.input');
const todoList = document.querySelector('.name-list');


add.addEventListener('click', addItem);
todoList.addEventListener('click', removeItem);

function addItem(){
    const newli = document.createElement('li');
    const liContent = document.createTextNode(textInput.value);
    const newSpan = document.createElement('span');
    const spanContent = document.createTextNode('x');
    newSpan.className = 'remove';
    if(textInput.value == "") return; // to prevent adding empty string to the list

    newli.appendChild(liContent);
    newSpan.appendChild(spanContent);
    newli.appendChild(newSpan);
    todoList.appendChild(newli);
    textInput.value = '';
}

function removeItem(e){
    if(e.target.classList.contains('remove')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            todoList.removeChild(li);
        }
    }
}
