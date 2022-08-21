function getOtp(){
    const otp = generateOtp();
    const otpString = otp + '';
    if (otpString.length === 4){
        return otp;
    } else{
        return getOtp();
    }

}

function generateOtp(){
    const createOtp = Math.random() * 10000;
    const generateOtp = Math.round(createOtp);
    return generateOtp;
}
document.getElementById('generate-otp').addEventListener('click', function(){
    const finalOtp = getOtp()
    const otpField = document.getElementById('otp-field');
    otpField.value = finalOtp;

    

})

document.getElementById('calculator').addEventListener('click', function(event){
    const calNumber = event.target.innerText;

    const typedNumbersfield = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbersfield.value;
    if(isNaN(calNumber)){
       if(calNumber === 'C'){
        typedNumbersfield.value = '';
       } else if(calNumber === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbersfield.value = remainingDigits;
       }
    } else{
        const newTypedNumber = previousTypedNumber + calNumber;
        typedNumbersfield.value = newTypedNumber;
    }
})

document.getElementById('verify-otp').addEventListener('click', function(){
    const otpField = document.getElementById('otp-field');
    const currentOtp = otpField.value;

    const typedNumbersfield = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersfield.value;

    const pinSuccessMsg = document.getElementById('otp-success');
    const otpFailedMsg = document.getElementById('otp-failed');
    if(currentOtp === typedNumbers){
        pinSuccessMsg.style.display = 'block';
        otpFailedMsg.style.display = 'none';

    } else{
        otpFailedMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
})