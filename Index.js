const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');

    if ((height === '') || (height < 0) || (isNaN(height))) {
        //NaN !== NaN
        results.innerHTML = "لطفا قد خود را وارد نمایید";

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "لطفا وزن خود را وارد نمایید";
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Display the results
        results.innerHTML = `<span>${bmi}</span>`

        // Display End Message
        if (bmi < 18.6) {
            message.innerHTML = "Underweight";
        } else if (bmi > 18.6 && bmi < 24.9) {
            message.innerHTML = "Normal"
        } else if (bmi > 24.9) {
            message.innerHTML = "Overweight"
        }
    }
});