document.addEventListener("DOMContentLoaded", function() {
    // Get username from localStorage (you can set this during login)
    var username = localStorage.getItem("username");
    document.getElementById("username").textContent = username;

    // Retrieve profile picture URL from localStorage
    var savedProfilePictureUrl = localStorage.getItem(username + "_profile_picture");
    var profilePicture = document.getElementById("profile-picture");

    if (savedProfilePictureUrl) {
        profilePicture.src = savedProfilePictureUrl;
    }

    // Profile picture upload functionality
    var profilePictureInput = document.getElementById("profile-picture-input");
    profilePictureInput.addEventListener("change", function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            profilePicture.src = reader.result;
            // Save profile picture URL to localStorage
            localStorage.setItem(username + "_profile_picture", reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    // Retrieve and display saved posts from localStorage
    var savedPosts = JSON.parse(localStorage.getItem(username + "_posts")) || [];

    savedPosts.forEach(function(postContent) {
        displayPost(postContent);
    });

    // Post functionality
    var postButton = document.getElementById("post-button");
    var postText = document.getElementById("post-text");

    postButton.addEventListener("click", function() {
        var postContent = postText.value;
        if (postContent.trim() !== "") {
            // Save the post content to localStorage
            savedPosts.push(postContent);
            localStorage.setItem(username + "_posts", JSON.stringify(savedPosts));
            // Display the post
            displayPost(postContent);
            // Clear the textarea after posting
            postText.value = "";
        } else {
            alert("Please enter your post content.");
        }
    });

    function displayPost(postContent) {
        var postContainer = document.createElement("div");
        postContainer.className = "post";
        postContainer.textContent = postContent;
        document.body.appendChild(postContainer);
    }
});
