const productos = [
    
    {   id: 1, nombre: "buzo",  imagen: "./img/abrigos/01.jpg", categoria:  "Abrigos",precio: 1000 },
    {   id: 2, nombre: "campera", imagen: "./img/abrigos/02.jpg", categoria: "Abrigos", precio: 2000 },
    {   id: 3, nombre: "sweter", imagen: "./img/abrigos/03.jpg", categoria: "Abrigos", precio: 3000 },
    
    {   id: 4, nombre: "remeron",imagen: "./img/remera/01.jpg", categoria: "Remeras", precio: 1000},
    {   id: 5, nombre: "escote en v",imagen: "./img/remera/02.jpg", categoria: "Remeras", precio: 2000 },
    {   id: 6, nombre: "musculosa",imagen: "./img/remera/03.jpg", categoria: "Remeras", precio: 3000 },
    
    {   id: 7, nombre: "bermuda", imagen: "./img/pantalones/01.jpg", categoria:  "Pantalones",precio: 1000},
    {   id: 8, nombre: "short", imagen: "./img/pantalones/02.jpg", categoria:  "Pantalones",  precio: 2000},
    {   id: 9, nombre: "jean", imagen: "./img/pantalones/03.jpg", categoria: "Pantalones",  precio: 3000 },
]

const Pantalones = productos.filter((producto) => producto.categoria == "Pantalones")
result = prompt (" Elegir una categoria \n Abrigos \n Pantalones \n Remeras")



let salida = ""
for (const  producto of Pantalones) {
    salida = salida + producto.nombre + "\n"
}
alert(salida)
