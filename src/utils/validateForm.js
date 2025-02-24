export const validateForm = (email, password) => {
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isValidEmail) return "Please enter a valid email address in the correct format (e.g., example@domain.com).";
    if (!isValidPassword) return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.";

    return null;
}