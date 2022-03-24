var gomb = 0;
var db = 0;
var homerseklet = 0;
var fok_max = 0;
var fok_min = 0;
var fok_atlag = 0;
var fok_osszeg = 0;
var szam = 0;

function rogzites()
{
    document.getElementById("megadott").innerHTML+=bekeres.value+", ";
    gomb++;
    db++;
    if (db == 1) 
    {
        fok_max = fok_min=fok_osszeg = szam;
    }
    else
    {
        fok_osszeg += szam;
        if (szam > fok_max) fok_max = szam;
        if (szam < fok_min) fok_min = szam;
    }
    if (db == 7) 
    {
        document.getElementById("rogzites_gomb").style.visibility="hidden";
        document.getElementById("eredmenyek").innerHTML="Eredmények:"
        +"<br>Legnagyobb hőmérséklet: "+fok_max.toString()
        +"<br>Legkisebb hőmérséklet: "+fok_min.toString()
        +"<br>Átlag hőmérséklet: "+(fok_osszeg/db).toString();
    }
}

function restart()
{
    document.getElementById("megadott").innerHTML="Megadott hőmérsékletek: ";
    db = 0;
    document.getElementById("rogzites_gomb").style.visibility="visible";
    document.getElementById("eredmenyek").innerHTML="Eredmények:"
}