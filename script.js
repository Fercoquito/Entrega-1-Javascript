/*valorTelevisor: 70000
1 cuota $70000
3cuotas valor + 20%interes
6cuotas valor +30%interes
*/
/*  si paga en 1 cuota 0% int
    si paga en 3 cuota 20% int
    si paga en 6 cuota 30% int
*/

/*
let valorTelevisor = 70000
let cuotas = parseInt (prompt("Ingrese cantidad de cuotas 1,3,6"))
let cantidadDeCuotas = cuotas

  
  if(cantidadDeCuotas == 1){
    console.log( "El precio en 1 cuota es "+ valorTelevisor)
  } else if( cantidadDeCuotas == 3){
  console.log( "El precio en 3 cuotas seria " + (valorTelevisor + ( 20*70000/100)))
  }else if( cantidadDeCuotas == 6){
    console.log( "El precio en 6 cuota es "+ (valorTelevisor + ( 30*70000/100)))
  }else {
    console.log( "Ingresar una opcion correcta")
  }  



  

  /*
let tv = 5000
let microondas = 8000
let plancha = 4000

let electrodomestico = parseInt(prompt("Ingrese tv, microondas o plancha"))


while (cantidadCuotas !== 1 || cantidadCuotas !== 3 || cantidadCuotas !== 6 || cantidadCuotas !== 12) {

  if (cantidadCuotas === 1) {
    alert("Debe pagar " + montoAPagar)
  } else if (cantidadCuotas === 3) {
    alert("Debe pagar " + (montoAPagar + montoAPagar * .2))
  } else if (cantidadCuotas === 6) {
    alert("Debe pagar " + (montoAPagar + montoAPagar * .3))
  }

  cantidadCuotas = parseInt(prompt("Ingrese 1 , 3 o 6 cuotas"))
}
let montoAPagar = parseInt(prompt("Ingrese monto a pagar"))
let cantidadCuotas = parseInt(prompt("Ingrese cantidad de cuotas"))*/

let nombre = prompt ( "Bienvenido, Ingrese su nombre")
let cantidad = parseInt(prompt( "Ingrese cuantos litros de nafta llevara"))
let opcion


while (opcion != 0) {
    
     opcion= parseInt(prompt( " ingrese 1 para consultar el precio de la nafta\n Ingrese 2 para calcular cuantro le saldria el litro\n Ingrese 0 para salir "))
    
     if (opcion === 1){
      console.log("El precio del litro de nafta es, $150 el litro")
      }else if (opcion === 2){
        console.log("El precio de la nafta segun el valor que puso es de " + (cantidad * 150) + " $ ")
      } else if (opcion == 0){
        break
      }else {
        console.log ("Vuelva a introducir una opcion correcta")
      }
      

  
}