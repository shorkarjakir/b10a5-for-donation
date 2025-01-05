const totalBalance = getTextvalue('total-balance');


document.getElementById('noakhali-donate-btn').addEventListener('click', function(data){
    data.preventDefault();
    const noakhaliInput = getInputvalue('noakhali-amount');
    console.log(noakhaliInput);
    const text = document.getElementById('noakhali-donate-total').innerText;
    const textNum = parseInt(text);
    const total = inputNum + textNum;
    document.getElementById('noakhali-donate-total').innerText = total;
    document.getElementById('noakhali-donate-input').value = '';
});