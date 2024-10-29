
window.addEventListener("scroll", changeColor, false);

function changeColor()
{            
    const nav = document.querySelector(".navbar");
    const name = nav.querySelector("#name");        

    if(this.scrollY > 150)
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

function scrollTo(element)
{
    element.scrollIntoView({ behavior: "smooth"});
}