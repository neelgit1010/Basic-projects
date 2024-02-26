const main = document.querySelector('.main');
let notes = document.querySelectorAll('.input');


function createNote() {
    let input = document.createElement('p'); // creating a p tag
    input.setAttribute('contenteditable', 'true');
    input.className = 'input';
    let imgDel = document.createElement('img');
    imgDel.src = 'delete.png';
    main.appendChild(input).appendChild(imgDel);
    storeData();
}
function showNotes() {
    main.innerHTML = localStorage.getItem('note');
    console.log('showing');
}
showNotes();

function storeData() {
    localStorage.setItem('note',main.innerHTML);
    console.log('storing');
}

main.addEventListener('click', (e) =>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        storeData();
    }else if(e.target.tagName === 'p'){
        notes = document.querySelectorAll('.input');
        notes.forEach(n =>{
            n.onkeyup = function(){
                storeData();
            }
        });
    }
});

document.getElementById('save').addEventListener('click', e=>{
    storeData();
});


