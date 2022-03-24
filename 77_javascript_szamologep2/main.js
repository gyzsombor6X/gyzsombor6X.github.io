var X=0;
var Y=0;
var Z=0;
var muv=0;
var muvelet=0;
var vesszojel=0;
function beszamjegy(szam)
{
    if (document.getElementById("kijelzo").value=="0")
    document.getElementById("kijelzo").value=szam;
    else
    document.getElementById("kijelzo").value+=szam;
    document.getElementById("ERROR").innerHTML="";
}
function vesszo()
{
    if (vesszojel==0)
        if(Math.round(Number(document.getElementById("kijelzo").value))==Number(document.getElementById("kijelzo").value))
        {
            document.getElementById("kijelzo").value+=".";
            vesszojel=1;
        }
    document.getElementById("ERROR").innerHTML="";
}
function muveletvegzes(m)
{
    switch(m)
    {
        case 1: X=Number(document.getElementById("kijelzo").value);muvelet=1;muv=1;vesszojel=0;break;
        case 2: X=Number(document.getElementById("kijelzo").value);muvelet=2;muv=1;vesszojel=0;break;
        case 3: X=Number(document.getElementById("kijelzo").value);muvelet=3;muv=1;vesszojel=0;break;
        case 4: X=Number(document.getElementById("kijelzo").value);muvelet=4;muv=1;vesszojel=0;break;
    }
    document.getElementById("kijelzo").value="0";
    document.getElementById("ERROR").innerHTML="";
}
function szamol()
{
    document.getElementById("ERROR").innerHTML="";
    if (muv==1)
    {
        Y=Number(document.getElementById("kijelzo").value);
        switch(muvelet)
        {
            case 1:Z=X+Y;break;
            case 2:Z=X-Y;break;
            case 3:Z=X*Y;break;
            case 4:
                if (Y==0)
                {
                    document.getElementById("ERROR").innerHTML="Nullával nem lehet osztani.";
                    document.getElementById("kijelzo").value="ERROR";
                }
                else Z=X/Y;
            break;
        }
        if (muvelet==4 && Y==0)
        {
            document.getElementById("kijelzo").value="ERROR";
        }
        else document.getElementById("kijelzo").value=Z.toString();
    }
}
function torles()
{
    document.getElementById("kijelzo").value="0";
    muv=0;
    muvelet=0;
    vesszojel=0;
    document.getElementById("ERROR").innerHTML="";
}
function elojelvalto()
{
    d=Number(document.getElementById("kijelzo").value);
    d=d*(-1);
    document.getElementById("kijelzo").value=d.toString();
    document.getElementById("ERROR").innerHTML="";
}
function perx()
{
    d=Number(document.getElementById("kijelzo").value);
    if (d!=0)
    {
        d=1/d;
        document.getElementById("kijelzo").value=d.toString();
        document.getElementById("ERROR").innerHTML="";
    }
    else document.getElementById("ERROR").innerHTML="Nullával nem lehet osztani.";
}
function X2()
{
    d=Number(document.getElementById("kijelzo").value);
    d=d*d;
    document.getElementById("kijelzo").value=d.toString();
    document.getElementById("ERROR").innerHTML="";
}
function sqrt()
{
    d=Number(document.getElementById("kijelzo").value);
    if (d>=0)
    {
        d=Math.sqrt(d);
        document.getElementById("kijelzo").value=d.toString();
        document.getElementById("ERROR").innerHTML="";
    }
    else
    {
        document.getElementById("ERROR").innerHTML="Negatív számmal nem lehet gyököt vonni.";
        document.getElementById("kijelzo").value="ERROR";
    }
}
function sin()
{
    d=Number(document.getElementById("kijelzo").value);
    d=Math.sin(d*Math.PI/180);
    document.getElementById("kijelzo").value=d.toFixed(5).toString();
    document.getElementById("ERROR").innerHTML="";
}
function cos()
{
    d=Number(document.getElementById("kijelzo").value);
    d=Math.cos(d*Math.PI/180);
    document.getElementById("kijelzo").value=d.toFixed(5).toString();
    document.getElementById("ERROR").innerHTML="";
}
function tan()
{
    d=Number(document.getElementById("kijelzo").value);
    e=Math.cos(d*Math.PI/180);
    if (Math.round(e.toFixed(5))==0)
    {
        document.getElementById("ERROR").innerHTML="Érvénytelen adat.";
        document.getElementById("kijelzo").value="ERROR";
    }
    else
    {
        d=Math.tan(d*Math.PI/180);
        document.getElementById("kijelzo").value=d.toFixed(5).toString();
        document.getElementById("ERROR").innerHTML="";
    }
    
}
function pi()
{
    document.getElementById("kijelzo").value=Math.PI;
}