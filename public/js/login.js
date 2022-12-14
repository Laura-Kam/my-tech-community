//log in code

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#usernameLogIn").value.trim();
  const password = document.querySelector("#passwordLogIn").value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint

    //is this the correct end point?
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
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

const logInBtn = document.querySelector("#logInButton");

logInBtn.addEventListener("click", loginFormHandler);
