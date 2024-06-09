let pass1 = document.querySelector("#boton1");
let pass2 = document.querySelector("#boton2");
let pass3 = document.querySelector("#boton3");
let ingresar = document.querySelector("#ingreso");
let parrafopass = document.querySelector("#parrafoclave");

ingresar.addEventListener("click", () => {
    let Inputpass1 = parseInt(pass1.value);
    let Inputpass2 = parseInt(pass2.value);
    let Inputpass3 = parseInt(pass3.value);
    if (Inputpass1 == 9  && Inputpass2 == 1 &&  Inputpass3 == 1)  {
    parrafopass.innerHTML = "Password 1 correcto"
    }
    else if (Inputpass1 == 7  && Inputpass2 == 1 &&  Inputpass3 == 4)  {
        parrafopass.innerHTML = "Password 2 correcto"
    }
    else {
       parrafopass.innerHTML = "Password incorrecto"
    }
})