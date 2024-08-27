document.addEventListener('DOMContentLoaded', function() {
    var inputTexto = document.getElementById('inputTexto');
    var outputText = document.getElementById('outputText');
    var encriptarBtn = document.getElementById('encriptarBtn');
    var desencriptarBtn = document.getElementById('desencriptarBtn');
    var copiarBtn = document.getElementById('copiarBtn');
    var outputImage = document.getElementById('outputImage');
    var outputSubtext = document.getElementById('outputSubtext');

    function encriptar() {
        var texto = inputTexto.value;
        texto = texto.toLowerCase();
        var textoEncriptado = texto.replace(/e/g, 'enter');
        textoEncriptado = textoEncriptado.replace(/i/g, 'imes');
        textoEncriptado = textoEncriptado.replace(/a/g, 'ai');
        textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
        textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');
        mostrarResultado(textoEncriptado);
    }

    function desencriptar() {
        var texto = inputTexto.value;
        texto = texto.toLowerCase();
        var textoDesencriptado = texto.replace(/enter/g, 'e');
        textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
        textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
        textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
        textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');
        mostrarResultado(textoDesencriptado);
    }

    function mostrarResultado(texto) {
        outputText.textContent = texto;
        if (outputImage) {
            outputImage.style.display = 'none';
        }
        if (outputSubtext) {
            outputSubtext.style.display = 'none';
        }
        copiarBtn.style.display = 'inline-block';
    }

    function copiar() {
        var textoCopiado = outputText.textContent;
        navigator.clipboard.writeText(textoCopiado)
            .then(function() {
                alert('Texto copiado al portapapeles');
            })
            .catch(function(err) {
                console.error('Error al copiar el texto: ', err);
            });
    }

    if (encriptarBtn) {
        encriptarBtn.addEventListener('click', encriptar);
    }
    if (desencriptarBtn) {
        desencriptarBtn.addEventListener('click', desencriptar);
    }
    if (copiarBtn) {
        copiarBtn.addEventListener('click', copiar);
    }
});
