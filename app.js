function clearPlaceholder() {
    const textbox = document.getElementById('textbox');
    if (textbox.value === 'Ingrese el texto aquí') {
        textbox.value = '';
    }
}

function setPlaceholder() {
    const textbox = document.getElementById('textbox');
    if (textbox.value === '') {
        textbox.value = 'Ingrese el texto aquí';
    }
}

function encriptar() {
    let texto = document.getElementById("textbox").value;
    let noTextFound = document.querySelector(".no_text_found");
    let span = document.querySelector("#tooltiptext");
    let svgPath = document.querySelector(".tooltip svg path");
    let textFound = document.querySelector(".result_layout");

    const minusculas = /^[a-z\s]+$/;
    if (!minusculas.test(texto)) {
        span.textContent = "No se permiten mayúsculas ni acentos. Intente de nuevo."
        span.style.color = "red";
        svgPath.style.fill = "red";
        return;
    } else {
        span.textContent = "Solo letras minúsculas y sin acentos";
        span.style.color = "";
        svgPath.style.fill = "";
    }

    if (texto === "") {
        noTextFound.style.display = "block";
        textFound.style.display = "none";   
    } else {
        noTextFound.style.display = "none";
        let textoEncriptado = texto.replace(/e/g, "enter")
                                    .replace(/i/g, "imes")
                                    .replace(/a/g, "ai")
                                    .replace(/o/g, "ober")
                                    .replace(/u/g, "ufat");
        textFound.style.display = "block";
        document.getElementById("result").value = textoEncriptado;
    }
}

function desencriptar() {
    let texto = document.getElementById("textbox").value;
    let noTextFound = document.querySelector(".no_text_found");
    let textFound = document.querySelector(".result_layout");

    if (texto === "") {
        noTextFound.style.display = "block";
        textFound.style.display = "none";
    } else {
        noTextFound.style.display = "none";
        let textoDesencriptado = texto.replace(/ufat/g, "u")
                                        .replace(/ober/g, "o")
                                        .replace(/ai/g, "a")
                                        .replace(/imes/g, "i")
                                        .replace(/enter/g, "e");
        textFound.style.display = "block";
        document.getElementById("result").value = textoDesencriptado;
    }
}

function copiar() {
    let texto = document.getElementById("result").value;
    navigator.clipboard.writeText(texto)
}