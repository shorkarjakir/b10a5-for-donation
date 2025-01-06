
// document.getElementById('noakhali-donate-btn').addEventListener('click', function(data){
//     data.preventDefault();
//     const noakhaliInput = getInputvalue('noakhali-amount');
//     const noakhaliDonatedAmount = getTextvalue('Noakhali-donated-amount');
//     const totalBalance = getTextvalue('total-balance');
//     const noakhaliTitle = document.getElementById('noakhali-title').innerText;
//     const validData = validationData(noakhaliInput);
//     if(validData === true){
//         clearInput('noakhali-amount');
//         return;
//     };

//     if(noakhaliInput <= totalBalance){
//         addAmount(noakhaliDonatedAmount, noakhaliInput, 'Noakhali-donated-amount');
//         remainingBalance(totalBalance, noakhaliInput, 'total-balance');
//         setModalMessage();
//         makeHistory(noakhaliInput, 'History-container', noakhaliTitle);
//         clearInput('noakhali-amount');
//         return;
//     };

//     if(noakhaliInput > totalBalance){
//         alert('You do not have enough balance!');
//         clearInput('noakhali-amount');
//         return;
//     };

   
// });

document.getElementById('noakhali-donate-btn').addEventListener('click', function(data){
    forDonateCollect('noakhali-amount', 'Noakhali-donated-amount', 'total-balance', 'noakhali-title', 'History-container');
});

document.getElementById('feni-donated-btn').addEventListener('click', function(data){
    forDonateCollect('feni-amount-input', 'feni-donated-amount', 'total-balance', 'feni-title', 'History-container');
});

document.getElementById('quota-donate-btn').addEventListener('click', function(data){
    forDonateCollect('quota-input-amount', 'quota-donated-amount', 'total-balance', 'quota-title', 'History-container');
});


document.getElementById('History-list').addEventListener('click', function(){
    document.getElementById('donation-lsit-container').classList.add('hidden');
    document.getElementById('History-container').classList.remove('hidden');
    document.getElementById('History-list').classList.add('bg-lime-400');
    document.getElementById('donation-list').classList.remove('bg-lime-400');
});

document.getElementById('donation-list').addEventListener('click', function(){
    document.getElementById('donation-lsit-container').classList.remove('hidden');
    document.getElementById('History-container').classList.add('hidden');
    document.getElementById('donation-list').classList.add('bg-lime-400');
    document.getElementById('History-list').classList.remove('bg-lime-400');
});