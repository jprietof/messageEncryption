/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
function encriptarMensaje() {
   let mensajeEncriptado = mensaje.value;
   if(!validar(mensajeEncriptado)){
      for (let posicion = 0; posicion < llaves.length; posicion++) {
         let letra = new RegExp(llaves[posicion],"ig");  // recorre el array y remplaza
         mensajeEncriptado = mensajeEncriptado.replace(letra, oculto[posicion]);
      }
      document.getElementById("msg").value = mensajeEncriptado;
      console.log(mensajeEncriptado);
      //return alert(mensajeEncriptado);
   }
   
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function desencriptarMensaje() {
   let desencriptarMsg = mensaje.value;
   if(!validar(desencriptarMsg)){
      console.log("entroDesen");
      for (let posicion = 0; posicion < oculto.length; posicion++) {
         let desifrar = new RegExp (oculto[posicion],"ig");
         desencriptarMsg = desencriptarMsg.replace(desifrar, llaves[posicion]);
      }
      document.getElementById("msg").value = desencriptarMsg;
      console.log(desencriptarMsg);
      //return console.log(mensajeIncriptado);
   }
}
/*-------------------------------------------
            función copiar
---------------------------------------------*/
function copiarTxt() {
   let resultado = document.querySelector("#msg");
   resultado.select();
   document.execCommand("copy");
   document.getElementById("text-copy").innerHTML="texto copiado";
}
/*-------------------------------------------
            Validaciones
---------------------------------------------*/
//limpiar errores
function limpiarVerificacion(){
   let estado = document.getElementsByTagName('span');
   for(let i=0; i<estado.length; i++){
      estado[i].innerHTML="";
   }
}
//validar campos
function validar(valor){
   limpiarVerificacion();
   console.log("entroValidar");
   let estado = false;
   let letraAcento = /[A-ZÀ-ÿ]/;
   if(valor.trim().length==0){
      document.getElementById("errorCampo").innerHTML="* El campo esta vacio";
      mensaje.focus();
      estado = true;
   }
   if(letraAcento.test(valor)){
      document.getElementById("errorCampo").innerHTML="* El texto tiene mayusculas o ocentos.";
      mensaje.focus();
      estado = true;
   }
   return estado;
}
/*-------------------------------------------
            Textos de Entrada
---------------------------------------------*/
let llaves = ["e", "i", "a", "o", "u"];
let oculto = ["enter", "imes", "ai", "ober", "ufat"];
let mensaje = document.getElementById("text-input");
mensaje.focus();

/*-------------------------------------------
         Eventos de click en botones
---------------------------------------------*/
let btnEncriptar = document.getElementById("btn-encriptar");
let btnDesencriptar = document.getElementById("btn-desencriptar");
let btnCopiar = document.getElementById("btn-copy");
btnEncriptar.addEventListener("click", encriptarMensaje, false);
btnDesencriptar.addEventListener("click", desencriptarMensaje, false);
btnCopiar.addEventListener("click", copiarTxt, false);
