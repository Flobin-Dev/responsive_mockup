window.onload = function ()
{
    //Start of navbar
    var bookdropdown = document.getElementsByClassName("purple__nav-item purple__nav-item-dropdown-book")[0];
    var menubook = bookdropdown.children[1];
    var destdropdown = document.getElementsByClassName("purple__nav-item purple__nav-item-dropdown-destinations")[0];
    var menudest = destdropdown.children[1];
    bookdropdown.onclick = function()
    {
        if(menubook.classList.contains("nav__item-menuhide-book"))
        {
            menubook.classList.remove("nav__item-menuhide-book");
            menubook.classList.add("nav__item-menushow-book");
        }
        else
        {
            menubook.classList.remove("nav__item-menushow-book");
            menubook.classList.add("nav__item-menuhide-book");
        }
    }
    destdropdown.onclick = function()
    {
        if(menudest.classList.contains("nav__item-menuhide-destinations"))
        {
            menudest.classList.remove("nav__item-menuhide-destinations");
            menudest.classList.add("nav__item-menushow-destinations");
        }
        else
        {
            menudest.classList.remove("nav__item-menushow-destinations");
            menudest.classList.add("nav__item-menuhide-destinations");
        }
    }
    //End of navbar
    //Start of carousel
    document.getElementsByClassName("chevroncarousel chevroncarouselleft")[0].onclick = function ()
    {

    }
    document.getElementsByClassName("chevroncarousel chevroncarouselright")[0].onclick = function ()
    {

    }
    //End of carousel
}
