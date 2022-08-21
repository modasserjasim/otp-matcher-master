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