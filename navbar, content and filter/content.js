function loadPage(href)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return(xmlhttp.responseText);
}
function buildProduct(image,description,price){
    price=price||"Rs.0";
    description=description||"Image";
    let template=loadPage("productTemplate.html");
    let index=0;
    template=template.replace("{}",description);
    template=template.replace("{}",image);
    template=template.replace("{}",price);
    document.getElementById("products").innerHTML+=template;
}
function populateProducts(images,descriptions,prices){
    for(let i=0;i<images.length;i++){
        buildProduct(images[i],descriptions[i],prices[i])
    }
}
function reInitializeProducts(images,descriptions,prices){
    document.getElementById("products").innerHTML='';
    for(let i=0;i<images.length;i++){
        buildProduct(images[i],descriptions[i],prices[i])
    }
}
document.getElementById("contentAndFilter").innerHTML+=`
    <div class="contentArea col-sm-12" id="products">
    </div>
    <div class="pop_up">
        <div class="img_box">
            <img src="" alt="/" class="full_img">
            <i class="fas fa-times" id="cross"></i>
            <i class="fas fa-phone"></i>
            <i class="fas fa-cart-plus"></i>
            <button type="button" class="btn btn-primary buy_now">Buy Now</button>
        </div>
    </div>
`;
    let productDescription=["Beach Image","Vacation Photo","Pool Pic","Random Click","Shore Photo","Ocean Beauty","Food Cravings"];
    let productPrice=["Rs. 200","Rs.150","Rs.300","Rs.50","Rs.100","Rs.150","Rs.75"];
    let productImage=["1.0.png","2.0.png","3.0.png","4.0.png","5.0.png","6.0.png","7.0.jpg","8.0.jpg","9.0.jpg","10.0.jpg","11.0.jpg","12.0.jpg","13.0.png","14.0.jpg","15.0.png","16.0.png","17.0.jpg","18.0.jpg","19.0.png"];
    populateProducts(productImage,productDescription,productPrice);