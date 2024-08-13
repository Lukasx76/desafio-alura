function criptografar() {

    let textToEncrypt = document.querySelector(".campo-cript_decript").value
    let sideBar = document.querySelector(".apresentacao-barra-lateral")
    sideBar.innerHTML = ""

    const keys = {
        "e" : "enter",
        "i" : "imes",
        "a" : "ai",
        "o" : "ober",
        "u" : "ufat"
    }

    let encryptedText;
    for (const vowel in keys) {
        if (textToEncrypt.includes(vowel)) {
            encryptedText = textToEncrypt.replaceAll(vowel, keys[vowel]);
        }
    }
    sideBar.innerHTML += `<p class="texto-cript-descript"> ${encryptedText} </p>`
    // sideBar.innerHTML += `<a class="botao-copiar"> Copiar </a>`

}

function copiarTexto() {

}

function descriptografar() {

    let textToDecrypt = document.querySelector(".campo-cript_decript").value
    let sideBar = document.querySelector(".apresentacao-barra-lateral")
    sideBar.innerHTML = ""

    const keys = {
        "enter": "e",
        "imes" : "i",
        "ai" : "a",
        "ober" :"o", 
        "ufat" : "u" 
    }

    let decryptedText;

    for (const cript in keys) {
        if (textToDecrypt.includes(cript)) {
            decryptedText = textToDecrypt.replaceAll(cript, keys[cript]);
        }
    }

    sideBar.innerHTML = `<p> ${decryptedText} </p>`

}