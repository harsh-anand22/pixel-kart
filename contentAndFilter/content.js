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
    template=template.replace("{}",image);
    template=template.replace("{}",description);
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
    <div class="contentArea col-sm-12 col-md-9">
        <div class="row" id="products">
        </div>
    </div>
`;
    let productDescription=["Beach Image","Vacation Photo","Pool Pic","Random Click","Shore Photo","Ocean Beauty","Food Cravings"];
    let productPrice=["Rs. 200","Rs.150","Rs.300","Rs.50","Rs.100","Rs.150","Rs.75"];
    let productImage=["1.0.png","2.0.png","3.0.png","4.0.png","5.0.png","6.0.png","7.0.jpg"];
    populateProducts(productImage,productDescription,productPrice);