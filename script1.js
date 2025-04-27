function validateForm() {
    const Email = document.getElementsByName("Email")[0].value;
    const password = document.getElementsByName("password")[0].value;


    if (!Email.includes('@')) {
      alert("Email must contain '@' symbol.");
      return false;
  }
   
    if (password === "") {
        alert("Password can't be empty");
        return false;
    }
    
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
  
    alert("Login successful!"); 
    window.location.href = "index.html"; 
    return true;
  }
  