document.addEventListener("DOMContentLoaded", function() {
    // Get username from localStorage (you can set this during login)
    var username = localStorage.getItem("username");
    document.getElementById("username").textContent = username;

    // Profile picture upload functionality
    var profilePictureInput = document.getElementById("profile-picture-input");
    var profilePicture = document.getElementById("profile-picture");

    profilePictureInput.addEventListener("change", function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            profilePicture.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    // Post functionality (this is just a basic example)
    var postButton = document.getElementById("post-button");
    var postText = document.getElementById("post-text");

    postButton.addEventListener("click", function() {
        var postContent = postText.value;
        if (postContent.trim() !== "") {
            // Here, you can send the post content to the server for processing/storage
            // For simplicity, let's just display an alert with the post content
            alert("Post Content: " + postContent);
            // Clear the textarea after posting
            postText.value = "";
        } else {
            alert("Please enter your post content.");
        }
    });
});