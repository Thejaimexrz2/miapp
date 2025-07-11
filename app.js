const formulario = document.querySelector(".form-create")
const publicacion = document.querySelector("#publicacion");
const contenedor = document.querySelector(".contenedor-publicaciones");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    var newPost = `
        <div class="publicacion">
            <p>id: 00</p>
            <p>${publicacion.value}</p>
            <button>Editar</button>
            <button>Eliminar</button>
        </div>
    `;
    contenedor.innerHTML += newPost;

}); 

