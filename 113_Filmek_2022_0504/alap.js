const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': '535e3fb534mshe2c70bf050a3b91p1b9821jsn593dd336e876'
	}
};

function kattintas()
{
    var be1=document.getElementById("be1").value;
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q='+be1, options)
	    .then(response => response.json())
	    .then(response => megjelenit(response))
	    .catch(err => console.error(err));
}

function megjelenit(adatok)
{
    console.log(adatok)
    var sz='';
    for (elem of adatok.d)
    {
        sz+='<tr id="sor">';
        sz+='<td id="nev">';
        sz+=elem.l
        sz+='</td>';
        sz+='<td id="kep">';
        sz+='<img src="'+elem.i.imageUrl+'" alt="'+elem.l+'\n'+elem.i.imageUrl+'\nO1G" title="'+elem.l+'\n'+elem.i.imageUrl+'\nO1G" style="height: 120px;">';
        sz+='</td>';
        sz+='</tr>';
    }
    document.getElementById("tablazat").innerHTML=sz;
}