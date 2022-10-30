
class Producto{
    constructor(id,nombre,precio,cantidadComprada){
        this.id=id,
        this.nombre=nombre,
        this.precio=precio
    }
}

const maceta =new Producto(1,"maceta 5 lts", 1000)
const sustrato=new Producto(2,"sustrato ligero 25dm",2200)
const  fertilizante=new Producto(3,"fertilizante completo",800)
const insecticida=new Producto(4,"insecticida",500)
//Esta funcion sirve para sumar productos al carrito y almacena los items y el valor total de la compra
function agregarCarrito (){
    choise=parseInt(prompt(`Elija un producto: ${maceta.id}. ${maceta.nombre},${sustrato.id}. ${sustrato.nombre}, ${fertilizante.id}. ${fertilizante.nombre},${insecticida.id}. ${insecticida.nombre}`))
    while(seguirComprando===true){
        if (choise===maceta.id){
            carrito=carrito + maceta.nombre+", "
            total= total+ maceta.precio
        }else if (choise===sustrato.id){
            carrito=carrito + sustrato.nombre+", "
            total= total+ sustrato.precio
        }else if (choise===fertilizante.id){
            carrito=carrito + fertilizante.nombre+", "
            total= total+ fertilizante.precio
        }else if (choise===insecticida.id){
            carrito=carrito + insecticida.nombre+", "
            total= total+ insecticida.precio
        }else{
            choise=prompt("Por favor ingresa un producto correcto")
        }
        decision = parseInt(prompt("desea sieguir comprando 1.Si 2.No"))
        if(decision===1){
            choise = parseInt(prompt(`Elija un producto: ${maceta.id}. ${maceta.nombre},${sustrato.id}. ${sustrato.nombre}, ${fertilizante.id}. ${fertilizante.nombre},${insecticida.id}. ${insecticida.nombre}`))
        }else if(decision===2){
            seguirComprando=false
        }else{
            decision=parseInt(prompt("desea sieguir comprando 1.Si 2.No"))
        }
    }
}
//esta funcion le da la opcion al comprador determinar el metodo de pago a elegir y devuelve un Alert con el resumen de la compra
function cuotas(){
    modoDePago = parseInt(prompt(`tu total es ${total}, como deseas pagarlo 1. efectivo 10% de descuento-${total*0.9},2.en un pago por trasnferencia o tarjeta ${total} 3. 3 cuotas sin interes de ${total/3}, 4. 12 cuotas con interes de${(total*1.5)/12}.`))
        if (modoDePago===1){
            pagos = "un pago en efectivo de $ "+total*0.9
        }else if (modoDePago===2){
            pagos = "un pago de $ "+ total
        }else if (modoDePago===3){
            pagos = "3 cuotas de $ " +total/3
        }else if (modoDePago===4){
            pagos = "12 cuotas de $"+(total*1.5)/12
        }else{
            modoDePago=prompt("Por favor ingresa un metodo de pago correcto")
            pago=true
        }
    alert(`Usted acaba de comprar ${carrito}, por un total de: $${total} su metodo de pago es:${pagos}`)
}

//inicio del programa

let carrito = " "
let total =0
let seguirComprando= true
let pagos

agregarCarrito()
cuotas()
alert("Muchas gracias por su compra vuelva pronto")