/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/*
"gato" => "gaitober"
gaitober" => "gato"
*/

/*
Boton tuerca para cambiar la key de las vocales para destacar
*/

function cifrarmensaje() {
    const mensaje = document.getElementById('messageInput').value; //STRING
    console.log(mensaje);

    var mensajeHechoArray = Array.from(mensaje);
    var mensajeHechoArray_length = mensajeHechoArray.length;
    console.log(mensajeHechoArray_length);

    var mensajeCodificado = []; 

    for (let i = 0; i < mensajeHechoArray_length+1; i++) {

        var letraPorLetra = mensajeHechoArray[i];        
        
        console.log(letraPorLetra);

        switch (letraPorLetra) {
            case 'a':
                mensajeCodificado.push('a','i')
                break;
            case 'e':
                mensajeCodificado.push('e','n','t','e','r' );
                break;
            case 'i':
                mensajeCodificado.push('i','m','e','s');
                break;
            case 'o':
                mensajeCodificado.push('o','b','e','r');
                break;
            case 'u':
                mensajeCodificado.push('u','f','a','t');
                break;
            default:
                console.log("default!");                
                mensajeCodificado.push(letraPorLetra);
        }
    }  

    formatoMensaje()
    mostrarTextAreaCodificado(mensajeCodificado.join(""));
    
}

function descifrarmensaje() {
    const mensaje = document.getElementById('messageInput').value; //STRING
  
    var micondicional = true;
    var mensajeDescodificado = mensaje;

    do {
        if (mensajeDescodificado.includes('ai') == true){
            mensajeDescodificado = mensajeDescodificado.replace('ai', 'a');                     
        } else if (mensajeDescodificado.includes('enter') == true){
            mensajeDescodificado = mensajeDescodificado.replace('enter', 'e');  
        } else if (mensajeDescodificado.includes('imes') == true){
            mensajeDescodificado = mensajeDescodificado.replace('imes', 'i');  
        } else if (mensajeDescodificado.includes('ober') == true){
            mensajeDescodificado = mensajeDescodificado.replace('ober', 'o');   
        } else if (mensajeDescodificado.includes('ufat') == true){
            mensajeDescodificado = mensajeDescodificado.replace('ufat', 'u');  
        } else {
            micondicional = false;
        }        
    }
    while (micondicional == true);

    console.log('mensaje final: ' + mensajeDescodificado);
    formatoMensaje();
    mostrarTextAreaCodificado(mensajeDescodificado);
    
}

function formatoMensaje() {
    const quitarMuneco = document.getElementById("muneco")
    const quitarTitulo = document.getElementById("codedMessages-title");
    const quitarTexto = document.getElementById("codedMessage")
    quitarMuneco.style.display = "none";
    quitarTitulo.style.display = "none"
    quitarTexto.style.display = "none"
}

function crearTextAreaCodificado(mensaje){
    var mydiv = document.getElementById("mainCodedMessagesContainer");

    var newText = document.createElement("TEXTAREA");
    newText.className = "codedMessageTextBox";
    newText.value = mensaje;
    newText.setAttribute('rows', '8',)
    newText.setAttribute('readonly', 'true')
    mydiv.appendChild(newText);

    var newCopyButton = document.createElement('BUTTON');
    newCopyButton.id = "boton-copiar"
    newCopyButton.innerText = "Copiar"
    mydiv.appendChild(newCopyButton);    
}

function mostrarTextAreaCodificado(mensaje)  {
    var showElement_textBox = document.getElementById("codedMessageTextBox");
    showElement_textBox.style.display = 'block';
    showElement_textBox.value = mensaje;

    var showElement_button = document.getElementById("boton-copiar");
    showElement_button.style.display = 'block'; 
}

function copiarTexto(){
    const textarea = document.getElementById("codedMessageTextBox");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
}