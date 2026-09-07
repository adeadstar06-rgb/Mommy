const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const modal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");
const buttonWrap = document.querySelector(".button-wrap");

function resetNoButtonLabel() {
  noBtn.textContent = "No";
  noBtn.setAttribute("aria-label", "No");
}

function startNoButtonLabel() {
  noBtn.textContent = "Please yes";
  noBtn.setAttribute("aria-label", "Please yes");
}

function moveNoButton() {
  const wrapWidth = buttonWrap.clientWidth;
  const wrapHeight = buttonWrap.clientHeight;
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = Math.max(wrapWidth - buttonWidth - 10, 0);
  const maxY = Math.max(wrapHeight - buttonHeight - 10, 0);

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "translate(0, 0)";
  noBtn.style.transition = "left 0.18s ease, top 0.18s ease, transform 0.18s ease";
}

noBtn.addEventListener("mouseenter", () => {
  startNoButtonLabel();
  moveNoButton();
});

noBtn.addEventListener("mouseleave", resetNoButtonLabel);
noBtn.addEventListener("focus", () => {
  startNoButtonLabel();
  moveNoButton();
});
noBtn.addEventListener("blur", resetNoButtonLabel);
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  startNoButtonLabel();
  moveNoButton();
}, { passive: false });
noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  startNoButtonLabel();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
});

window.addEventListener("load", () => {
  resetNoButtonLabel();
  moveNoButton();
});
