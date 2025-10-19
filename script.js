
const btnShowmodal = document.querySelectorAll(".btn--show-modal");
const btnClosemodal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const scrollbtn = document.querySelector(" .btn--scroll-to");
const blurimg = document.querySelectorAll(".lazy-img");
const toTop = document.querySelector(".totop");
const navLinks = document.querySelector(".nav__links");
const tabs = document.querySelector(".operations__tab-container");
const opTab = document.querySelectorAll(".operations__tab ");
const opContent = document.querySelectorAll(".operations__content ");
const nav = document.querySelector(".nav");
const section1 = document.querySelector("#section--1");




function showModal(e)
{
    e.preventDefault();

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnShowmodal.forEach(btn => btn.addEventListener("click", showModal));

btnClosemodal.addEventListener("click", closeModal);


scrollbtn.addEventListener("click", function()
{ 
    const section1 = document.querySelector("#section--1");

    section1.scrollIntoView({behavior : "smooth"});
});


blurimg.forEach(img => img.addEventListener("mouseover", function(e)
{

    e.currentTarget.style.filter = "blur(0px)";
    const i = e.currentTarget.getAttribute("data-src");
    e.currentTarget.src = i;

}));


toTop.addEventListener("click", function()
{
    const header = document.querySelector(".header");

    header.scrollIntoView({behavior : "smooth"});
})


navLinks.addEventListener("click", function(e){

    e.preventDefault();

    const id = e.target.getAttribute("href");
   
    if(e.target.classList.contains("nav__link"))
    {
        document.querySelector(id).scrollIntoView({behavior : "smooth"});
    }

});


tabs.addEventListener("click", function(e){

    const clicked = e.target.closest(".operations__tab");

    if(!clicked) return ;

    opTab.forEach(tab => tab.classList.remove("operations__tab--active"));

    clicked.classList.add("operations__tab--active");

    opContent.forEach(con => con.classList.remove("operations__content--active"));

    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
 
})

function overOp(e)
{
     if(e.target.classList.contains("nav__link")) 
    {
        const link =e.target;

        const sibling = link.closest(".nav").querySelectorAll('.nav__link');

        const logo =link.closest(".nav").querySelector("img");
        
        sibling.forEach(el => {
            if(el !== link) el.style.opacity = this;

        });

        logo.style.opacity = this;
    }

}

nav.addEventListener("mouseover", overOp.bind(0.5));
nav.addEventListener("mouseout", overOp.bind(1));

const initialscroll = section1.getBoundingClientRect();
console.log(initialscroll);

window.addEventListener("scroll", function(){

    if(this.window.scrollY > initialscroll.top)
        nav.classList.add("sticky");
    else 
        nav.classList.remove("sticky");
});

const allsections = document.querySelectorAll(".section");

function revealSection(enteries, observer)
{
    enteries.forEach(entry => {

    if(!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");

    observer.unobserve(entry.target);

    })
   
}

const obs = new IntersectionObserver(revealSection, {root: null, threshold: 0.15,});

allsections.forEach(function(section){

    obs.observe(section);
    section.classList.add("section--hidden");
});

const slide = document.querySelectorAll(".slide");

let currentSlide = 0;
let maxLen = slide.length;

function goToSlides(slides)
{
    slide.forEach((s, i ) => {
        s.style.transform = `translateX(${100 * (i - slides)}%)`;
    });
};
goToSlides(0);

function nextSlide()
{
    if(currentSlide === maxLen - 1)
    {
        currentSlide = 0;
    }
    else
    {
        currentSlide++;
    }

    goToSlides(currentSlide);
}

function preSlide()
{
    if(currentSlide === 0)
    {
        currentSlide = maxLen - 1;
    }
    else
    {
      currentSlide--;
    }

    goToSlides(currentSlide);
}

const nextBtn = document.querySelector(" .slider__btn--right");
const preBtn = document.querySelector(".slider__btn--left");

nextBtn.addEventListener("click", nextSlide);
preBtn.addEventListener("click", preSlide);