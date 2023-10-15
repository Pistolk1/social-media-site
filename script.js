document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password match the data in users.json (simulated data)
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            var user = users.find(u => u.username === username && u.password === password);
            if (user) {
                // Successful login, redirect to the dashboard
                localStorage.setItem("username", username); // Store username in localStorage
                window.location.href = "./dash/dashboard.html"; // Redirect to the dashboard page
            } else {
                // Failed login attempt
                document.getElementById("error-message").textContent = "Invalid username or password.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});