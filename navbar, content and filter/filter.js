document.getElementById("contentAndFilter").innerHTML+=`
    <div class="filterArea col-sm-12">
        <div class="onCollapse d-flex justify-content-end">
            <button type="button" class="btn btn-dark" value="filter" onclick="showMenu();">Filters</button>
        </div>
        <div id="filter" class="collapsable d-none">
        </div>
    </div>
`;

function buildFilters(titles,valuesArray,textsArray){
    for(i=0;i<titles.length;i++){
        buildFilter(titles[i],valuesArray[i],textsArray[i]);
    }
    document.getElementById("filter").style.columnCount=titles.length;
}

function buildFilter(title,values,texts){
    let checkboxes='';
    for(j=0;j<values.length;j++){
        checkboxes+=getCheckBox(values[j],texts[j]);
    }
    document.getElementById("filter").innerHTML+=`<div class="singleFilter"><h5>${title}</h5>${checkboxes}</div>`;
}

function getCheckBox(value,text){
    let template=loadPage("filterTemplate.html");
    template=template.replace("{}",text);
    template=template.replace("{}",value);
    template=template.replace("{}",text.toUpperCase());
    return template;
    
}

function loadPage(href)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return(xmlhttp.responseText);
}

function showMenu(){
    let filter=document.getElementById("filter");
    filter.classList.toggle("d-none");
}

let titles=["Orientation","Color","Size"];
let valuesArray=[["Landscape","Portrait","Square"],["Red","Blue","Black","White"],["Large","Medium","Small"]];
let textsArray=[["Landscape","Portrait","Square"],["Red","Blue","Black","White"],["Large","Medium","Small"]];

buildFilters(titles,valuesArray,textsArray);