const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
		'X-RapidAPI-Key': '535e3fb534mshe2c70bf050a3b91p1b9821jsn593dd336e876'
	}
};

/*fetch('https://steam2.p.rapidapi.com/search/x/page/%7Bpage%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .then(response => megjelenit(response))
	.catch(err => console.error(err));*/

function kattintas()
{
    var be1=document.getElementById("be1").value;
    fetch('https://steam2.p.rapidapi.com/search/'+be1+'/page/%7Bpage%7D', options)
	    .then(response => response.json())
	    .then(response => console.log(response))
        .then(response => megjelenit(response))
	    .catch(err => console.error(err));
}

function megjelenit(response)
{
    console.log(adatok)
    var sz='';
    for (elem of adatok)
    {
        sz+='<tr id="sor">';
        sz+='<td id="nev">';
        sz+='<a href="'+elem.url+'">'+elem.title+'</a>';
        sz+='</td>';
        sz+='<td id="kep">';
        sz+='<img src="'+elem.imgUrl+'" alt="'+elem.title+'\n'+elem.imgUrl+'\nO1G" title="'+elem.title+'\n'+elem.imgUrl+'\nO1G" style="height: 120px;">';
        sz+='</td>';
        sz+='</tr>';
    }
    document.getElementById("tablazat").innerHTML=sz;
}