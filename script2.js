function validateForm1() {
    const name = document.getElementsByName("fullname")[0].value;
    const email = document.getElementsByName("email")[0].value;
    if (name.length < 4) {
        alert("Enter Full name");
        return false;
    }
    if (email === "" || !username.includes("@")) {
        alert("Please enter a valid email including '@' symbol ");
        return false;
    }


    alert("Registration successful!"); 
    return true;
}
