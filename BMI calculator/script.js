const form = document.querySelector('form')

form.addEventListener('submit',(e) =>{

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const status = document.querySelector('#status')
    status.textContent = ''

    if(height === '' || height < 0 || isNaN(height)){
        result.textContent = "Height can't be empty or negative"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.textContent = "Weight can't be empty or negative"
    }else{
        const bmi = ((weight)*10000/(height*height)).toFixed(2)
        result.textContent = `Your Bmi : ${bmi}`
        
        if(bmi > 24.9){
            status.textContent = "You have a higher BMI!"
            status.style.color ="#990000"
        }
        else if(bmi < 18.6){
            status.textContent = "Your BMI is too low!"
            status.style.color ="#e62e00"
        }
        else if(bmi > 18.6 && bmi < 24.9){
            status.textContent = "You have a steady health!"
            status.style.color ="#009933"
        }
    }
})