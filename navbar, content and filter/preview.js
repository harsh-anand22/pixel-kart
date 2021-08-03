document.getElementById("contentAndFilter").innerHTML+=`
    <div id="pop_up" class="d-none justify-content-center align-items-center">
        <div id="img_box" class="">
            <img src="" alt="/" id="full_img">
            <i class="clickable position-absolute fas fa-times" id="cross"></i>
            <div id="preview-controls" class="d-flex align-items-center position-absolute">
                <button type="button" class="btn btn-success phone mx-2">Contact Seller</button>
                <button type="button" class="btn btn-success kart mx-2" value="Add To Cart">Add To Cart</button>
                <button type="button" class="btn btn-success buy_now">Buy Now</button>
            </div>
        </div>
    </div>
`;

let pop = document.getElementById("pop_up");
let img_box = document.getElementById("img_box");
let imgg = document.getElementById("full_img");
let prod = document.getElementsByClassName("contentArea")[0];

document.querySelectorAll(".product").forEach(item => 
{
    item.addEventListener('click', event => 
    {
        targets = event.target.parentNode.childNodes;
        for(let i = 0; i < targets.length; i++)
            if(targets[i].tagName == "IMG")
                imgg.src = targets[i].src;
        pop.classList.remove("d-none");
        pop.style.background = "rgba(0, 0, 0, 0.8)";
        pop.style.position = "fixed";
        pop.style.top = 0;
        pop.style.left = 0;
        pop.style.width = "100%";
        pop.style.height = "100%";
        pop.style.display = "flex";

        img_box.style.position = "absolute";
        img_box.style.display = "block";
        img_box.style.overflow="hidden";

        imgg.style.position = "realative";
        imgg.style.maxWidth="50vw";
        imgg.style.minWidth="360px";
        imgg.style.maxHeight="80vh"
        imgg.style.display = "block";

        prod.style.pointerEvents = "none";
    })
})
document.getElementById("cross").addEventListener('click', ev =>
{
    pop.style.display = "none";
    prod.style.pointerEvents = "all";
});

pop.addEventListener("click",(e)=>{
    if(e.target==pop){
        pop.style.display = "none";
        prod.style.pointerEvents = "all";
    }
})

imgg.addEventListener("mouseover",(e)=>{
    document.getElementById("preview-controls").style.bottom="0px";
})
imgg.addEventListener("mouseout",(e)=>{
    document.getElementById("preview-controls").style.bottom="";
})
document.getElementById("preview-controls").addEventListener("mouseover",(e)=>{
    document.getElementById("preview-controls").style.bottom="0px";
})
document.getElementById("preview-controls").addEventListener("mouseout",(e)=>{
    document.getElementById("preview-controls").style.bottom="";
})