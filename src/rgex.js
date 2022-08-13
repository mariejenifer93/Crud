export const emailValidator = email => {
    // const emailRegex = /^[^\s@]+@[^\s@]+$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email)
}

export const passwordValidator = password => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password)
}