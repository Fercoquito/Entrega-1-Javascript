/*valorTelevisor: 70000
1 cuota $70000
3cuotas valor + 20%interes
6cuotas valor +30%interes
*/


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



