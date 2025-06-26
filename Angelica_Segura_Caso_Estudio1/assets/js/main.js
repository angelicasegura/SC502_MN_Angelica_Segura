document.addEventListener('DOMContentLoaded', () => {
    console.log('Ver si carga mi pagina');
    cargarEstudiante();
    const boton = document.querySelector('#nuevo-Estudiante');
    boton.addEventListener('click', crearEstudiantes);
    cargarMayorNota();
    cargarpromedio();
    cargarMenorNota();
});
let estudiante = [
    {
        nombre: "Maria",
        apellido: "Mora Perez",
        nota: 90
    },
    {
        nombre: "Pedro",
        apellido: "Sibaja Lopez",
        nota: 60
    },
    {
        nombre: "Marco",
        apellido: "Rojas Castro",
        nota: 78
    }
];

let sumaNotas = 0;
const crearEstudiantes = () => {
    console.log('mi funcion crear estudiante');
    const form = document.querySelector('#form_Agregar_Estudiante')
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());
    const { nombre, apellido, nota } = entries;
    const jsonEntries = JSON.stringify(entries);
    const objectEntries = JSON.parse(jsonEntries);

    const Estudiante = { nombre, apellido, nota };
    console.log(Estudiante);
    estudiante.push(Estudiante);
    localStorage.setItem('estudiante', JSON.stringify(estudiante));
    //Verificar si el formulario no esta vacio
    if (nombre == '' || apellido == '' || nota == '') {
        const mensaje = document.querySelector('#mensaje');
        mensaje.innerHTML = 'Por favor, complete todos los campos';

    } else { }



    form.reset();

    cargarEstudiante();
}


const cargarEstudiante = () => {
    console.log('Llamando a la funcion cargar estudiantes');

    const localStorageEstudiante = localStorage.getItem('estudiante');
    console.log('Estudiantes obtenidos del localStorage', localStorageEstudiante);
    if (localStorageEstudiante == null) {
        localStorage.setItem('estudiante', JSON.stringify(estudiante))
    } else {
        const getEstudiante = localStorage.getItem('estudiante')
        estudiante = JSON.parse(getEstudiante);
    }

    const estudiantes_section = document.querySelector('#estudiantes_section');
    console.log(estudiantes_section);

    estudiantes_section.innerHTML = `<thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Nota</th>
    </tr>
  </thead>`;


    estudiante.forEach(estudiante => {
        console.log(estudiante);

        const { nombre, apellido, nota } = estudiante
        

        const col = document.createElement('tr');

        col.innerHTML = `<td>${estudiante.nombre}</td>
<td>${estudiante.apellido}</td>
<td>${estudiante.nota}</td>`;
        
        estudiantes_section.append(col);
        sumaNotas += Number(nota);
    });
     
};


const cargarMayorNota = () => {
    let mayorNota = 0;
    const mayorNota_section = document.querySelector('#mayorNota');
    if (estudiante.length == null) {
        return "La lista de notas está vacía";
    } else {

        estudiante.forEach(estudiante => {
            if (estudiante.nota > mayorNota) {
                mayorNota = estudiante.nota;
            }
        });

    }
    const col = document.createElement('div');
    col.classList.add('col-4');
    col.classList.add('mb-3');
    col.classList.add('row', 'justify-content-center');
    col.innerHTML = ` <div class="card" style="width: 18rem; text-center">
                            <div class="card-body">
                                    
                                    <p class="card-text"> ${mayorNota}</p>
                                    
                                </div>
                        </div>`;
    mayorNota_section.append(col);
}

const cargarpromedio = () => {
    const promedio = sumaNotas / estudiante.length;
    const promedio_section = document.querySelector('#promedioNotas');

    const col = document.createElement('div');
    col.classList.add('col-4');
    col.classList.add('mb-3');
    col.classList.add('row', 'justify-content-center');
    col.innerHTML = ` <div class="card" style="width: 18rem; text-center">
                            <div class="card-body">
                                    
                                    <p class="card-text"> ${promedio}</p>
                                    
                                </div>
                        </div>`;
    promedio_section.append(col);
}



const cargarMenorNota = () => {

    const menorNota_section = document.querySelector('#menorNota');
    let menorNota = estudiante[0].nota;

    estudiante.forEach(estudiante => {
        if (estudiante.nota < menorNota) {
            menorNota = estudiante.nota;
        }
    });

    const col = document.createElement('div');
    col.classList.add('col-4');
    col.classList.add('mb-3');
    col.classList.add('row', 'justify-content-center');
    col.innerHTML = ` <div class="card" style="width: 18rem; text-center">
                            <div class="card-body">
                                    
                                    <p class="card-text"> ${menorNota}</p>
                                    
                                </div>
                        </div>`;
    menorNota_section.append(col);
}