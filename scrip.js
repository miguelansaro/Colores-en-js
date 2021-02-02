var yellow=document.getElementById("amarillo");
var blue=document.getElementById("azul");
var red=document.getElementById("rojo");
var valor = document.getElementById("texto").value;
function Cambiar(){
    if(valor===1){
        document.body.style.backgroundColor="yellow";
       }
       if(valor===2){
        document.body.style.backgroundColor="blue";
       }
        if(valor===3){
        document.body.style.backgroundColor="red";
       }
}
