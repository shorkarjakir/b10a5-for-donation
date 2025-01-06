
// Shortcut function for getElementById

    function forDonateCollect(inputId, donatedAmountId, totalBalanceId, titleId, historyContainerId){
        const noakhaliInput = getInputvalue(inputId);
        const noakhaliDonatedAmount = getTextvalue(donatedAmountId);
        const totalBalance = getTextvalue(totalBalanceId);
        const noakhaliTitle = document.getElementById(titleId).innerText;
        const validData = validationData(noakhaliInput);
        if(validData === true){
            clearInput(inputId);
            return;
        };
    
        if(noakhaliInput <= totalBalance){
            addAmount(noakhaliDonatedAmount, noakhaliInput, donatedAmountId);
            remainingBalance(totalBalance, noakhaliInput, totalBalanceId);
            setModalMessage();
            makeHistory(noakhaliInput, historyContainerId, noakhaliTitle);
            clearInput(inputId);
            return;
        };
    
        if(noakhaliInput > totalBalance){
            alert('You do not have enough balance!');
            clearInput(inputId);
            return;
        };
    
    };