//EVENTO QUE PREVIENE FORMULARIO POR DEFECTO Y TOMA EL VALOR DEL INPUT /////// presupuesto y gasto tiene que seer una variable global, 
                                                                        ///// y gasto tiene que ser un array de objetos. y le hacemos push a esos gastos
                                                                        // despues con el reduce entro a lacantidad del gasto y me pongo a sumar
                                                                        /// 
function agregarPresupuesto(callback) {
    document.getElementById('formPresupuesto').addEventListener('submit', function(event) {
        event.preventDefault();
        escribirPresupuesto = parseInt(document.getElementById("presupuesto").value);
        console.log(escribirPresupuesto);
        callback(escribirPresupuesto);
    });
}

//// FUNCION INYECTAR PRESUPUESTO

function injPresupuesto() {
    agregarPresupuesto(function(escribirPresupuesto) {
        /////Inyectar presupuesto
        let presupuestoInyectado = document.getElementById('injPresupuesto');
        let infoPresupuesto = `$${escribirPresupuesto}`;
        presupuestoInyectado.innerHTML = infoPresupuesto;
    });
}

injPresupuesto();

 //////FUNCION PARA GUARDAR LOS GASTOS


let arrayGastos = []; // Array para almacenar los gastos

function agregarGasto(callback, gastosArray) {
  document.getElementById('formGasto').addEventListener('submit', function(event) {
    event.preventDefault();

    let escribirNombreGasto = document.getElementById('nombreGasto').value;
    let escribirCantidadGasto = parseInt(document.getElementById("cantidadGasto").value);

    let gasto = {
      nombreGasto: escribirNombreGasto,
      cantidadGasto: escribirCantidadGasto
    };

    gastosArray.push(gasto); // Agregar el gasto al array de gastos

    
    console.log(gastosArray);
    
    callback(gasto);
  

    console.log(escribirNombreGasto);
    console.log(escribirCantidadGasto);
  });
}

///FUNCION PARA INYECTAR LOS GASTOS

function injGasto() {
  agregarGasto(function(gasto) {
    let nombreValorGastoInyectado = document.getElementById('filaTabla');

    let infoGastos = '';

    for (let i = 0; i < arrayGastos.length; i++) {
      infoGastos +=
        `
        <tr>
          <td>${arrayGastos[i].nombreGasto}</td>
          <td>$${arrayGastos[i].cantidadGasto}</td>
          <td><button>X</button></td>
        </tr>
        `
        ;
    }

    nombreValorGastoInyectado.innerHTML = infoGastos;
  }, arrayGastos);
}

injGasto();

///FUNCION PARA INYECTAR VALOR DE GASTO EN TABLA DE ARRIBA

function injValorGasto() {
  let gastoInyectado = document.getElementById('injGasto');
  let infoGasto ='';

  
    infoGasto += `$${arrayGastos[arrayGastos.length - 1].cantidadGasto}`;

  gastoInyectado.innerHTML = infoGasto;
  console.log(infoGasto)
}

injValorGasto();

// function injValorGasto(){

  

//     let gastoInyectado = document.getElementById('injGasto');

//     let infoGasto = `$${arrayGastos.cantidadGasto}`; 


//     gastoInyectado.innerHTML = infoGasto;

// }

// injValorGasto()
         

////calcular saldo

    // let saldo = presupuesto - gasto;

    // console.log(saldo);




// function sumar(){   /////los parametros sirven como contexto, para saber lo que va a ENTRAR para identificar
		
// 	var numero = pedirDosNum();
// 	var num1 = numero[0];
// 	var num2 = numero[1];

// 	var resultadoSuma = num1 + num2;
// 	console.log(resultadoSuma);
// 	alert(`El resultado de sumar ${num1} y ${num2} es: ${resultadoSuma}.`);
// 	return resultadoSuma;		
// }
///Cuando haga clic en el botón "Añadir Gasto", la aplicación debe: primero, 
//mostrar el valor que se acaba de guardar en la columna "gastos", ubicada entre las columnas "presupuesto" y "saldo" 
//(al lado derecho de la vista); 

//en segundo lugar, restar los gastos del presupuesto, y mostrar el resultante bajo la columna "saldo"; 
//y por último, incluir el gasto en la parte inferior derecha de la página, mostrando la descripción (o nombre) del gasto junto con su valor. 




// function getValue(value){

//   var pantalla = document.getElementById("pantalla").value;  

//   if (pantalla =="0"){

//       document.getElementById("pantalla").value = value;  

//   } else {

//       document.getElementById("pantalla").value = pantalla + value;

//  }



// }