document.addEventListener("DOMContentLoaded", () => {
  let email = document.getElementById("email");
  let form = document.getElementById("form");
  let errorText = document.getElementById("error-text");

  email.addEventListener("input", () => {
    if (!email.checkValidity()) {
      email.classList.add("error");
      errorText.classList.remove("hidden");
    } else {
      email.classList.remove("error");
      errorText.classList.add("hidden");
    }
  });

  form.addEventListener("submit", (e) => {
    if (!email.checkValidity()) {
      e.preventDefault();
      email.classList.add("error");
      errorText.classList.remove("hidden");
    } else {
      e.preventDefault();
      email.classList.remove("error");
      errorText.classList.add("hidden");
      email.value = "";
    }
  });
});
