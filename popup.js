        var loginBackground = document.getElementById('loginBackground');
        var loginDiv = document.getElementById('loginDiv');
        
        loginBackground.style.position = 'fixed';
        loginBackground.style.top = '0';
        loginBackground.style.left = '0';
        loginBackground.style.width = '100%';
        loginBackground.style.height = '100%';

        loginDiv.style.position = 'fixed';
        loginDiv.style.top = '50%';
        loginDiv.style.left = '50%';
        loginDiv.style.transform = 'translate(-50%, -50%)';
        loginDiv.style.backgroundColor = 'white';
        loginDiv.style.padding = '30px';
        loginDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        loginDiv.style.zIndex = '1000';

        var inputFields = loginDiv.querySelectorAll('input, button');
        inputFields.forEach(function(item) {
            item.style.display = 'block';
            item.style.marginBottom = '15px';
            if (item.tagName === 'BUTTON') {
                item.style.backgroundColor = '#007bff';
                item.style.color = 'white';
                item.style.border = 'none';
                item.style.cursor = 'pointer';
            } else {
                item.style.width = '100%';
                item.style.padding = '10px';
                item.style.fontSize = '16px';
                item.style.border = '1px solid #ccc';
                item.style.borderRadius = '5px';
                item.style.boxSizing = 'border-box';
            }
        });

        function submitLogin() {
            var username = document.querySelector('input[type="text"]').value;
            var password = document.querySelector('input[type="password"]').value;

            if (username && password) {
                alert("Username: " + username + "\nPassword: " + password);
                loginBackground.style.display = 'none';
                loginDiv.style.display = 'none';
                document.body.style.overflow = 'auto';
            } else {
                alert("Please enter both username and password.");
            }
        }
