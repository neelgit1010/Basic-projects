const baseUrl = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll('.dropdown select');
const button = document.querySelector('form button');
const fromCurr = document.querySelector('.from .selection select')
const toCurr = document.querySelector('.to .selection select')
let result = document.querySelector('.result p');
const swapBtn = document.querySelector();

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

    const currUrl = `${baseUrl}/${fromCurr.value.toLowerCase()}.json`;
    console.log(fromCurr.value, toCurr.value, result);
    
    // fetching the JSON data using currency API
    const rawUrl = await fetch(currUrl);
    //converting JSON object to JS object
    const data = await rawUrl.json();
    console.log(data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]);

    let convertedData = (data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()] * parseInt(input.value)).toFixed(2);

    result.innerText = `${input.value} ${fromCurr.value} = ${convertedData} ${toCurr.value}`;

    console.log(convertedData, typeof convertedData);
});