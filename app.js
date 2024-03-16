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
    let textFound = document.querySelector(".result_layout");

    const minusculas = /^[a-z\s]+$/;
    if (!minusculas.test(texto)) {
        alert("Solo se permiten letras minúsculas y sin acentos");
        return;
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

    const minusculas = /^[a-z\s]+$/;
    if (!minusculas.test(texto)) {
        alert("Solo se permiten letras minúsculas y sin acentos");
        return;
    }

    if (texto === "") {
        noTextFound.style.display = "block";
        textFound.style.display = "none";
    } else {
        noTextFound.style.display = "none";
        let textoDesencriptado = texto.replace(/enter/g, "e")
                                        .replace(/imes/g, "i")
                                        .replace(/ai/g, "a")
                                        .replace(/ober/g, "o")
                                        .replace(/ufat/g, "u");
        textFound.style.display = "block";
        document.getElementById("result").value = textoDesencriptado;
    }
}

function copiar() {
    let texto = document.getElementById("result").value;
    navigator.clipboard.writeText(texto)
}