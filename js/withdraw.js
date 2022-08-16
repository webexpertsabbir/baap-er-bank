// step 1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;;
    const newWithdrawAmount = parseFloat(withdrawFieldString);
    // step 3
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalStiring = withdrawTotal.innerText;
    const previesWithdratTotal = parseFloat(withdrawTotalStiring);
    //step 4
    const carentWithdrawTotal = previesWithdratTotal + newWithdrawAmount;
    withdrawTotal.innerText = carentWithdrawTotal;
    //step 5
    const balaceTotal = document.getElementById('total-balance');
    const balaceTotalStiring = balaceTotal.innerText;
    const previceBlanceTotal = parseFloat(balaceTotalStiring);
    // step 6
    const newBlanceTotal = previceBlanceTotal - newWithdrawAmount;
    balaceTotal.innerText = newBlanceTotal;

    withdrawField.value = '';
})