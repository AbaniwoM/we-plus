interface IValidation {
    email: string;
    password: string;
}

export const Validation = (values:IValidation) => {
    let error = {
        email: "",
        password: "",
    };
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
 
    if(values.email === "") {
       error.email ="Email should not be empty"
    } 
    else if(!email_pattern.test(values.email)) {
       error.email = "Email did not match"
    } else {
       error.email = ""
    }
 
    if(values.password === "") {
       error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
       error.password = "Password did not match"
    } else {
       error.password = ""
    }
    return error;
 }
 
 