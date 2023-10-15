document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check user credentials on the server-side
    // Assuming the server responds with a success status if credentials are correct
    // You can implement this logic using your preferred server-side technology (Node.js, PHP, etc.)

    // For demonstration purposes, let's assume the server responds with a success status
    var serverResponse = { status: "success" };

    if (serverResponse.status === "success") {
        // Successful login, redirect to the dashboard in the same directory
        window.location.href = "./dashboard.html";
    } else {
        // Failed login attempt
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});
