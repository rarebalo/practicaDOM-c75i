const cambiarTitulo =()=>{
    const titulo = document.querySelector("h1")
    console.log(titulo);
    //titulo.innerText = "Nuevo titulo desde <b>JS</b>"
    titulo.innerHTML = "Nuevo titulo desde <b>JS</b>"
    titulo.className = "display-3 text-primary"
}