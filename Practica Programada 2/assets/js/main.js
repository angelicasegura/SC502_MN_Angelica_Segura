document.addEventListener("DOMContentLoaded", function () {
     console.log("Ver si carga la pagina");
    document.getElementById("btn_calcular").addEventListener("click", funcionBoton );
    document.getElementById ("btn_edad").addEventListener("click", verificarEdad);
    document.getElementById("btn_cambiarTexto").addEventListener("click", cambiarTexto);
    cargarNombres ();
    cargarpromedio ();

    
});

//Ejercicio 1
const calcularSalario = () => {
    console.log("funcion de calcular el salario ");
    const salarioInput = document.querySelector('#salario');
    const salarioTexto = salarioInput.value;
    const salario = Number(salarioTexto);
    const cargaSocial = salario * 0.1067;
    console.log('Carga social = ', cargaSocial);
    document.querySelector('#cargasSociales').value = cargaSocial;
    return cargaSocial;
}

const calcularImpuestos = () => {
    console.log("funcion de calcular el impuesto ");
    const salarioInput = document.querySelector('#salario');
    const salarioTexto = salarioInput.value;
    const salario = Number(salarioTexto);

    let impuesto = 0;
    if (salario <= 922000) {
        impuesto = 0;
    } else if (salario <= 1352000) {
        impuesto = (salario - 922000) * 0.10;
    } else if (salario <= 2373000) {
        impuesto = (1352000 - 922000) * 0.10 + (salario - 1352000) * 0.15
    } else if (salario <= 4745000) {
        impuesto = (1352000 - 922000) * 0.10
            + (2373000 - 1352000) * 0.15
            + (salario - 2373000) * 0.20
    } else {
        impuesto = (1352000 - 922000) * 0.10
            + (2373000 - 1352000) * 0.15
            + (4745000 - 2373000) * 0.20
            + (salario - 4745000) * 0.25;
    }

    document.querySelector('#impuestos').value = impuesto;
    return impuesto
}

const calcularSalarioNeto = () => {
    const salarioInput = document.querySelector('#salario');
    const salarioTexto = salarioInput.value;
    const salario = Number(salarioTexto);
    const cargasSociales = calcularSalario();
    const impuestos = calcularImpuestos()
    let salarioFinal = 0;
    salarioFinal = salario - cargasSociales - impuestos;
    document.querySelector('#salarioNeto').value = salarioFinal;
}

const funcionBoton = () => {
    calcularSalario();
    calcularImpuestos();
    calcularSalarioNeto();
}
//------------------------------------------------
//Ejercicio 2
const cambiarTexto =()=>{
    const parrafo = document.querySelector('#parrafo');
    parrafo.innerHTML = "Se ha cambiado el contenido del parrafo"
}



//------------------------------------------------
//Ejercicio 3

const verificarEdad =()=>{
    const edadInput= document.querySelector('#edad');
    const edadTexto = edadInput.value;
    const edad = Number(edadTexto);
    const imprimirResultado = document.querySelector('#resultado');
    if (edad < 18){
        console.log('Eres menor de edad');
        imprimirResultado.textContent = "Eres menor de edad";
    }else {
        console.log ('Eres mayor de edad');
        imprimirResultado.textContent = "Eres mayor de edad";
    }
}




// Ejercicio 4
//Areglo de nombres 
let nombres = [
    {
        nombre: 'Alejandro',
        apellido: 'Rivera',
        nota: '85',
    },
    {
        nombre: 'Sara',
        apellido: 'Salas',
        nota: '90',
    },
    {
        nombre: 'Adrian',
        apellido: 'Lopez',
        nota: '91',
    },
    {
        nombre: 'Samantha',
        apellido: 'Perez',
        nota: '95',
    }
];
let sumaNotas = 0;
const cargarNombres = () => {
    const nombres_section = document.querySelector('#listaEstudiantes');
    nombres_section.style.display = 'flex';
    nombres_section.style.flexWrap = 'wrap';
    nombres_section.style.justifyContent = 'center';
    nombres_section.style.gap = '1px';
    
    nombres_section.innerHTML = '';
    nombres.forEach(nombres => {
        console.log(nombres);

        const { nombre, apellido, nota } = nombres

        const col = document.createElement('div');
        col.classList.add('col-4');
        col.classList.add('mb-3');
        col.classList.add ( 'justify-content-center');

        col.innerHTML = ` <div class="card" style="width: 18rem ">
                            
                                <div class="card-body text-center">
                                    <h5 class="card-title"> Nombre: ${nombre}</h5>
                                    <p class="card-text">Apellido: ${apellido}</p>
                                    <p class="card-text"> Nota: ${nota}</p>
                                    
                                </div>
                        </div>`;
        nombres_section.append(col);
        sumaNotas += Number(nota); 

    });
}
const cargarpromedio = ()=>{
    const promedio = sumaNotas / nombres.length; 
    const promedio_section = document.querySelector('#promedio');
    
    const col = document.createElement('div');
        col.classList.add('col-4');
        col.classList.add('mb-3');
        col.classList.add ('row', 'justify-content-center');
        col.innerHTML = ` <div class="card" style="width: 18rem; text-center">
                            <div class="card-body">
                                    
                                    <p class="card-text"> ${promedio}</p>
                                    
                                </div>
                        </div>`;
        promedio_section.append(col);
}

