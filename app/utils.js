import document from "document";

let inputtext = document.getElementById("input");
let outputtext = document.getElementById("output");

const setEmptyState = () => {
    inputtext.text = '0kJ';
    outputtext.text = '0CAL';
};

const setInput = number => {
    const inputStripped = stripInput(inputtext.text);

    if (inputStripped === '0') {
        setValues(number);
    } else {
        const newInput = inputStripped + number;
        setValues(newInput);
    }
};

const setValues = input => {
    const cals = Math.round(input / 4.184) + 'CAL';
    if (cals.length <= 8) {
        inputtext.text = input + 'kJ';
        outputtext.text = cals;
    }
};

const clearLast = () => {
    const inputStripped = stripInput(inputtext.text);

    if (inputStripped === '' || inputStripped.length === 1) {
        setEmptyState();
    } else {
        const newInput = inputStripped.slice(0, -1);
        setValues(newInput);
    }
};

const stripInput = text => {
    return text.replace('kJ', '');
};

const utils = {
    setInput,
    setValues,
    setEmptyState,
    clearLast,
    stripInput,
};

export default utils