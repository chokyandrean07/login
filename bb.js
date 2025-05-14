function validateForm() {
    const firstName = document.getElementById('chokyandreansyah').value.trim();
    const email = document.getElementById('chokyandreansyah07@gmail.com').value.trim();
    const phone = document.getElementById('089509515589').value.trim();
    const password = document.getElementById('chokyyaturu').value.trim();
    const terms = document.getElementById('terms').checked;
  
    if (!firstName || !email || !phone || !password || !terms) {
      alert("Please fill all required fields and agree to terms.");
      return false;
    }
  
    alert("Registration successful!");
    return true;
  }
  