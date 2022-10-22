const signUpToBlog = async (event) => {
  event.preventDefault();
  const username = document.getElementById("usernameSignUp").value.trim();
  const email = document.getElementById("emailAddressSignUp").value.trim();
  const password = document.getElementById("passwordSignUp").value.trim();
  const response = await fetch(`/signup`, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("It worked! Eureka!");
    document.location.replace("/dashboard");
  } else {
    console.log(response);
    alert("Failed to sign up");
  }
};

const signUpBtn = document.querySelector("#signUpSubmitButton");

signUpBtn.addEventListener("click", signUpToBlog);
