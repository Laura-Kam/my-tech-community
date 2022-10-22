const logoutFormHandler = async (event) => {
  event.preventDefault();

  //is this the correct end point?
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("Success!! AGAIN!!");
    // If successful, redirect the browser to the dashboard page.
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

const logOutBtn = document.querySelector("#logOutButton");

logOutBtn.addEventListener("click", logoutFormHandler);
