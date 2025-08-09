    document
      .getElementById('registerForm')
      .addEventListener('submit', function (e) {
        e.preventDefault();

        // Elements
        const firstNameEl = document.getElementById('firstName');
        const lastNameEl = document.getElementById('lastName');
        const emailEl = document.getElementById('email');
        const passEl = document.getElementById('password');
        const confirmEl = document.getElementById('confirmPassword');
        const agreeEl = document.getElementById('agree');

        // Error containers
        const firstNameError = document.getElementById('firstNameError');
        const lastNameError = document.getElementById('lastNameError');
        const emailError = document.getElementById('emailError');
        const passError = document.getElementById('passwordError');
        const confirmError = document.getElementById('confirmPasswordError');
        const agreeError = document.getElementById('agreeError');

        // Reset errors
        [
          firstNameError,
          lastNameError,
          emailError,
          passError,
          confirmError,
          agreeError,
        ].forEach(el => (el.textContent = ''));

        let valid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = emailEl.value.trim();
        const pass = passEl.value.trim();
        const confirm = confirmEl.value.trim();
        const firstName = firstNameEl.value.trim();
        const lastName = lastNameEl.value.trim();
        const MAX_PW = 128;
        const MIN_PW = 8;

        // First Name
        if (!firstName) {
          firstNameError.textContent = 'First name is required.';
          valid = false;
        }

        // Last Name
        if (!lastName) {
          lastNameError.textContent = 'Last name is required.';
          valid = false;
        }

        // Email
        if (!email) {
          emailError.textContent = 'Email is required.';
          valid = false;
        } else if (!emailPattern.test(email)) {
          emailError.textContent = 'Enter a valid email address.';
          valid = false;
        }

        // Password
        if (!pass) {
          passError.textContent = 'Password is required.';
          valid = false;
        } else if (pass.length < MIN_PW) {
          passError.textContent = `Password must be at least ${MIN_PW} characters.`;
          valid = false;
        } else if (pass.length > MAX_PW) {
          passError.textContent = `Password cannot exceed ${MAX_PW} characters.`;
          valid = false;
        }

        // Confirm Password
        if (!confirm) {
          confirmError.textContent = 'Please confirm your password.';
          valid = false;
        } else if (confirm !== pass) {
          confirmError.textContent = 'Passwords do not match.';
          valid = false;
        }

        // Terms Checkbox
        if (!agreeEl.checked) {
          agreeError.textContent = 'You must agree to the terms.';
          valid = false;
        }

        if (valid) {
          this.submit();
        }
      });