const links = document.querySelectorAll(".header__link");
links.forEach(function (currentLink) {
  currentLink.addEventListener("click", function () {
    document
      .querySelector(".header__link.colored")
      ?.classList.remove("colored");
    currentLink.classList.add("colored");
  });
});

// 2. КНОПКИ СТРАН: ПОДСВЕТКА + ПЕРЕКЛЮЧЕНИЕ ГАЛЕРЕЙ
document.querySelectorAll(".links .btn").forEach((button) => {
  button.addEventListener("click", () => {
    // ---- Блок 1: Подсветка нажатой кнопки ----
    document.querySelector(".links .btn.colored")?.classList.remove("colored");
    button.classList.add("colored");

    // ---- Блок 2: пеключение картинок ----
    // Получаем имя класса из текста кнопки (например, "ITALY" -> "italy")
    const targetClass = button.textContent.trim().toLowerCase();
    const targetGallery = document.querySelector(
      `.photography__images.${targetClass}`,
    );

    // Скрываем все галереи
    document.querySelectorAll(".photography__images").forEach((gallery) => {
      gallery.classList.remove("active");
    });

    // Показываем нужную галерею
    if (targetGallery) {
      targetGallery.classList.add("active");
    }
  });
});

const turnOn = document.querySelector(".menu");
const btn = document.querySelector(".menu__button");
const overlay = document.querySelector(".overlay");
btn.addEventListener("click", function () {
  turnOn.classList.toggle("turn_on");
  overlay.classList.toggle("overlay_turnOn");
});

// разработака overlay
overlay.addEventListener("click", () => {
  console.log("click");
  turnOn.classList.remove("turn_on");
  overlay.classList.remove("overlay_turnOn");
});

const object = document.querySelectorAll(".hidden__left");
const dlWorkFor = document.querySelectorAll(".companies__worked-for");
const title = document.querySelectorAll(".title");
const text = document.querySelector(".text");
const imgOfMe = document.querySelector(".pc__img");
const appearFromRightText = document.querySelectorAll(".appearFromRightText");

// это главный блок для анимации появления элеменов. в него добавляются новые элементы
const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("show", entry.isIntersecting);
      observe.unobserve(entry.target);
    }
  });
}, {});
for (const i of [
  ...object,
  ...title,
  ...dlWorkFor,
  imgOfMe,
  ...appearFromRightText,
]) {
  setTimeout(() => {
    observe.observe(i);
  }, 500);
}

// настройка анимации появления и печати текста
const typeAnimationText = document.querySelector(".typeAnimationText");
const fullText = typeAnimationText.textContent.trim().replace(/\s+/g, " ");
typeAnimationText.textContent = "";

// не работает
// const mainTitle = document.querySelector(".mainTitle");
// const fullMainTitle = mainTitle.textContent.trim().replace(/\s+/g, " ");
// mainTitle.textContent = "";

let index = 0;
let speed = 40;
// появление текста и 'type() - функция печатания
function type() {
  if (index < fullText.length) {
    typeAnimationText.textContent += fullText.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}
// настройка появления текста когда он displayed
const observeText = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        type();

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0 },
);
observeText.observe(typeAnimationText);

// АНИМАЦИЯ БЛОКА С ИНПУТ
const inputName = document.querySelectorAll(".inputName");
const inputEmail = document.querySelectorAll(".inputEmail");
const inputMessage = document.querySelectorAll(".inputMessage");
const btnInput = document.querySelectorAll(".input__group-btn");

const observeInputs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("inputShow", entry.isIntersecting);
      observeInputs.unobserve(entry.target);
    }
  });
}, {});
for (const i of [...inputName, ...inputEmail, ...inputMessage]) {
  observeInputs.observe(i);
}
// анимация кнопки
const observeBtn = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("showBtn", entry.isIntersecting);
      observeBtn.unobserve(entry.target);
    }
  });
}, {});
for (const i of [...btnInput]) {
  observeBtn.observe(i);
}

// анимация текста слева
// title
const inputTitle = document.querySelectorAll(".input__title");
const inputTitleObserve = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("showTextFromLeft", entry.isIntersecting);
      inputTitleObserve.unobserve(entry.target);
    }
  });
}, {});
for (const i of [...inputTitle]) {
  inputTitleObserve.observe(i);
}
// text
const inputText = document.querySelectorAll(".input__text");
const inputTextObserve = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("input__text-show", entry.isIntersecting);
      inputTextObserve.unobserve(entry.target);
    }
  });
}, {});

for (const i of [...inputText]) {
  inputTextObserve.observe(i);
}

// анимация блока skillset
const skillsetBlock1 = document.querySelectorAll(".skillset_block1");
const skillsetBlock2 = document.querySelectorAll(".skillset_block2");
const skillsetBlock3 = document.querySelectorAll(".skillset_block3");
const skillsetBlock4 = document.querySelectorAll(".skillset_block4");
console.log(typeof skillsetBlock1);

const skillsetObserve = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("skillsetShow", entry.isIntersecting);
      skillsetObserve.unobserve(entry.target);
    }
  });
}, {});
for (const i of [...skillsetBlock1, ...skillsetBlock3]) {
  skillsetObserve.observe(i);
}

const skillsetObserve2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          if (entry.target.isConnected && entry.intersectionRatio > 0) {
            entry.target.classList.add("skillsetShow");
          }
        }, 1000);
      } else {
        entry.target.classList.remove("skillSetShow");
      }
    });
  },
  { threshold: 0.1 },
);
for (const i of [...skillsetBlock2, ...skillsetBlock4]) {
  skillsetObserve2.observe(i);
}

const workBlock1TopLeft = document.querySelectorAll(".work__block1-top-left");

const observeWrokBlock1TopLeft = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle("work__block-show", entry.isIntersecting);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.19 },
);
for (const i of [...workBlock1TopLeft]) {
  observeWrokBlock1TopLeft.observe(i);
}

const workBlock1BottomLeft = document.querySelectorAll(
  ".work__block1-bottom-left",
);
const observeWrokBlock1BottomLeft = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle("work__block-show", entry.isIntersecting);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.19 },
);
for (const i of [...workBlock1BottomLeft]) {
  observeWrokBlock1BottomLeft.observe(i);
}

const workBlock2TopRight = document.querySelectorAll(".work__block2-top-right");
const workBlock2BottomRight = document.querySelectorAll(
  ".work__block2-bottom-right",
);

const observeWorkBlock2TopRight = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle("work__block-show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.19 },
);
for (const i of [...workBlock2TopRight, ...workBlock2BottomRight]) {
  observeWorkBlock2TopRight.observe(i);
}

// создание логики отправки сообщений в TG

const inputFormWrap = document.querySelector(".inputFormWrap");
const inputInputName = document.querySelector(".inputInputName");
const inputInputPhoneNumber = document.querySelector(".inputInputPhoneNumber");
const inputInputText = document.querySelector(".inputInputText");

const TOKET = "8877226350:AAGKRXXYOXAsJvzhGvv83PYIxEsKmFF5MvU";
const chatID = "2108828070";
inputFormWrap.addEventListener("submit", async function (e) {
  const name = inputInputName.value;
  const phone = inputInputPhoneNumber.value;
  const message = inputInputText.value;
  const url = `https://telegram.org{8877226350:AAGKRXXYOXAsJvzhGvv83PYIxEsKmFF5MvU}/sendMessage`;
});
