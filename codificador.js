    var buton_encriptar = document.getElementById("b_encriptar");
    var buton_desencriptar = document.getElementById("b_desencriptar");
    var buton_copiar = document.getElementById("b_copiar");
    buton_copiar.style.display = "none";

    function encriptar(){   

        var mensaje = document.querySelector("#cuadro_ingreso").value;              //traigo el contenido del cuadro de texto llamado "cuadroingreso"
        var resultado = document.querySelector("#cuadro_resultado");                //traigo al script el textarea donde va a colocarse el resultado de la encriptación
        
        if (mensaje == ""){                                                         //verifica si el textarea de ingreso del texto está vacio.
            document.querySelector("#img_muneco").style.display = "inline";         //si es true, muestra la imagen del muñeco
            document.querySelector("#cuadro_mensajes").style.display = "inline";    //muestra los mensajes informativos iniciales
            document.querySelector("#cuadro_resultado").style.display= "none";      //oculta el campo resultados
            document.querySelector("#cuadro_resultado").value="";                   //elimina en caso de haber contenido en el textarea resultado
            buton_copiar.style.display = "none";
            alert("Nada para encriptar.")
            return
        }
        var mensaje_actual ="";                                             //variable donde se va a capturar el mensaje ya codificado. Inicia con valor vacío (sin datos)

        for(let posicion = 0; posicion < mensaje.length ; posicion++){      //loop para reglas de verificación de los caracteres ingresados.
            if (mensaje[posicion].charCodeAt() > 34 && mensaje[posicion].charCodeAt() < 44){
                alert("No se permiten símbolos. Revise el texto ingresado.");
                document.querySelector("#cuadro_ingreso").focus();
                return;
            }
            if (mensaje[posicion].charCodeAt() > 47 && mensaje[posicion].charCodeAt() < 58){
                alert("No se permiten números. Revise el texto ingresado.");
                document.querySelector("#cuadro_ingreso").focus();
                return;
            }
            if (mensaje[posicion].charCodeAt() > 59 && mensaje[posicion].charCodeAt() < 65){
                alert("No se permiten símbolos. Revise el texto ingresado.");
                document.querySelector("#cuadro_ingreso").focus();
                return;    
            }
            if (mensaje[posicion].charCodeAt() > 90 && mensaje[posicion].charCodeAt() < 97){
                alert("No se permiten símbolos. Revise el texto ingresado.");
                document.querySelector("#cuadro_ingreso").focus();
                document.querySelector("#cuadro_ingreso").focus();
                return;    
            }
            if (mensaje[posicion].charCodeAt() > 122){
                alert("No se permiten acentos o símbolos. Revise el texto ingresado.");
                document.querySelector("#cuadro_ingreso").focus();
                return;    
            }
        }
 
        for(let posicion = 0; posicion < mensaje.length ; posicion++){      //ejectua el loop conforme a la cantidad de caracteres que tenga el texto ingresado
                if (mensaje[posicion] == "a"){                              //mensaje[posicion] separa el caracter actual en un array y verfica si es la letra "a"
                    var caracter_reemplazado = mensaje[posicion].replace("a","ai");    //si es verdadero, reemplaza la letra "a" por "ai"
                    mensaje_actual = mensaje_actual + caracter_reemplazado;              //si se reemplazo la letra, la agrega a la variable mensaje_actual
                } else if (mensaje[posicion] == "e"){
                    var caracter_reemplazado = mensaje[posicion].replace("e","enter");
                    mensaje_actual = mensaje_actual + caracter_reemplazado;    
                } else if (mensaje[posicion] == "i"){
                    var caracter_reemplazado = mensaje[posicion].replace("i","imes");
                    mensaje_actual = mensaje_actual + caracter_reemplazado;
                } else if (mensaje[posicion] == "o"){
                    var caracter_reemplazado = mensaje[posicion].replace("o","ober");
                    mensaje_actual = mensaje_actual + caracter_reemplazado;
                } else if (mensaje[posicion] == "u"){
                    var caracter_reemplazado = mensaje[posicion].replace("u","ufat");
                    mensaje_actual = mensaje_actual + caracter_reemplazado;
                } else{                                                     //si no encuentra ninguna letra a reemplazar,
                 mensaje_actual = mensaje_actual + mensaje[posicion];       //agrega la letra actual a la variable mensaje_actual
            } 
        }

            resultado.value=mensaje_actual;                                 //coloca el resultado de la encriptción en el textarea ("cuadro_resultado")
            document.querySelector("#img_muneco").style.display = "none";   //oculta el grafico del muñeco
            document.querySelector("#cuadro_mensajes").style.display = "none";//oculta los mensajes iniciales
            document.querySelector("#cuadro_resultado").style.display ="inline";//muestra el textarea del resultado
            document.querySelector("#cuadro_ingreso").value="";
            buton_copiar.style.display = "inline";                          //muestra el boton copiar
        }

    function desencriptar(){
        var mensaje = document.querySelector("#cuadro_ingreso").value;              //traigo el contenido del cuadro de texto llamado "cuadroingreso"
        var resultado = document.querySelector("#cuadro_resultado");                //traigo al script el textarea donde va a colocarse el resultado.

        if (mensaje == ""){                                                         //verifica si el textarea de ingreso del texto está vacio.
            document.querySelector("#img_muneco").style.display = "inline";         //si es true, muestra la imagen del muñeco
            document.querySelector("#cuadro_mensajes").style.display = "inline";    //muestra los mensajes informativos iniciales
            document.querySelector("#cuadro_resultado").style.display= "none";      //oculta el campo resultados
            document.querySelector("#cuadro_resultado").value="";                   //elimina en caso de haber contenido en el textarea resultado
            buton_copiar.style.display = "none";
            alert("Nada para desencriptar.")
            return
        }        
        
        var texto_encriptado = document.querySelector("#cuadro_ingreso").value;   //capta el contenido del texto encriptado
        var texto_desencriptado = texto_encriptado.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");               //realiza los reemplazos por las vocales correspondientes.
        var resultado = document.querySelector("#cuadro_resultado");
        resultado.value = texto_desencriptado;
        
        document.querySelector("#img_muneco").style.display = "none";   //oculta el grafico del muñeco
        document.querySelector("#cuadro_mensajes").style.display = "none";//oculta los mensajes iniciales
        document.querySelector("#cuadro_resultado").style.display ="inline";//muestra el textarea del resultado
        document.querySelector("#cuadro_ingreso").value="";
        buton_copiar.style.display = "inline";                          //muestra el boton copiar
    }
    
    function copiar(){
        var texto_copiado = document.querySelector("#cuadro_resultado");  //cargo el texto del cuadro resultado en la variable.
        var texto_encriptado = document.querySelector("#cuadro_ingreso");

        if (texto_copiado.value == ""){                                               //comprueba si hay algo escrito para copiar
            alert("No hay mensaje para desencriptar");                           //si no hay texto, indica mediante el alert.
            return
        }else if (navigator.clipboard.writeText(texto_copiado.value)){  //copio el contenido de la variable al portapapeles.
            texto_encriptado.value = texto_copiado.value;               //si todo está ok, copia el mensaje al area principal
            texto_copiado.value = "";                                   //se vacia el textarea de la derecha
            buton_copiar.style.display = "none";
        }
        else{
            alert("Ocurrio algún problema y no se copió el texto. Vuelva a intentar")
        }                              
    }
    
    buton_encriptar.onclick = encriptar;
    buton_desencriptar.onclick = desencriptar;
    buton_copiar.onclick = copiar;