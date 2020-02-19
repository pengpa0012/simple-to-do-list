const add = document.querySelector('.add');
const textInput = document.querySelector('.input');
const todoList = document.querySelector('.name-list');


add.addEventListener('click', ()=>{
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

    const allSpan = document.querySelectorAll('li .remove');
    const allLi = document.querySelectorAll('li');

    allSpan.forEach(span => {
        span.addEventListener('click', function(){
           allLi.forEach(li =>{
                li.addEventListener('click', function(){
                        li.classList.add('close');
                    });
                });
        });
    });
    textInput.value = ''; // for clearing the text of input
});


