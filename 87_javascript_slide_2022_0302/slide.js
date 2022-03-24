var tonevek=new Array("Pécsi-tó","Bánki-tó","Vadása-tó","Tiszafüredi Holt-Tisza");
var tomappa=new Array("pecsi_to","banki_to","vadasa_to","tisza_to");
var tokepek=new Array("1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg");
var kistokepek=new Array("s_1.jpg","s_2.jpg","s_3.jpg","s_4.jpg","s_5.jpg","s_6.jpg");
var sz2="";
var sz3="";
var sz4="";
for (j=0;j<=3;j++)
    for (i=0;i<=5;i++)
        {
            sz2+='<img src="'+tomappa[j]+'/'+kistokepek[i]+'" style="width:80px;height:80px;margin:2px;" title="'+tonevek[j]+'">';
            sz3+='<div class="mySlides fade">';
            sz3+='<div class="numbertext">'+tonevek[j]+' '+i+'</div>';
            sz3+='<img src="'+tomappa[j]+'/'+tokepek[i]+'" style="width:100%;" title="'+tonevek[j]+'">';
            sz3+='<div class="text">'+tonevek[j]+' '+i+'</div>';
            sz3+='</div>';
            sz4+='<span class="dot"></span>';
        }
document.getElementById("doboz2").innerHTML=sz2;
document.getElementById("vetites").innerHTML=sz3;
document.getElementById("pontok").innerHTML=sz4;
var slideIndex = 0;
showSlides();

function showSlides() 
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}