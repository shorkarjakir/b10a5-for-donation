function getInputvalue(id){
    const inputField = document.getElementById(id).value;
    const inputNum = parseInt(inputField);
    return inputNum;
};

function getTextvalue(id){
    const text = document.getElementById(id).innerText;
    const textNum = parseInt(text);
    return textNum;
};

