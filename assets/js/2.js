


let planeta = (document.querySelector('#sticker1'))
let capibara =(document.querySelector("#sticker2"))
let vodka = (document.querySelector("#sticker3"))
let parrafo = document.querySelector("#n_de_stickers");
let botonDeVerificacion = document.querySelector("#verificacion");


botonDeVerificacion.addEventListener("click", () => {
    let InputPlaneta = parseInt(planeta.value);
    let InputCapibara = parseInt(capibara.value);
    let InputVodka = parseInt(vodka.value);
    let suma = InputPlaneta + InputCapibara + InputVodka
    if (suma < 11 ) {
        parrafo.innerHTML ="Llevas " + suma + " stickers";
    } else {
        parrafo.innerHTML ="Llevas damasiados stickers";
    }})