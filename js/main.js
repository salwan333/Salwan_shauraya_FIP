function hamburger(){
    let navBar = document.getElementById("navBar")
    let mainSection = document.getElementById("main");

    if (navBar.className === "navigation") {
        navBar.className = "showHide";
        mainSection.className = "mainMargin"
    } else {
        navBar.className = "navigation";
        mainSection.className = ""
    }


    
}

let imageNumber = 1;
showProduct(imageNumber);

function nextImg(n) {
    showProduct(imageNumber += n);
}

function currentSlide(n) {
    showProduct(imageNumber = n);
}
function showProduct(n) {
    let i;
    let products = document.getElementsByClassName("ourProduct");
    if (n > products.length) {
        imageNumber = 1
    }    
    if (n < 1) {
        imageNumber = products.length
    }
    for (i = 0; i < products.length; i++) {
        products[i].style.display = "none";  
    }
    products[imageNumber-1].style.display = "block";  
}