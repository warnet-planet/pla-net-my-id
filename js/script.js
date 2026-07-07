const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.querySelector(".site-header");

if (navToggle && mainNav) {

  const navIcon = navToggle.querySelector("i");

  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");

    if (mainNav.classList.contains("active")) {
      navIcon.classList.remove("fa-bars");
      navIcon.classList.add("fa-xmark");
      navToggle.setAttribute("aria-label", "Tutup Menu");
    } else {
      navIcon.classList.remove("fa-xmark");
      navIcon.classList.add("fa-bars");
      navToggle.setAttribute("aria-label", "Buka Menu");
    }
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");

      navIcon.classList.remove("fa-xmark");
      navIcon.classList.add("fa-bars");
      navToggle.setAttribute("aria-label", "Buka Menu");
    });
  });

}

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {
    siteHeader?.classList.add("scrolled");
  } else {
    siteHeader?.classList.remove("scrolled");
  }

  if (window.innerWidth <= 960) {

    const heroCard = document.querySelector(".showcase-card");

    if (heroCard) {
      const stopPoint = heroCard.getBoundingClientRect().bottom;

      if (stopPoint < 90) {
        siteHeader?.classList.add("mobile-hide");
        mainNav?.classList.remove("active");
      } else {
        siteHeader?.classList.remove("mobile-hide");
      }
    }

  }

});

/* PREMIUM REVEAL */

const revealItems = document.querySelectorAll(
`
.quick-card,
.panel,
.business-card,
.story-content,
.story-photo,
.contact-image,
.contact-card
`
);


revealItems.forEach((item,index)=>{


item.classList.add("reveal");


if(index % 3 === 0){

item.classList.add("reveal-left");

}

else if(index % 3 === 1){

item.classList.add("reveal-right");

}

else{

item.classList.add("reveal-up");

}


});



const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("active");

}


});


},

{
threshold:.30
}

);

revealItems.forEach(item=>{

observer.observe(item);

});
/* ======================================
   BASIC CONTENT PROTECTION
====================================== */

// disable klik kanan

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});


// disable drag gambar

document.addEventListener("dragstart", function(e) {
  e.preventDefault();
});
// disable shortcut inspect umum

document.addEventListener("keydown", function(e) {

  if (
    e.key === "F12" ||

    (e.ctrlKey && e.shiftKey && e.key === "I") ||

    (e.ctrlKey && e.shiftKey && e.key === "J") ||

    (e.ctrlKey && e.key === "U")
  ) {

    e.preventDefault();

  }

});