let images = Array.from(document.querySelectorAll(".slider img"));

console.log(images);
let numSlides = images.length;
let slidesbar = document.getElementById("sli");
let count = 1;
for (let i = 1; i <= numSlides; i++) {
  slidesbar.innerHTML += `<i id=${i} class="fa-solid fa-minus"></i>`;
}
let icons = Array.from(document.querySelectorAll("#sli i"));
for (let i = 0; i < icons.length; i++) {
  icons[i].onclick = function () {
    console.log(this.getAttribute("id"));
    count = this.getAttribute("id");
    Check();
  };
}
//prev Slide
let prev = document.getElementById("left");
//next Slider
let next = document.getElementById("right");
Check();
//when click prev buttond do this function
next.addEventListener("click", () => {
  if (next.classList.contains("disable")) {
    //donothing
  } else {
    count++;
    Check();
  }
});

//when click next buttond do this function
prev.addEventListener("click", () => {
  if (prev.classList.contains("disable")) {
    //Do nothing
  } else {
    count--;
    Check();
  }
});

function Check() {
  removesAllActives();
  images[count - 1].classList.add("active");
  slidesbar.children[count - 1].classList.add("use");
  //console.log(slidesbar.children);
  if (count == 1) {
    prev.classList.add("disable");
  } else if (count >= numSlides) {
    next.classList.add("disable");
  } else {
    prev.classList.remove("disable");
    next.classList.remove("disable");
  }
}

console.log(icons);
function removesAllActives() {
  images.forEach((item) => {
    item.classList.remove("active");
  });
  icons.forEach((item) => {
    item.classList.remove("use");
  });
}
