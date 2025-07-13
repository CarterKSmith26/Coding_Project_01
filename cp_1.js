document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const tooltip = document.getElementById("tooltip");
  const charCount = document.getElementById("char-count");
  const display = document.getElementById("feedback-display");

  // Event delegation
  form.addEventListener("input", (e) => {
    if (e.target.id === "comments") {
      charCount.textContent = `${e.target.value.length} characters`;
    }
  });

  form.addEventListener("mouseover", (e) => {
    if (e.target.dataset.tip) {
      tooltip.textContent = e.target.dataset.tip;
      tooltip.style.left = e.pageX + "px";
      tooltip.style.top = e.pageY + "px";
      tooltip.style.display = "block";
    }
  });

  form.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });

  form.addEventListener("click", e => e.stopPropagation());

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const comments = document.getElementById("comments").value.trim();

    if (!name || !email || !comments) {
      alert("All fields are required.");
      return;
    }

    const entry = document.createElement("div");
    entry.innerHTML = `<strong>${name}</strong> (${email}): ${comments}`;
    display.appendChild(entry);

    form.reset();
    charCount.textContent = "0 characters";
  });

  // Background
  document.body.addEventListener("click", () => {
    console.log("Background clicked");
  });
});