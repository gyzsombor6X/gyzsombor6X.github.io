fetch("https://api.nobelprize.org/v1/prize.json")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(adatok)
{
    console.log(adatok);
    var sz="";
    for (var elem of adatok.prizes)
    {
        sz+='<div class="col-sm-3">';
        sz+='<div class="nobel_dijak" onclick="kattintas()" data-bs-toggle="modal" data-bs-target="#myModal">';
        sz+='<p class="nobel_ev">'+elem.year+'</p>';
        sz+='<p class="nobel_kategoria">'+elem.category+'</p>';
        sz+='</div></div>';
    }
    document.getElementById("nobeldiv").innerHTML=sz;

    function kattintas()
    {
        document.getElementById("modalistorzs").innerHTML="FIDESZ";
    }
}