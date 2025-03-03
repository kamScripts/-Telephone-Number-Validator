const userInput = document.getElementById('user-input');
const results = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const regex = /^(\d\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

const processInput = ()=>{    
    const input = userInput.value;
    if (input==="") {
        alert("Please provide a phone number")
    }
    isValid = validate(regex, input);
    displayResults(isValid, input)
    userInput.value = ""
};
const validate = (regexp, str) => regexp.test(str);

const displayResults = (isValid, number) => {
    const para = document.createElement("p");  
    para.textContent = `${isValid? 'Valid' : 'Invalid'} US number: ${number}`
    results.appendChild(para);
};
const clearResults = () => results.textContent = "";


checkBtn.addEventListener('click', processInput);
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        processInput()};
})
clearBtn.addEventListener('click', clearResults);
