const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')
const profile =document.querySelector('.ProfilePic')


document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
    
    profile.style.marginBottom = value  + 'px';

})

let cards = document.querySelectorAll(".card");
let stackArea = document.querySelector(".stack-area");

function rotateCards() {
  let angle = 0;
  cards.forEach((card) => {
    if (card.classList.contains("active")) {
      card.style.transform = `translate(-50%, -130vh) rotate(-48deg)`;
    } else {
      card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      angle = angle - 10;
    }
  });
}

rotateCards();

window.addEventListener("scroll", () => {
  let proportion =
    stackArea.getBoundingClientRect().top / window.innerHeight;
  if (proportion <= 0) {
    let n = cards.length;
    let index = Math.ceil((proportion * n) / 2);
    index = Math.abs(index) - 1;
    for (let i = 0; i < n; i++) {
      if (i <= index) {
        cards[i].classList.add("active");
      } else {
        cards[i].classList.remove("active");
      }
    }
    rotateCards();
  }
});

//Code for responsiveness

function adjust() {
  let windowWidth = window.innerWidth;
  let left = document.querySelector(".left");
  left.remove();
  if (windowWidth < 800) {
    stackArea.insertAdjacentElement("beforebegin", left);
  } else {
    stackArea.insertAdjacentElement("afterbegin", left);
  }
}
adjust();

//detect Resize

window.addEventListener("resize", adjust);

const inputs= document.querySelectorAll(".input");

function focusFunc(){
 let parent = this.parentNode;
 parent.classList.add("focus");
} 
function blurFunc(){
  let parent = this.parentNode;
  if(this.value==""){
    parent.classList.remove("focus");
  }
 } 
inputs.forEach(input =>{
  input.addEventListener("focus".focusFunc)
})
inputs.forEach(input =>{
  input.addEventListener("focus".blurFunc)
})

// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });
const harmbuger = document.querySelector('.harm-burger');
const navmenu = document.querySelector('.navmenu');

harmbuger.addEventListener("click",()=>
{
  harmbuger.classList.toggle("active");
  navmenu.classList.toggle("active");
})

function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}

document.getElementById('downloadButton').addEventListener('click', function() {
  const url = 'c:\Users\sysin\Downloads\CV (2).pdf'; // Replace with the URL to your CV file
  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV.pdf'; // This is the name with which the file will be downloaded
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// pop up image

// Function to open the popup with the image
function openPopup(imageSrc) {
  document.getElementById('popupImage').src = imageSrc;
  document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}