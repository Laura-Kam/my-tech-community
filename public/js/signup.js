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
    document.location.replace("/dashboard");
  } else {
    console.log(response);
    alert("Failed to sign up");
  }
};
const signUpBtn = document
  .getElementById("signUpBtn")
  .addEventListener("click", signUpToBlog);
