const hero = document.querySelector("#hero");
const tiles = document.querySelectorAll(".fancy-tile, .wide-fancy-tile");
const hackerMen = document.querySelectorAll("h1, h2, h3, h4, p, .hacker-man");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const blobs = document.querySelectorAll("#blob, #blob-top");

let options = {
  rootMargin: "3000px 0px 100px 0px",
  threshold: 0,
};

let options2 = {
    rootMargin: "5000px 0px -65px 0px",
    threshold: 0,
};

function hackerMan(event){
  let interval = null;
  let iteration = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.text[index];
        } 
        if (letter == " ") return " ";
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.text.length){ 
      clearInterval(interval);
    }
    
    iteration += event.target.dataset.text.length / 27;
  }, 30);
}

const hackerManObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) hackerMan(entry);
  })
  }
  , options2
);

hackerMen.forEach(element => {
  element.dataset.text = element.innerText;
  element.classList.add("hacker-man"); element.onmouseover = hackerMan;
})

var work_index = 0;
const works = ["a Full stack Developer","an Artist","a Full Stack Web Developer", "a Front End Webdeveloper","a Backend Webdeveloper",
              "a Musician","a Photo editor"];
hackerMen.forEach(element => hackerManObserver.observe(element));

const hackerNext = document.querySelector(".hacker-next");

if (hackerNext != null) {
setInterval(function (){
  let interval = null;
  let iteration = 0;
  clearInterval(interval);
  hackerNext.dataset.text = works[work_index];
  interval = setInterval(() => {
    hackerNext.innerText = hackerNext.dataset.text
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return hackerNext.dataset.text[index];
        } 
        if (letter == " ") return " ";
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= hackerNext.dataset.text.length){ 
      clearInterval(interval);
    }
    iteration += hackerNext.dataset.text.length / 27;
  }, 30);
  work_index += 1;
  if (work_index >= works.length) work_index = 0;
}, 5000);
};

document.body.onpointermove = event =>{
  const {clientX, clientY} = event;
  blobs.forEach(blob => blob.animate({
  left: `${clientX}px`,
  top: `${clientY}px`,
  }, {duration: 2500, fill: "forwards"})
  )
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
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
        768 : {
            loop: true,
            slidesPerView: 5,
            centeredSlides: false,
        },
        992 : {
            slidesPerView: 7,
            centeredSlides: false,
        }
    }
};

if (new Swiper != null){
const sswiper = new Swiper('.swiper', swiperOptions);
const vaswiper = new Swiper("#vas", swiperOptions);
const mswiper = new Swiper("#ms", swiperOptions);
const cswiper = new Swiper("#cs", swiperOptions);
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 5000);
};
