// Submits the sign-up form to Google Forms in the background.
// Google doesn't send CORS headers, so the request is "no-cors": we can tell
// when it was sent, but not read Google's reply.

const form = document.getElementById("signup");
const status = document.getElementById("status");
const finePrint = document.getElementById("fine-print");
const button = form.querySelector("button");
const label = button.querySelector(".label");

const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScYllanWckgM9KM1eDlfgDfEXJFy0kvAJVUbbHLtrICu1BFJQ/viewform";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  button.disabled = true;
  label.textContent = "Joining…";
  status.className = "status";
  status.replaceChildren();

  try {
    await fetch(form.action, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(new FormData(form)),
    });
    showSuccess();
  } catch {
    showError();
    button.disabled = false;
    label.textContent = "Join";
  }
});

function showSuccess() {
  form.hidden = true;
  finePrint.hidden = true;

  const check = document.createElement("div");
  check.className = "check";
  check.setAttribute("aria-hidden", "true");
  check.textContent = "✓";

  const text = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = "You’re on the list.";
  const detail = document.createElement("span");
  detail.textContent = "We’ll email you when it drops.";
  text.append(title, detail);

  status.className = "status is-success";
  status.replaceChildren(check, text);
}

function showError() {
  const link = document.createElement("a");
  link.href = FORM_LINK;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "sign up here";

  status.className = "status is-error";
  status.replaceChildren("Something went wrong. Try again, or ", link, ".");
}
