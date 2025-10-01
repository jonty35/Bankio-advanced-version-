
const btnShowmodal = document.querySelectorAll(".btn--show-modal");
const btnClosemodal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const scrollbtn = document.querySelector(" .btn--scroll-to");
const blurimg = document.querySelectorAll(".lazy-img");




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

blurimg.forEach(img => img.addEventListener("mouseover", function(e){

    e.currentTarget.style.filter = "blur(0px)";

}));

const toTop = document.querySelector(".totop");

toTop.addEventListener("click", function(){
    const header = document.querySelector(".header");

    header.scrollIntoView({behavior : "smooth"});
})