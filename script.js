// Submits the sign-up form to Google Forms in the background.
// Google doesn't send CORS headers, so the request is "no-cors": we can tell
// when it was sent, but not read Google's reply.

const form = document.getElementById("signup");
const status = document.getElementById("status");
const button = form.querySelector("button");

const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScYllanWckgM9KM1eDlfgDfEXJFy0kvAJVUbbHLtrICu1BFJQ/viewform";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  button.disabled = true;
  button.textContent = "Sending…";
  status.className = "status";
  status.replaceChildren();

  try {
    await fetch(form.action, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(new FormData(form)),
    });
    form.hidden = true;
    status.className = "status is-success";
    status.textContent = "You’re on the list. We’ll email you when it drops.";
  } catch {
    const link = document.createElement("a");
    link.href = FORM_LINK;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "sign up here";

    status.className = "status is-error";
    status.replaceChildren("That didn’t go through. Try again, or ", link, ".");
    button.disabled = false;
    button.textContent = "Notify me";
  }
});
