const createPostFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const post_title = document.querySelector("#post_title").value.trim();
  const post_body = document.querySelector("#post_body").value.trim();

  if (post_title && post_title) {
    // Send a POST request to the API endpoint

    //is this the correct end point?
    const response = await fetch("/api/users/newpost", {
      method: "POST",
      body: JSON.stringify({
        title: post_title,

        post_paragraph: post_body,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("Success!! AGAIN!!");
      // If successful, redirect the browser to the dashboard page.
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const PostBtn = document.querySelector("#createPostButton");

PostBtn.addEventListener("click", createPostFormHandler);
