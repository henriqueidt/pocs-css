const dictionaries = {
  en: ["Box 1", "Box 2", "Box 3", "Box 4"],
  ar: ["صندوق 1", "صندوق 2", "صندوق 3", "صندوق 4"],
};

const currentLang = "en";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".translate-button");
  const boxesWrapper = document.querySelector(".boxes");
  const boxes = document.querySelectorAll(".box");

  btn.addEventListener("click", () => {
    boxesWrapper.setAttribute(
      "dir",
      boxesWrapper.getAttribute("dir") === "ltr" ? "rtl" : "ltr"
    );

    boxes.forEach((box, index) => {
      const dict = boxesWrapper.getAttribute("dir") === "rtl" ? "ar" : "en";
      box.textContent = dictionaries[dict][index];
    });

    if (boxesWrapper.getAttribute("dir") === "rtl") {
      btn.textContent = "Back";
    } else {
      btn.textContent = "Translate";
    }
  });
});
