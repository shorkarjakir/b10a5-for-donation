function getInputvalue(id){
    const inputField = document.getElementById(id).value;
    const inputNum = parseInt(inputField);
    return inputNum;
};

function validationData(id){
    if(id < 0 || isNaN(id) === true || id === ''){
        setAlertMessage();
        return true;
    }
};

function getTextvalue(id){
    const text = document.getElementById(id).innerText;
    const textNum = parseInt(text);
    return textNum;
};

function addAmount(amount, input, id){
    const totalAmount = input + amount;
    document.getElementById(id).innerText = totalAmount;
    return totalAmount;
    
};

function remainingBalance(totalBalance, input, id){
    const remainingBalance = totalBalance - input;
    document.getElementById(id).innerText = remainingBalance;
    return remainingBalance;
};


function makeHistory(input, id, title) {
    const todayDate = new Date();
    const history = document.getElementById(id);
    const div = document.createElement('div');
    div.innerHTML = `
    <h2 id="History-title" class="text-xl font-bold inline-flex lg:text-2xl"> ${input} ${title}</h2>
      <p class="text-base">Date: <span id="History-date" class="text-emerald-900 text-base">${todayDate}</span></p>
    `;
    div.classList.add('my-4', 'p-4', 'bg-emerald-100', 'rounded-lg');
    history.appendChild(div);
    return;
};


function clearInput(id){
    document.getElementById(id).value = '';
};

function setAlertMessage(){
    alert('Please enter a valid amount!');
};

function setModalMessage(){
    document.getElementById('my_modal_6').setAttribute('checked', 'checked');
    return;
};

// shortcut function: 
