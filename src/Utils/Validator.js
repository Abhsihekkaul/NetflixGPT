export function ValidateEmailAndPassword(Email, Password) {
    const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const isEmailValid = emailRegex.test(Email);
    const isPasswordValid = passwordRegex.test(Password);

    if (!isEmailValid) {
        return "Email is not Valid";
    }

    if (!isPasswordValid) {
        return "Password is not Valid";
    }

    return null;
}


export function ValidateUserName(UserName){
    const ValidateUserNameRegex = "/^[0-9A-Za-z]{6,16}$/".test(UserName);
    if(!ValidateUserNameRegex){
        return "UserName is not Valid";
    }
    return null;
}