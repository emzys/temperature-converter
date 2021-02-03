const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let fahrenheit;
let celsius;

const swap = () => {
    if (one.innerText === '°C') {
        one.innerText = '°F';
        two.innerText = '°C';
        result.innerText = '';
        converter.value = '';
    } else {
        one.innerText = '°C';
        two.innerText = '°F';
        result.innerText = '';
        converter.value = '';
    }
};

const convert = () => {
    if (converter.value !== '') {
        if (one.innerText === '°C') {
            fahrenheit = converter.value * 1.8 + 32;
            result.innerText = `${converter.value}°C equals ${fahrenheit.toFixed(1)}°F.`
            converter.value = '';
        } else {
            celsius = (converter.value - 32) / 1.8;
            result.innerText = `${converter.value}°F equals ${celsius.toFixed(1)}°C.`
            converter.value = '';
        }
    } else {
        result.innerText = 'Please enter a number before you click the CONVERT button.'
    }
};

convBtn.addEventListener('click', convert);
converter.addEventListener('keyup', function(event){
    if (event.key === 'Enter') {
        convert();
    }
});
changeBtn.addEventListener('click', swap);
resetBtn.addEventListener('click', function() {
    result.innerText = '';
    converter.value = '';
});