function isConfirmedPassword(){
    let passwd = document.getElementById("passwd").value;
    let confirmPasswd = document.getElementById("confirm-passwd").value;
    return passwd === confirmPasswd;
}

function isEmailValid(elementId) {
    let addr = document.getElementById(elementId).value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!addr.match(validRegex);
}

function isPasswordOK(elementId) {
    let passwd = document.getElementById(elementId).value;
    let testNumber = /\d/.test(passwd);
    let testTwoUpperCase = new RegExp("(?=(?:.*[A-Z].*){2,})").test(passwd);
    let testSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwd)
    return passwd.length >= 5 && passwd.length <= 10 && testNumber && testTwoUpperCase && testSpecialChar;
}

function registerCheck(){
    let feedback = "";
    let isEmpName = ('' === document.getElementById("user-name").value);
    let isEmpEmail = ('' === document.getElementById("email-addr").value);
    let isEmpPasswd = ('' === document.getElementById("passwd").value);
    let isEmpConfirmPasswd = ('' === document.getElementById("confirm-passwd").value);
    let roleCheck = (document.getElementById("buyer-check").checked || document.getElementById("seller-check").checked);
    let isAccept = document.getElementById('terms-check').checked;
    if (isEmpName) {
        feedback = "Please enter your name.";
    } else {
        if (isEmpEmail) {
            feedback = "Please enter an email address.";
        } else {
            if (!isEmailValid("email-addr")) {
                feedback = "Make sure your email's format is correct.";
            } else {
                if (isEmpPasswd) {
                    feedback = "Please enter a password.";
                } else {
                    if (!isPasswordOK("passwd")) {
                        feedback = "Make sure your password contains 5-10 characters with at least 2 upper case letters, 1 number and 1 special character.";
                    } else {
                        if (isEmpConfirmPasswd) {
                            feedback = "Please confirm your entered password.";
                        } else {
                            if (!isConfirmedPassword()) {
                                feedback = "Make sure your confirmed password matches the one you entered before.";
                            } else {
                                if (!roleCheck) {
                                    feedback = "Please select at least one role."
                                } else {
                                    if (!isAccept) {
                                        feedback = "You need to agree with our terms and conditions in order to register."
                                    } else {
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
    return feedback;
}

function silence_msgs(){
    if ($('.alert').length){
        $('.alert').fadeOut('normal', function () {$(this).remove();});
        $('.modal-response').animate({height: '-=80px'}, 300);
    }
}

function registerFeedback() {
    silence_msgs();
    let feedback = registerCheck();
    $('.modal-response').animate(
        {height: '+=80px'}, 300
    );
    if("Your registration has been saved." === feedback){
        $('<div class="alert alert-success"></div>').text(feedback).hide().appendTo('.modal-response').fadeIn(500);
    }else{
        $('<div class="alert alert-warning"></div>').text(feedback).hide().appendTo('.modal-response').fadeIn(500);
    }
};

function loginCheck() {
    // This function is a dummy function, it will be re-implemented completely to work with backend.
    const dummy_user = {}
    dummy_user.email = "dong@yi.guo";
    dummy_user.passwd = "I@mUser1"

    const dummy_manager = {}
    dummy_manager.email = "dongyi@guo.xyz";
    dummy_manager.passwd = "I@mUser2"

    let feedback = '';
    let userMail = document.getElementById("login-email").value;
    let userPasswd = document.getElementById("login-passwd").value;
    let isEmpEmail = ('' === userMail);
    let isEmpPasswd = ('' === userPasswd);
    if (isEmpEmail) {
        feedback = "Please input your login email.";
    } else {
        if (!isEmailValid("login-email")) {
            feedback = "Make sure your email's format is correct.";
        } else {
            if (isEmpPasswd) {
                feedback = "Please input your password.";
            } else {
                if (!isPasswordOK("login-passwd")){
                    feedback = "Make sure your password contains 5-10 characters with at least 2 upper case letters, 1 number and 1 special character.";
                } else {
                    if (dummy_user.email === userMail){
                        if (dummy_user.passwd === userPasswd) {
                            feedback = "Success! Logging you in...";
                        } else {
                            feedback = "Incorrect Password.";
                        }
                    } else if (dummy_manager.email === userMail){
                        if (dummy_manager.passwd === userPasswd) {
                            feedback = "Success! Logging you in...";
                        } else {
                            feedback = "Incorrect Password.";
                        }
                    } else {
                        feedback = "User doesn't exist.";
                    }
                }
            }
        }
    }
    return feedback;
}

function loginFeedback() {
    silence_msgs();
    let feedback = loginCheck();
    $('.modal-response').animate(
        {height: '+=80px'}, 300
    );
    if("Success! Logging you in..." === feedback){
        $('<div class="alert alert-success"></div>').text(feedback).hide().appendTo('.modal-response').fadeIn(500);
    }else{
        $('<div class="alert alert-warning"></div>').text(feedback).hide().appendTo('.modal-response').fadeIn(500);
    }
};