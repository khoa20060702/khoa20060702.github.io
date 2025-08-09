    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();

      // Elements
      const emailEl = document.getElementById('email');
      const passEl  = document.getElementById('password');
      const emailErrorEl = document.getElementById('emailError');
      const passErrorEl  = document.getElementById('passwordError');

      // Reset errors
      emailErrorEl.textContent = '';
      passErrorEl.textContent  = '';

      let valid = true;
      const email = emailEl.value.trim();
      const pass  = passEl.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Email Validation
      if (!email) {
        emailErrorEl.textContent = 'Please enter your email address.';
        valid = false;
      } else if (!emailPattern.test(email)) {
        emailErrorEl.textContent = 'Please enter a valid email address.';
        valid = false;
      }

      // Password Validation
      if (!pass) {
        passErrorEl.textContent = 'Please enter your password.';
        valid = false;
      } else if (pass.length < 8) {
        passErrorEl.textContent = 'Password must be at least 8 characters.';
        valid = false;
      }

      // Submit if valid
      if (valid) {
        this.submit(); // or perform AJAX login
      }
    });