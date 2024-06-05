<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Popup Test</title>
</head>
<body>
    <script>
        // Create the login background div
        var loginBackground = document.createElement('div');
        loginBackground.setAttribute('id', 'loginBackground');
        loginBackground.style.position = 'fixed';
        loginBackground.style.top = '0';
        loginBackground.style.left = '0';
        loginBackground.style.width = '100%';
        loginBackground.style.height = '100%';
        loginBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; /* Semi-transparent grey background */
        loginBackground.style.backdropFilter = 'blur(5px)'; /* Apply blur effect */
        loginBackground.style.zIndex = '999'; /* Ensure the background is behind the login popup */
        document.body.appendChild(loginBackground);

        // Create the login popup div
        var loginDiv = document.createElement('div');
        loginDiv.setAttribute('id', 'loginDiv');
        loginDiv.style.position = 'fixed';
        loginDiv.style.top = '50%';
        loginDiv.style.left = '50%';
        loginDiv.style.transform = 'translate(-50%, -50%)';
        loginDiv.style.backgroundColor = 'white';
        loginDiv.style.padding = '30px';
        loginDiv.style.borderRadius = '20px'; /* Rounded corners */
        loginDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        loginDiv.style.zIndex = '1000';
        document.body.appendChild(loginDiv);

        // Add text to the login popup
        var loginText = document.createElement('p');
        loginText.textContent = 'Please login to view your API key';
        loginText.style.marginBottom = '15px';
        loginDiv.appendChild(loginText);

        // Create input fields for username and password
        var usernameInput = document.createElement('input');
        usernameInput.setAttribute('type', 'text');
        usernameInput.setAttribute('placeholder', 'Username');
        usernameInput.style.width = '100%';
        usernameInput.style.padding = '10px';
        usernameInput.style.fontSize = '16px';
        usernameInput.style.border = '1px solid #ccc';
        usernameInput.style.borderRadius = '5px';
        usernameInput.style.boxSizing = 'border-box';
        usernameInput.style.marginBottom = '15px';
        loginDiv.appendChild(usernameInput);

        var passwordInput = document.createElement('input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', 'Password');
        passwordInput.style.width = '100%';
        passwordInput.style.padding = '10px';
        passwordInput.style.fontSize = '16px';
        passwordInput.style.border = '1px solid #ccc';
        passwordInput.style.borderRadius = '5px';
        passwordInput.style.boxSizing = 'border-box';
        passwordInput.style.marginBottom = '15px';
        loginDiv.appendChild(passwordInput);

        // Create the submit button
        var submitButton = document.createElement('button');
        submitButton.textContent = 'Login';
        submitButton.style.width = '100%';
        submitButton.style.padding = '10px';
        submitButton.style.fontSize = '16px';
        submitButton.style.backgroundColor = '#007bff';
        submitButton.style.color = 'white';
        submitButton.style.border = 'none';
        submitButton.style.borderRadius = '5px';
        submitButton.style.boxSizing = 'border-box';
        submitButton.style.cursor = 'pointer';
        submitButton.addEventListener('click', function() {
            var username = usernameInput.value;
            var password = passwordInput.value;

            if (username && password) {
                alert("Username: " + username + "\nPassword: " + password);
                // Optionally, you can close the login popup after successful login
                loginBackground.style.display = 'none';
                loginDiv.style.display = 'none';
                document.body.style.overflow = 'auto'; /* Enable scrolling */
            } else {
                alert("Please enter both username and password.");
            }
        });
        loginDiv.appendChild(submitButton);
    </script>
</body>
</html>
