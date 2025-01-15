// Function to create cookies
        function makeCookie(cookieName, cookieValue, lifespan) {
            document.cookie = `${cookieName}=${cookieValue};max-age=${lifespan};path=/`;
        }

        // Function to retrieve cookies as an object
        function getCookies() {
            const cookies = {};
            document.cookie.split(';').forEach(cookie => {
                const [key, value] = cookie.trim().split('=');
                cookies[key] = value;
            });
            return cookies;
        }

        // Function to handle form submission
        function storeValue() {
            const form = document.forms.infoForm;
            const nameInput = form.f_name;
            const colorInput = form.f_colour;

            form.onsubmit = function (event) {
                event.preventDefault(); // Prevent form from submitting normally
                const nameValue = nameInput.value;
                const colorValue = colorInput.value;

                // Create cookies with a lifespan of 24 hours
                makeCookie('Name', nameValue, 86400);
                makeCookie('Color', colorValue, 86400);

                // Log the form values
                console.log(`Name: ${nameValue}, Color: ${colorValue}`);

                // Refresh the page
                window.location.reload();
            };
        }

        // Function to initialize the page
        function initializePage() {
            const cookies = getCookies();
            const welcomeMsg = document.getElementById("newMsgBox");
            const deleteButton = document.getElementById("btnDel");

            if (cookies.Name && cookies.Color) {
                welcomeMsg.innerHTML = `Welcome ${cookies.Name}!`;
                document.body.style.background = cookies.Color;
                deleteButton.style.display = "block";

                // Delete cookies on button click
                deleteButton.onclick = function () {
                    document.cookie = "Name=;max-age=0;path=/";
                    document.cookie = "Color=;max-age=0;path=/";
                    window.location.reload();
                };
            }
        }

        // Execute on page load
        window.onload = function () {
            storeValue();
            initializePage();
        };