//creacion de clase
class Producto {
    constructor(id, nombre, precio, imagen, stock) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen,
        this.stock = stock
    }
}

/* class Carrito{ 
    constructor(){
        this.id,
        this.nombre=nombre,
        this.cantidad=cantidad
    }
} */
//creacion de objetos
const maceta = new Producto(1, "maceta 5 lts", 1000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKStZsebgqXi6Oxry4FdHiiqSNQg7KPrz4Jw&usqp=CAU", 10)
const sustrato = new Producto(2, "sustrato ligero 25dm", 2200, " https://http2.mlstatic.com/D_NQ_NP_863283-MLA43259201302_082020-W.jpg", 10)
const fertilizante = new Producto(3, "fertilizante completo", 800, " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnc021QXFS6JuYvhUzEJczjWKz4IlS4_p2zA&usqp=CAU", 10)
const insecticida = new Producto(4, "insecticida", 500, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAljp23Kld9LQa4HaeUC68qHSIBOtrrY_-jw&usqp=CAU ", 10)
// array de objetos

let stock = []
stock.push(maceta)
stock.push(sustrato)
stock.push(fertilizante)
stock.push(insecticida)
localStorage.setItem("base",JSON.stringify(stock))
// interaccion con el DOM principal

let infobase =JSON.parse(localStorage.getItem("base"))
let card = document.getElementById("producto")
infobase.forEach(p => {
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
let carrito = []
let elementos =[]
let finalizar = document.getElementById("finalizar")
let cuerpo =document.getElementById("tarjeta")
let body=document.getElementById("cuerpo")
localStorage.setItem("carrito",JSON.stringify(elementos))
//selecciona productos y los guarda en el carrito, y el tottal de lo comprado
function d(){
    card.onclick=(e)=>{

        let ip=parseInt((e.target.id))
        let productoEscojido = stock.find(element=>element.id===ip)
        let temp =carrito.includes(productoEscojido)
        Toastify({
            text: `${productoEscojido.nombre} sumado al carrito`,
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)"
            }
            }).showToast();
        //agrega en el localStorage los productos y la cantidad escogida
        if(temp){
            elementos = JSON.parse(localStorage.getItem("carrito"))
            let temp =elementos.find(e=>e.id===ip)
            temp.cantidad=temp.cantidad+1;
            localStorage.setItem("carrito",JSON.stringify(elementos))
            return elementos
        }else{  
            carrito.push(productoEscojido)
            elementos = JSON.parse(localStorage.getItem("carrito"))
            let elemento =  {"id":ip,"nombre":productoEscojido.nombre,"cantidad":1}
            elementos.push(elemento)
            localStorage.setItem("carrito",JSON.stringify(elementos))
        }
        a += productoEscojido.precio
        localStorage.setItem("total", a)
    }
}

//cambia de pantalla a una ventana con los items elegidos y total de compra
function cerrar (){
    finalizar.onclick = () => {
        a=localStorage.getItem("total")
        body.innerHTML =`
        <div id="listado">
        <h1 id="titulo">CARRITO</h1>
        </div>
        <div id="total"></div>
        `
        let divA=document.getElementById("listado")
        let divB=document.getElementById("total")
        elementos.forEach(p=>{
            console.log(p)
            divA.innerHTML+=`<p class="h1">=> ${p.nombre} X ${p.cantidad} </p>`
        })
        divB.innerHTML+=`<p class= "h2">Total: ${a}</p> 
        <button id="test" class="btn btn-danger">Comprar</button>`
        
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
