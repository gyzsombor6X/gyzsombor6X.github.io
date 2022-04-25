var tomb;

fetch("https://api.nobelprize.org/v1/prize.json")
.then(x => x.json())
.then(y => megjelenit(y));


function megjelenit(adatok){
    console.log(adatok)
    tomb=adatok;
    var sz='';
    var sorszam=0;
    for (var elem of adatok.prizes){
        sz+='<div class="col-sm-3">'
        sz+='<div class="doboz" id="'+sorszam+'" onclick="kattintas(this.id)" data-bs-toggle="modal" data-bs-target="#myModal"    >'
        sz+='<p>'+elem.year+'</p>'
        sz+='<p>'+elem.category+'</p>'
        sz+='</div>'
        sz+='</div>'
        sorszam++;
    }
    document.querySelector("#nobeldiv").innerHTML=sz;


}

//dobozon kattintásra modálisban hozza ki csak azt a Nobel-díjast(év, típus)(név)

function kattintas(sorszam){
    var sz='';
    //sz+=sorszam;
    sz+=tomb.prizes[sorszam].year+" "+tomb.prizes[sorszam].category;
    document.getElementById("modalisfej").innerHTML=sz;

    var sz2='';
    for (var elem of tomb.prizes[sorszam].laureates){
        sz2+='<p>'
        sz2+=elem.firstname
        sz2+='</p>'

        if (typeof elem.surname==='undefined')
        {
        }
        else{
        sz2+='<p>';
        sz2+=elem.surname;
        sz2+='</p>';
        }
        sz2+='<p>';
        sz2+=elem.motivation;
        sz2+='</p>';
        
    }
    document.getElementById("modalistorzs").innerHTML=sz2;
    


}


function keres(){
    var keresszo=document.getElementById("szoveg").value ;
    console.log(keresszo);


    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y => {
        console.log(y)
        var sorszam=0;
        var sz='';
        for (elem of y.prizes){
            //console.log(sorszam)
            sorszam++;
            if (typeof elem.laureates==='undefined'){

            }
            else
            for (szemely of elem.laureates){
                if (typeof szemely.surname==='undefined'){

                }
                else
                if (szemely.firstname.toUpperCase().includes(keresszo.toUpperCase()) ||  szemely.surname.toUpperCase().includes(keresszo.toUpperCase())   ){
                    console.log(szemely.firstname+' '+szemely.surname);
                    sz+='<div class="talalatok" onclick="kattintas(this.id)" data-bs-toggle="modal" data-bs-target="#myModal">'
                    sz+='<br>'
                    sz+=elem.year+ ' ' +szemely.firstname+' '+szemely.surname
                    sz+='<br>'
                    sz+='</div>'
                }
            }
        }
        document.getElementById("kiiras").innerHTML=sz;

    });
    


}


function kattintas2(sorszam){
    var sz='';
    //sz+=sorszam;
    sz+=tomb.prizes[sorszam].year+" "+tomb.prizes[sorszam].category;
    document.getElementById("modalisfej").innerHTML=sz;

    var sz2='';
    for (var elem of tomb.prizes[sorszam].laureates){
        sz2+='<p>'
        sz2+=elem.firstname
        sz2+='</p>'

        if (typeof elem.surname==='undefined')
        {
        }
        else{
        sz2+='<p>';
        sz2+=elem.surname;
        sz2+='</p>';
        }
        sz2+='<p>';
        sz2+=elem.motivation;
        sz2+='</p>';
        
    }
    document.getElementById("modalistorzs").innerHTML=sz2;
    


}