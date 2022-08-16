// step: 1 add even Listener to the buttin

document.getElementById('diposit-button').addEventListener('click', function(){
    // console.log('Deposit now')
    // step 2 get deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositField = depositField.value;
    const newDepositAmound = parseFloat(newDepositField);
    depositField.value = '';
    
    if(isNaN(newDepositAmound)){
        alert('Enter a valide amount');
        return;
    }
    // console.log( newDepositAmound)
    // step 3 get deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previesDepositTotalString = depositTotal.innerText;
    const previesDepositTotal = parseFloat(previesDepositTotalString);
    // step 5 add total deposit
    const carentDepositTotal = previesDepositTotal + newDepositAmound;
    depositTotal.innerText = carentDepositTotal;

    // step 5 get total balance
    
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceStirng = totalBalance.innerText;
    const previesTotalBlance = parseFloat(totalBalanceStirng);
    // step 6 carent total balance
    const carentTotalBlance = previesTotalBlance + newDepositAmound;
   // step 7 set total balace
    totalBalance.innerText = carentTotalBlance;
    // step 8 cleat input field
    depositField.value = '';
})