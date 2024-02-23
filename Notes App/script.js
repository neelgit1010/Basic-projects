const main = document.querySelector('.main');
let notes = document.querySelector('.input');

function createNote() {
    let input = document.createElement('p'); // creating a p tag
    input.setAttribute('contenteditable', 'true');
    input.className = 'input';
    let imgDel = document.createElement('img');
    imgDel.src = 'delete.png';
    main.appendChild(input).appendChild(imgDel);
}

function storeData() {
    localStorage.setItem('notes',main.innerHTML);
}

main.addEventListener('click', (e) =>{
    if(e.target.tagName === 'IMG'){
        storeData();
        e.target.parentElement.remove();
    }
})