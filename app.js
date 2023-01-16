
// ========================================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mybutton = document.getElementById("myBtn");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// =================================


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        navbar.classList.add("sticky")
    } else {
        mybutton.style.display = "none";
        navbar.classList.remove("sticky");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ================counter 
const counters = document.querySelectorAll(".card span");
const container = document.querySelector(".card");

let activated = false;

window.addEventListener('scroll',()=>{
    if(pageYOffset > container.offsetTop - container.offsetHeight +500
        && activated === false){
            counters.forEach(counter => {
                counter.innerText = 0;
                let count = 0;


                function updateCount() {
                    const target = parseInt(counter.dataset.count);

                    if(count<target){
                        count++;
                        counter.innerText = count;

                        setTimeout(updateCount,0.1);
                    } else{
                        counter.innerText = target;
                    }
                }
                updateCount();
                activated = true;
            });
        } else if(pageYOffset < container.offsetTop - container.offsetHeight-500
            || pageYOffset === 0 && activated === true){
               counters.forEach(counter =>{
                    counter.innerText = 0;
                });
            activated = false;
        }

    });


let show = document.querySelector('.imgs');
show.style.display = 'none';

let img = document.querySelectorAll(".clickimg");
    for(let loop = 0; loop <img.length; loop ++){

    img[loop].addEventListener('click',function(){
    if(show.style.display == 'none'){
    show.style.display = 'block';
    }
    let change = document.querySelector('.imgs img');
    let rightbtn = document.querySelector('.imgs .right');
    rightbtn.addEventListener('click',()=>{

       let list = Math.floor(Math.random()*6) + 1;
        change.src = './img/a-'+list+'.jpg';
    });
    var index = 1;
    let leftbtn = document.querySelector('.imgs .left');
    leftbtn.addEventListener('click',()=>{
        index = 2;
       let list = Math.floor(Math.random()*6) + 1;
        change.src = './img/a-'+index+'.jpg';
    });
    
    let cross = document.querySelector(".cross");
    cross.addEventListener('click',function(){
        if(show.style.display == 'block'){
            show.style.display = 'none';
            }
    })
})}