export const signInFormValidation = (email,password) =>{

    // To make the regex pattern case-insensitive, add the “i” flag at the end of the pattern. This ensures that the pattern matches email addresses regardless of the case of the letters.
    const emailValidate = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);

    // Minimum eight characters, at least one letter, one number and one special character: 
    const passwordValidate = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    // Error condition chk 
    if(!emailValidate) return "Enail Id is Not Valid";
    if(!passwordValidate) return "Password is Not Valid";

    // both got success 
    return null;
}