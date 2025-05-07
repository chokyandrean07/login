document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
  
      const validEmail = "admin@example.com";
      const validPassword = "1234";
  
      if (email === validEmail && password === validPassword) {
        window.location.href = "dashbort.html";
      } else {
        errorMsg.textContent = "Email atau password salah!";
      }
    });
  });
   