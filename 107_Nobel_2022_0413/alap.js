var tomb;

fetch("https://api.nobelprize.org/v1/prize.json")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(adatok)
{
    console.log(adatok);
    tomb=adatok;
    var sz='';
    var sorszam=0;
    for (var elem of adatok.prizes)
    {
        sz+='<div class="col-sm-3">';
        sz+='<div class="nobel_dijak" id="'+sorszam+'" onclick="kattintas(this.id)" data-bs-toggle="modal" data-bs-target="#myModal"    >';
        sz+='<p>'+elem.year+'</p>';
        sz+='<p>'+elem.category+'</p>';
        sz+='</div>';
        sz+='</div>';
        sorszam++;
    }
    document.querySelector("#nobeldiv").innerHTML=sz


    function kattintas(sorszam)
    {
        var sz='';
        //sz+=sorszam;
        sz+=tomb.prizes[sorszam].year+"<br>"+tomb.prizes[sorszam].category
        document.getElementById("modalisfej").innerHTML=sz
    }    
}