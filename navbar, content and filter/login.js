let buyer = document.querySelector(".login_buyer");
let seller = document.querySelector(".login_seller")

seller.addEventListener("click", ev =>{

    buyer.style.background = "none";
    buyer.childNodes[0].style.color = "black";
    buyer.childNodes[0].style.fontWeight = "normal";

    seller.style.background = "linear-gradient(-45deg, #F34498, #9B57A5)";
    seller.childNodes[0].style.color = "white";
    seller.childNodes[0].style.fontWeight = "bold";
})
buyer.addEventListener("click", ev =>{

    seller.style.background = "none";
    seller.childNodes[0].style.color = "black";
    seller.childNodes[0].style.fontWeight = "normal";

    buyer.style.background = "linear-gradient(-45deg, #F34498, #9B57A5)";
    buyer.childNodes[0].style.color = "white";
    buyer.childNodes[0].style.fontWeight = "bold";
})
