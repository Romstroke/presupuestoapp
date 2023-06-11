
let presupuesto = 0;
let gastos = [];
let total = 0; /// tendria que estar aqui para cuando esten separados en funciones
let saldo = 0;

document.getElementById('formPresupuesto').addEventListener('submit',function(event){
    event.preventDefault()
   

    presupuesto =Number(document.getElementById('presupuesto').value);
        console.log(presupuesto)
  

    if(isNaN(presupuesto)){
       
        alert('no');
        return;
      }
  

    document.getElementById('injPresupuesto').innerHTML = '$'+presupuesto.toLocaleString('es-CL');

})

document.getElementById('formGasto').addEventListener('submit', function(event){
    event.preventDefault()
   

    let valor = parseInt(document.getElementById('cantidadGasto').value);
    let nombre = document.getElementById('nombreGasto').value;

    let gasto = {nombre,valor}
    
    if(valor === ''){
        alert('Ingresa un valor para tu gasto, por favor');
        return;
    }
    if(nombre === ''){
        alert('Ingresa un nombre para tu gasto, por favor');
        return;
    }
    gastos.push(gasto); 
    console.log(gastos);

    document.getElementById('cantidadGasto').value = '';
    document.getElementById('nombreGasto').value = '';

    inyectarGastoArriba(gastos);

    injGastos(gastos);

})

function injGastos(gastos){
    document.getElementById('filaTabla').innerHTML =''; 

    for(i=0; i < gastos.length; i++ ){
        let tr =
        `       <tr id='tr'>
                    <td>${gastos[i].nombre}</td>
                    <td>${gastos[i].valor.toLocaleString('es-CL')}</td>
                    <td id="button" onclick="eliminarGasto(${i})"><button>X</button></td>
                </tr>
        `
        document.getElementById('filaTabla').innerHTML+= tr; 
    }
}

function inyectarGastoArriba(gastos){

    total = 0;
    for(i=0; i < gastos.length; i++ ){
        total += gastos[i].valor; ///// reduce 
    }

    document.getElementById('injGasto').innerHTML = total.toLocaleString('es-CL');
    document.getElementById('injSaldo').innerHTML = (presupuesto - total).toLocaleString('es-CL');
}

function eliminarGasto(index){

    alert(index);
    gastos.splice(index,1);

    injGastos(gastos);
    inyectarGastoArriba(gastos);
}

