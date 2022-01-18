var d=document.getElementById("dibujito");
var lienzo= d.getContext("2d");
var lineas=15;
var l=0;
var yi, xf;
var yf,xi;
var xfin=150;
document.body.style.backgroundColor="yellow"
for(l=0;l< lineas; l++){
    yi =10 * l;
    xf =10 *(l + 1);
    dibujarlinea("black", 151,yi,xf,151);
    xfin=xfin -10;  
    
}
for(l=0;l< lineas; l++){
    yf =10 * l;
    xi =300-(l+1)*10;
    dibujarlinea("black", 151,yi,xf,151);
      
    
}
for(l=0;l< lineas; l++){
    xi =l * 10;
    yf =300-(l +1)* 10;
    dibujarlinea("black", xi,151,151,yf);
      
    
}
for(l=0;l < lineas; l++){
    xi =l*10;
    yf =l * 10;
    dibujarlinea("black", xi,151,151,yf);
      
    
}


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();   
}