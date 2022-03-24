function szamitas(db)
{
    console.error("*** Program kezdete ***");
    darabok.innerHTML="";
    for (i=0;i<db;i++)
    {
        darabok.innerHTML+="<img src='cigi.jpg' alt='Arasaka' title='Arasaka'>";
    }
    darabok.innerHTML+="<br>"+db+" darab"
    var dobozdb=Number(document.getElementById("dobozdb").value);
    var dobozar=Number(document.getElementById("dobozar").value);
    document.getElementById("havikoltseg").value=db/dobozdb*dobozar*30;
    document.getElementById("evikoltseg").value=db/dobozdb*dobozar*30*12;
    console.error("*** Program vége ***");
}