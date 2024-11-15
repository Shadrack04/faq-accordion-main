const accordionQuestions = document.querySelectorAll(".q");

accordionQuestions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const answer = question.nextElementSibling;
    const currentIcon = question.querySelector(".toggle-icon");

    accordionQuestions.forEach((question) => {
      if (question.nextElementSibling !== answer) {
        question.nextElementSibling.classList.add("hidden");
        question.querySelector(".toggle-icon").src =
          "../assets/images/icon-plus.svg";
      }
    });

    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      currentIcon.src = "../assets/images/icon-minus.svg";
    } else {
      answer.classList.add("hidden");
      currentIcon.src = "../assets/images/icon-plus.svg";
    }
  });
});
