// Optional JavaScript for contact form confirmation
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting Sky M Limited! We'll get back to you soon.");
  e.target.reset();
});
