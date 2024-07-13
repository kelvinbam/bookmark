document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".subs");
  const bookmarkInfos = document.querySelectorAll(".bookmark-info");
  const container = document.querySelector(".bookmark-info-container");
  let currentIndex = 0;

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentIndex = index;
      updateBookmarkInfo();
    });
  });

  function updateBookmarkInfo() {
    const offset = -currentIndex * 100;
    bookmarkInfos.forEach((info) => {
      info.style.transform = `translateX(${offset}%)`;
    });
  }

  // Initialize the first slide
  updateBookmarkInfo();
});

document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".asked-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.querySelector(".answers");
      const arrow = question.querySelector("img");

      if (answer.classList.contains("show")) {
        answer.classList.remove("show");
        arrow.classList.remove("rotate");
      } else {
        questions.forEach((q) => {
          q.querySelector(".answers").classList.remove("show");
          q.querySelector("img").classList.remove("rotate");
        });
        answer.classList.add("show");
        arrow.classList.add("rotate");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector(".input-space");
  const errorIcon = document.querySelector(".error-icon");
  const errorText = document.querySelector(".error-text");
  const contactBtn = document.querySelector(".contact-btn");

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
      emailInput.classList.add("error");
      errorIcon.classList.add("show");
      errorText.classList.add("show");
    } else {
      emailInput.classList.remove("error");
      errorIcon.classList.remove("show");
      errorText.classList.remove("show");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("close-menu");

  menu.classList.toggle("active");
});
