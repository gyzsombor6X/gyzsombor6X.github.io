console.log("Arasaka");

//alert("Arasaka")

var tomb=[
    "Mi található a képen?<br>Ha tudod, írd be a szövegmezőbe!",
    "Mi található a képen?<br>Ha tudod, írd be a szövegmezőbe!",
    "Mi található a képen?<br>Ha tudod, írd be a szövegmezőbe!",
    "Mi található a képen?<br>Ha tudod, írd be a szövegmezőbe!",
    "Mi található a képen?<br>Ha tudod, írd be a szövegmezőbe!"
];

kattintas()

function kattintas()
{
    var veletlen=Math.floor(Math.random() * tomb.length);
    document.getElementById("vicchelye").innerHTML=tomb[veletlen];
    console.log(tomb[veletlen])
    document.getElementById("kep").src=veletlen+"_gyumolcs.jpg"
}

teszt()

function teszt()
{
    
}