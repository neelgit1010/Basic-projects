const baseUrl = "https://web.archive.org/web/20230530004700/https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll('.dropdown select');
const button = document.querySelector('form button');
const fromCurr = document.querySelector('.from .selection select')
const toCurr = document.querySelector('.to .selection select')
let result = document.querySelector('.result p');

// we've two selects...'from' and 'to'
// so appending all countryList data to both the selects
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === 'from' && currCode === 'USD') {
            newOption.selected = 'selected';
        }else  if (select.name === 'to' && currCode === 'INR') {
            newOption.selected = 'selected';
        }
        select.append(newOption);
    }
    select.addEventListener('change', e =>{
        updateFlag(e.target); //select object
    });
}

const updateFlag = (evt) => {
    let currCode = evt.value;
    let countryCode = countryList[currCode];
    
    //set new flag img
    let flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let updatedImg = evt.parentElement.querySelector('img');
    updatedImg.src = flagUrl;   
}

button.addEventListener('click', async e => {
    e.preventDefault();
    const input = document.querySelector('form input');
    if (input.value < 1 || input.value === "") {
        input.value = 1;
    }

    const currUrl = `${baseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    console.log(fromCurr.value, toCurr.value, result);
    // result.innerText = `${input.val} USD = `

    const rawUrl = await fetch(currUrl);
    const data = await JSON.parse(rawUrl);
    console.log(rawUrl, currUrl);
});