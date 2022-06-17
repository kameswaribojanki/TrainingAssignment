let hamburger=document.querySelector(".menu-icon");
let nav=document.querySelector(".menu-links");
hamburger.addEventListener("click",()=>{
    // nav.style.display = "block";
    if(nav.style.display == "block"){
        nav.style.display="none";
    }
    else{
        nav.style.display="block";
        // hamburger.style.paddingTop="0px";
        // hamburger.style.paddingRight="0px";
    }
})