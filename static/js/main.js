const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const blobs = document.querySelectorAll("#blob, #blob-top");
const works = ["a Full stack Developer", "an Artist", "a Full Stack Web Developer", "a Front End Webdeveloper", "a Backend Webdeveloper", "a Musician", "a Photo editor"];

const options = {
  root: document.querySelector("body"),
  rootMargin: "2000px 0px 2000px 0px",
  threshold: 0,
};

function hackerMan(target) {
  let interval = null;
  let iteration = 0;
  const par_len = target.dataset.text.length;
  clearInterval(interval);
  interval = setInterval(() => {
    target.innerText = target.dataset.text
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return target.dataset.text[index];
        }
        if (letter === " ") {
          return " ";
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= par_len) {
      clearInterval(interval);
    }

    iteration += par_len / 27;
  }, 30);
}

const hackerManObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) hackerMan(entry.target);
  });
}, options);

document.querySelectorAll(".hacker-observe").forEach(element => {
  element.dataset.text = element.innerText;
  hackerManObserver.observe(element);
});

const hackerNext = document.querySelector(".hacker-next");
let work_index = 0;

if (hackerNext !== null) {
  setInterval(() => {
    let interval = null;
    let iteration = 0;
    clearInterval(interval);
    hackerNext.dataset.text = works[work_index];
    interval = setInterval(() => {
      hackerNext.innerText = hackerNext.dataset.text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return hackerNext.dataset.text[index];
          }
          if (letter === " ") {
            return " ";
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= hackerNext.dataset.text.length) {
        clearInterval(interval);
      }
      iteration += hackerNext.dataset.text.length / 27;
    }, 30);
    work_index = (work_index + 1) % works.length;
  }, 5000);
}

document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  blobs.forEach(blob => {
    blob.style.left = `${clientX}px`;
    blob.style.top = `${clientY}px`;
  });
};

const swiperOptions = {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      loop: true,
      slidesPerView: 5,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 7,
      centeredSlides: false,
    }
  }
};

const sswiper = new Swiper('.swiper', swiperOptions);
const vaswiper = new Swiper("#vas", swiperOptions);
const mswiper = new Swiper("#ms", swiperOptions);
const cswiper = new Swiper("#cs", swiperOptions);

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.querySelectorAll("h1, h2, .hacker-observe").forEach(hackerMan);
  }, 2000);
};
