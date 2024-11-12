
window.addEventListener("scroll", shrinkNav, false);

function shrinkNav()
{            
    const nav = document.querySelector(".navbar");
    const name = nav.querySelector("#name");    
    
    const navHeader = document.querySelector("#navHeader");
    const links = navHeader.querySelector("#mobileLinks");

    const visible = links.classList.contains("mobileLinks");

    if(window.scrollY > 150 || visible)
    {
        nav.classList.add("navShrink");
        name.classList.add("titleShrink");
        name.classList.remove("title");
    }
    else
    {
        nav.classList.remove("navShrink");
        name.classList.remove("titleShrink")
        name.classList.add("title");
    }
}

function showNav()
{
    const nav = document.querySelector(".navbar");
    const name = nav.querySelector("#name");      

    nav.classList.add("navShrink");
    name.classList.add("titleShrink");
    name.classList.remove("title");   
}

function scrollTo(element)
{
    element.scrollIntoView({ behavior: "smooth"});
}

export function hamburgerMenu()
{

    const nav = document.querySelector("#navHeader");
    const links = nav.querySelector("#mobileLinks");

    if(links.classList.contains("mobileLinks"))
    {
        links.classList.add("mobileLinksHidden");
        links.classList.remove("mobileLinks");
    }
    else
    {
        links.classList.add("mobileLinks");
        links.classList.remove("mobileLinksHidden");
    }

    shrinkNav();
}