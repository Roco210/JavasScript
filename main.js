//creacion de clase
class Producto {
    constructor(id, nombre, precio, imagen, cantidad) {
        this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.imagen = imagen,
            this.cantidad = cantidad
    }
}
//creacion de objetos
const maceta = new Producto(1, "maceta 5 lts", 1000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKStZsebgqXi6Oxry4FdHiiqSNQg7KPrz4Jw&usqp=CAU", 1)
const sustrato = new Producto(2, "sustrato ligero 25dm", 2200, " https://http2.mlstatic.com/D_NQ_NP_863283-MLA43259201302_082020-W.jpg", 1)
const fertilizante = new Producto(3, "fertilizante completo", 800, " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnc021QXFS6JuYvhUzEJczjWKz4IlS4_p2zA&usqp=CAU", 1)
const insecticida = new Producto(4, "insecticida", 500, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAljp23Kld9LQa4HaeUC68qHSIBOtrrY_-jw&usqp=CAU ", 1)
// array de objetos

let stock = []
stock.push(maceta)
stock.push(sustrato)
stock.push(fertilizante)
stock.push(insecticida)

// interaccion con el DOM principal

let card = document.getElementById("producto")
stock.forEach(p => {
    card.innerHTML += `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <img src="${p.imagen}" class="card-img-top" alt="...">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text"> $ ${p.precio} </p>
        <button id= "${p.id}" type="button" class="btn btn-danger">AGREGAR AL CARRITO</button>
    </div>
</div>`
})

let a = 0
let b
let carrito = []
let finalizar = document.getElementById("finalizar")
let cuerpo =document.getElementById("tarjeta")
let body=document.getElementById("cuerpo")
//selecciona productos y los guarda en el carrito, y el tottal de lo comprado
function d(){
    card.onclick=(e)=>{
        let ip=parseInt((e.target.id))
        let productoEscojido = stock.find(element=>element.id===ip)
        carrito.push(productoEscojido)
        a += productoEscojido.precio
        localStorage.setItem("total", a)
    }

}
//cambia de pantalla a una ventana con los items elegidos y total de compra
function cerrar (){
    finalizar.onclick = () => {
        cuerpo.remove()
        a=localStorage.getItem("total")
        console.log(a)
        body.innerHTML =`
        <div id="listado"></div>
        <div id="total"></div>
        `
        let divA=document.getElementById("listado")
        let divB=document.getElementById("total")
        carrito.forEach(p=>{
            console.log(p)
            divA.innerHTML+=`<p class="h1">=> ${p.nombre} </>`
        })
        divB.innerHTML+=`<p class= "h2">Total: ${a}</p> 
        <button id="test" class="btn btn-danger">test classchange</button>`
        
        let test =document.getElementById("test")
        
        
        test.onclick=()=>{
            location.reload()
        }

    localStorage.clear()
        b = 0
        a = 0
        carrit=[]}
    }

// evento

d()
cerrar ()
