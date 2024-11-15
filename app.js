let postForm = document.getElementById("postForm");
let postContainer = document.getElementById("postContainer");
let themeToggleBtn = document.getElementById("themeToggleBtn");
let body = document.body;

// Event listener to handle form submission and add post
postForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing page

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  // Create a new post element
  let post = document.createElement("div");
  post.classList.add("post");

  post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
      `;

  // Append the new post to the post container
  postContainer.appendChild(post);

  // Clear the form fields
  postForm.reset();
});

// Event listener for theme toggle
themeToggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
});
