document.getElementById("contentAndFilter").innerHTML+=`
    <div class="pop_up">
        <div class="img_box">
            <img src="" alt="/" class="full_img">
            <i class="clickable fas fa-times" id="cross"></i>
            <i class="clickable fas fa-phone"></i>
            <i class="clickable fas fa-cart-plus"></i>
            <button type="button" class="btn btn-primary buy_now">Buy Now</button>
        </div>
    </div>
`;

let pop = document.getElementsByClassName("pop_up")[0];
let img_box = document.getElementsByClassName("img_box")[0];
let imgg = document.getElementsByClassName("full_img")[0];

document.querySelectorAll(".product").forEach(item => 
{
    item.addEventListener('click', event => 
    {
        targets = event.target.parentNode.childNodes;
        for(let i = 0; i < targets.length; i++)
            if(targets[i].tagName == "IMG")
                imgg.src = targets[i].src;

        pop.style.background = "rgba(0, 0, 0, 0.8)";
        pop.style.position = "fixed";
        pop.style.top = 0;
        pop.style.left = 0;
        pop.style.width = "100%";
        pop.style.height = "100%";
        pop.style.display = "block";

        img_box.style.position = "absolute";
        img_box.style.height = "70%";
        img_box.style.width = "auto";
        img_box.style.top = "50%";
        img_box.style.left = "50%";
        img_box.style.transform = "translate(-50%, -50%)";
        img_box.style.display = "block";

        imgg.style.position = "realative";
        imgg.style.height = "70%";
        imgg.style.width = "auto";
        imgg.style.top = "50%";
        imgg.style.left = "50%";
        imgg.style.transform = "translate(-50%, -50%)";
        imgg.style.display = "block";
    })
})
document.getElementById("cross").addEventListener('click', ev =>
{
    imgg.src = "";
    imgg.style.display = "none";
    pop.style.display = "none";
})