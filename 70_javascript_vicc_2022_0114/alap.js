console.log("Arasaka");
//alert("Arasaka")

var tomb=[
    "- Mi az? Kicsi, és a sivatagban 400-al robog?<br>- ???<br>- Etióp kisgyerek ebédjeggyel.", 
    "A cowboy odamegy az indiánhoz, aki épp birkát legeltet:Cowboy: - Szia Indián! Beszélhetek a kutyáddal?<br>Indián: - Kutya nem beszélni.<br>Cowboy: - Szia Kutyus, mizujs?<br>Kutya: - Semmi különös. (Indián ledöbbent arccal néz.)<br>Cowboy: - Ez az indián a gazdád?<br>Kutya: - Jaja.<br>Cowboy: - És jól bánik veled?<br>Kutya: - Nagyon jól. Kétszer megsétáltat, jó kajákat ad és heti egyszer elvisz a tóhoz játszani. (Indián teljes hitetlen arccal néz...)<br>Cowboy: - Indián, beszélhetek a lovaddal?<br>Indián: - Ló nem beszélni.<br>Cowboy: - Helló Ló, hogy vagy?<br>Ló: - Királyul. (Indián teljes sokkban...)<br>Cowboy: - Ez az indián a gazdád?<br>Ló: - Ja.<br>Cowboy: - És hogy bánik veled?<br>Ló: - Egész jól, lovagol velem, lecsutakol és istállóban tart,<br>amikor rossz az idő. (Az indián teljesen elképed.)<br>Cowboy: - Indián, beszélhetek a birkáddal?<br>Indián: - Birka hazudni...",
    "Hogy hívják a spanyol tolvajt?<br>Lopez, de futaztán."
];

var veletlen=Math.floor(Math.random() * tomb.length);
document.getElementById("vicchelye").innerHTML=tomb[veletlen]