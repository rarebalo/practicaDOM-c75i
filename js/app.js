const cambiarTitulo = () => {
  const titulo = document.querySelector("h1");
  console.log(titulo);
  //titulo.innerText = "Nuevo titulo desde <b>JS</b>"
  titulo.innerHTML = "Nuevo titulo desde <b>JS</b>";
  titulo.className = "display-3 text-primary";
};

const verMas = () => {
  const seccion = document.querySelector("#contenedorPadre");

  if (btnVerMas[3].innerHTML === "Ver mas") {
    console.log("desde la funcion verMas");
    const parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, ipsa quam aut odit maxime, eligendi dolor nesciunt pariatur nisi beatae dolore, culpa iste? Quod minus, tenetur incidunt ducimus molestias neque vitae maiores ratione ea perferendis facere nulla, itaque deserunt, totam quas officia. Voluptate cupiditate eveniet, est numquam beatae neque, veritatis debitis ea iusto magni, sapiente totam architecto assumenda. Quasi tempore tenetur, dolor beatae voluptatibus maiores. Unde et, quod minus quam eos debitis sapiente consequatur laudantium explicabo in facilis vitae veniam neque nesciunt animi reprehenderit qui, recusandae quisquam nam tenetur? Iure, ad! Maxime adipisci neque incidunt omnis, rerum corrupti sequi eveniet aspernatur in velit minima, minus quidem iusto ex autem tempora laudantium? Cum inventore laudantium nobis iure, consectetur a, excepturi explicabo aliquid neque est ut recusandae facere reprehenderit dolor possimus ratione expedita tempora tenetur odio, eveniet sint ipsum at? Iusto ducimus maxime ratione perferendis ipsa soluta adipisci facilis quibusdam voluptatibus consequatur.";
    parrafoNuevo.className = "lead";
    //traigo mi elemento padre

    // console.log(seccion);
    //agregar un nodo hijo
    // seccion.appendChild(parrafoNuevo); //agrega nodos hijos al final
    // seccion.prepend(parrafoNuevo); //agrega nodos hijos al comienzo
    seccion.insertBefore(parrafoNuevo, btnVerMas[3]);

    btnVerMas[3].innerHTML = "Ocultar";
    btnVerMas[3].className = "btn btn-danger";
  } else {
    console.log("Aqui eliminamos el parrafo");    
    seccion.removeChild(seccion.children[3]);
    btnVerMas[3].innerHTML = "Ver mas";
    btnVerMas[3].className = "btn btn-primary";
  }
};
const btnVerMas = document.getElementsByTagName("button");
console.log(btnVerMas[3]);

btnVerMas[3].addEventListener("click", verMas);
