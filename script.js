
const btnShowmodal = document.querySelectorAll(".btn--show-modal");
const btnClosemodal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const scrollbtn = document.querySelector(" .btn--scroll-to");
const blurimg = document.querySelectorAll(".lazy-img");
const toTop = document.querySelector(".totop");
const navLinks = document.querySelector(".nav__links");
const navLink = document.querySelector(".nav__link");
const tabs = document.querySelector(".operations__tab-container");
const opContent = document.querySelectorAll(".operations__content");
const opTab = document.querySelectorAll(".operations__tab");





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