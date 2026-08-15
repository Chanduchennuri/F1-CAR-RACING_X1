function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password){
    return /^(?=.*\d).{6,}$/.test(password);
}

module.exports = {validateEmail, validatePassword};