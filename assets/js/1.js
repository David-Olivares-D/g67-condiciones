let guitarra = document.querySelector(".guitarra")


guitarra.addEventListener("click", () => {
    if (guitarra.style.border === "") {
        guitarra.style.border = "2px solid red";
    } else {
        guitarra.style.border = "";
    }
});