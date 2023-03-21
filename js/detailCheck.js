function isConfirmedPassword(){
    let passwd = document.getElementById("passwd").value;
    let confirmPasswd = document.getElementById("confirm-passwd").value;
    if (passwd != confirmPasswd) return false;
    return true;
}

function isEmailValid() {
    let addr = document.getElementById("email-addr").value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (addr.match(validRegex)) return true;
    return false;
}

function isPasswordOK() {
    let passwd = document.getElementById("passwd").value;
    if (passwd.length < 7 || passwd.length > 12) return false;
    return /\d/.test(passwd);
} 

function detailCheck(){
    let feedback = "";
    let isEmpFirstName = ('' == document.getElementById("first-name").value);
    let isEmpLastName = ('' == document.getElementById("last-name").value);
    let isEmpEmail = ('' == document.getElementById("email-addr").value);
    let isEmpPasswd = ('' == document.getElementById("passwd").value);
    let isEmpConfirmPasswd = ('' == document.getElementById("confirm-passwd").value);
    let isCheckedResearch = (document.getElementById("inlineRadio1").checked || document.getElementById("inlineRadio2").checked);
    let isAccept = document.getElementById('flexCheckDefault').checked;
    if (isEmpFirstName) {
        feedback = "Please enter your first name.";
    } else {
        if (isEmpLastName) {
            feedback = "Please enter your last name.";
        } else {
            if (isEmpEmail) {
                feedback = "Please enter an email address.";
            } else {
                if (!isEmailValid()){
                    feedback = "Make sure your email's format is correct.";
                } else {
                    if (isEmpPasswd) {
                        feedback = "Please enter a password.";
                    } else {
                        if (!isPasswordOK()){
                            feedback = "Make sure your password is in between 7-12 characters and has at least one number.";
                        } else {
                            if (isEmpConfirmPasswd) {
                                feedback = "Please confirm your entered password.";
                            } else{
                                if (!isConfirmedPassword()){
                                    feedback = "Make sure your confirmed password matches the one you entered before.";
                                }
                                else{
                                    if (!isCheckedResearch){
                                        feedback = "Please indicate whether you are a research student or not."
                                    }else {
                                        if (!isAccept){
                                            feedback = "You need to agree with our terms and condtions in order to register."
                                        }else {
                                            feedback = "Your registration has been saved."
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return feedback;
}