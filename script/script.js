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
    //Start of image swap - responsive
    if (window.innerWidth < 989)
    {
        var i = 0;
        for (img = 6; img < 12; img++)
        {
            var image = document.getElementsByClassName("carousel__slide")[i];
            image.src = "assets/" + img + "-m.jpg";
            i++;
        }
        var i = 0;
        for (let flag = 3; flag < 6; flag++)
        {
            var image = document.getElementsByClassName("destinations__flags")[i];
            image.src = "assets/" + flag + "-m.jpg";
            i++;
        }
    }
    if (window.innerWidth < 798)
    {
        var i = 0;
        for (img = 6; img < 12; img++)
        {
            var image = document.getElementsByClassName("carousel__slide")[i];
            image.src = "assets/" + img + "-s.jpg";
            i++;
        }
        var i = 0;
        for (flag = 3; flag < 6; flag++)
        {
            var image = document.getElementsByClassName("destinations__flags")[i];
            image.src = "assets/" + flag + "-s.jpg";
            i++;
        }
    }
    //End of image swap - responsive
    //Start of carousel
    var i = 0;
    var maxslides = document.getElementsByClassName("carousel__slide").length;
    var height = document.getElementsByClassName("carousel__slide")[0].style.height;
    indicators(i);
    document.getElementsByClassName("chevroncarousel chevroncarouselleft")[0].onclick = function ()
    {
        if (i == 0)
        {
            for (i = 0; i < 5; i++)
            {
                document.getElementsByClassName("carousel__slide")[i].style.height = 0;
            }
            i = 5;
            indicators(i);
        }
        else
        {
            document.getElementsByClassName("carousel__slide")[i-1].style.height = height;
            i--;
            indicators(i);
        }
    }
    document.getElementsByClassName("chevroncarousel chevroncarouselright")[0].onclick = function ()
    {
        if (i > 4)
        {
            for (i = 0; i < 5; i++)
            {
                document.getElementsByClassName("carousel__slide")[i].style.height = height;
            }
            i = 0;
            indicators(i);
        }
        else
        {
            document.getElementsByClassName("carousel__slide")[i].style.height = 0;
            i++;
            indicators(i);
        }
    }
    function indicators(i)
    {
        switch (i)
        {
            case 0:
            document.getElementsByClassName("carouselsection__indicators-6")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-2")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-1")[0].style.backgroundPosition = "0 -60px";
            break;
            case 1:
            document.getElementsByClassName("carouselsection__indicators-1")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-3")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-2")[0].style.backgroundPosition = "0 -60px";
            break;
            case 2:
            document.getElementsByClassName("carouselsection__indicators-2")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-4")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-3")[0].style.backgroundPosition = "0 -60px";
            break;
            case 3:
            document.getElementsByClassName("carouselsection__indicators-3")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-5")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-4")[0].style.backgroundPosition = "0 -60px";
            break;
            case 4:
            document.getElementsByClassName("carouselsection__indicators-4")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-6")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-5")[0].style.backgroundPosition = "0 -60px";
            break;
            case 5:
            document.getElementsByClassName("carouselsection__indicators-5")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-1")[0].style.backgroundPosition = "0 0";
            document.getElementsByClassName("carouselsection__indicators-6")[0].style.backgroundPosition = "0 -60px";
            break;
        }
    }
    //End of carousel
}
