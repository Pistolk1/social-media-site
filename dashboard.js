document.addEventListener("DOMContentLoaded", function() {
    // Get username from localStorage (you can set this during login)
    var username = localStorage.getItem("username");
    document.getElementById("username").textContent = username;

    // Fetch posts from the server-side API
    fetch("/api/posts")
        .then(response => response.json())
        .then(posts => {
            // Display posts from different users
            posts.forEach(post => {
                displayPost(post.username, post.content);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });

    // Profile picture upload and post functionality (similar to previous examples)
    // ...
    
    function displayPost(author, postContent) {
        var postContainer = document.createElement("div");
        postContainer.className = "post";
        postContainer.innerHTML = `<strong>${author}:</strong> ${postContent}`;
        document.body.appendChild(postContainer);
    }
});
