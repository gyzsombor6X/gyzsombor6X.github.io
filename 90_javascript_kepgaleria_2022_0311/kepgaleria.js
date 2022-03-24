var kepek=new 
Array
("banki_to1.jpg","banki_to2.jpg","banki_to3.jpg","banki_to4.jpg","banki_to5.jpg","banki_to6.jpg","pecsi_to1.jpg","pecsi_to2.jpg",
"pecsi_to3.jpg","pecsi_to4.jpg","pecsi_to5.jpg","pecsi_to6.jpg","vadasa_to1.jpg","vadasa_to2.jpg","vadasa_to3.jpg","vadasa_to4.jpg",
"vadasa_to5.jpg","vadasa_to6.jpg","tisza_to1.jpg","tisza_to2.jpg","tisza_to3.jpg","tisza_to4.jpg","tisza_to5.jpg","tisza_to6.jpg");

var db=kepek.length-1;
var kesleltetes=2000;
akt=0;

function kiskep()
{
    var sz="";
    sz+='<img class="kiskepek" src="kepek/'+(akt-1<0?kepek[db]:kepek[akt-1])+'" alt="Arasaka" title="Arasaka">';
    sz+='<img class="kiskepek" src="kepek/'+kepek[akt]+'" alt="Arasaka" title="Arasaka">';
    sz+='<img class="kiskepek" src="kepek/'+(akt+1>db?kepek[0]:kepek[akt+1])+'" alt="Arasaka" title="Arasaka">';
    document.getElementById("kiskepek").innerHTML=sz;
}

function kovetkezo()
{
    akt++;
    if (akt>db) akt=0;
    kiskep();
    document.kep.src="kepek/"+kepek[akt];
}

function elozo()
{
    akt--;
    if (akt<0) akt=db;
    kiskep();
    document.kep.src="kepek/"+kepek[akt];
}

function utolso()
{
    akt=db;
    kiskep();
    document.kep.src="kepek/"+kepek[akt];
}

function elso()
{
    akt=0;
    kiskep();
    document.kep.src="kepek/"+kepek[akt];
}

function vetit()
{
    if (document.getElementById("vetitgomb").value=="Stop") document.getElementById("vetitgomb").value="Start";
    else document.getElementById("vetitgomb").value="Stop";

    vetites();
}

function vetites()
{
    if (document.getElementById("vetitgomb").value=="Stop")
    {
        akt++;
        if (akt>db) akt=0;
        kiskep();
        document.kep.src="kepek/"+kepek[akt];
        window.setTimeout("vetites()",kesleltetes);
    }
}