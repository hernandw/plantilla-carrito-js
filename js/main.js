 const carrito = [
  {
    id: 1,
    nombre: "Pokemon Azul",
    precio: 9.99,
    moneda: "EUR",
    imagen: "./img/pokemon-azul.jpg",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Pokemon Rojo",
    precio: 7.99,
    moneda: "EUR",
    imagen: "./img/pokemon-rojo.jpg",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Pokemon Verde",
    precio: 6.99,
    moneda: "EUR",
    imagen: "./img/pokemon-verde.jpg",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Pokemon Plata",
    precio: 19.99,
    moneda: "EUR",
    imagen: "./img/pokemon-plata.jpg",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Pokemon Oro",
    precio: 19.99,
    moneda: "EUR",
    imagen: "./img/pokemon-oro.jpg",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Sonic",
    precio: 6.99,
    moneda: "EUR",
    imagen: "./img/sonic.jpg",
    cantidad: 1,
  },
];


const cardsItems = document.querySelector('.cardItem')

carrito.forEach((item)=>{

cardsItems.innerHTML += `

<div class="card col-lg-3 mb-4">
              <img src="${item.imagen}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">$ ${item.precio}</li>
                
              </ul>
              <div class="card-body">
                <a href="#" class="btn btn-primary">Agregar</a>
              </div>
            </div>







`
})