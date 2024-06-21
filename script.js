const emailInput = document.getElementById("email-input");
const errorMsg = document.getElementById("error-msg");

emailInput.addEventListener("invalid", () => {
  emailInput.setCustomValidity(" ");

  errorMsg.classList.remove("hidden");
  emailInput.classList.add("error-clr");
});

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");

  errorMsg.classList.add("hidden");
  emailInput.classList.remove("error-clr");
});
