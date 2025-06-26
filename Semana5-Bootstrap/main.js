document.addEventListener('DOMContentLoaded', function () {
    console.log('Cargo mi pagina');
    cargarEstudiante();
    const btn = document.querySelector('#agregar-estudiante');
    btn.addEventListener('click', crearEstudiante)

});

let estudiantes = [
    {
        nombre: 'Maria',
        apellido: 'Mora Perez',
        nota: 90

    },
    {
        nombre: 'Jacob',
        apellido: 'Thornton',
        nota: 90
    },
    {
        nombre: 'John',
        apellido: 'Doe',
        nota: 78
    },

]

//Crear estudiante y nota
const crearEstudiante = () => {
    console.log('mi funcion cargar tarjeta');
    const form = document.querySelector('#form-estudiante');
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());
    const { nombre, apellido, nota } = entries;
    const jsonEntries = JSON.stringify(entries);
    const objectEntries = JSON.parse(jsonEntries);

    //CREAR NUEVO ESTUDIANTE
    const nuevoEstudiante = { nombre, apellido, nota };
    console.log(nuevoEstudiante);
    estudiantes.push(nuevoEstudiante);
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    form.reset();
    cargarEstudiante();
}

const cargarEstudiante = () => {
    const localStorageEstudiantes = localStorage.getItem('estudiantes');
    console.log('estudiantes obtenidos', localStorageEstudiantes);
    if (localStorageEstudiantes == null) {
        localStorage.setItem('tarjetas', JSON.stringify(estudiantes))
    } else {
        const getEstudiantes = localStorage.getItem('estudiantes')
        estudiantes = JSON.parse(getEstudiantes);
    }

    const Estudiantes_section = document.querySelector('#tabla-estudiantes');
    console.log(Estudiantes_section);

    Estudiantes_section.innerHTML = '';


    estudiantes.forEach(estudiantes => {
        console.log(estudiantes);

        const { nombre, apellido, nota } = estudiantes

        const col = document.createElement('tr');

        col.innerHTML = ` <td>${estudiantes.nombre}</td>
<td>${estudiantes.apellido}</td>
<td>${estudiantes.nota}</td>`;
;
        Estudiantes_section.append(col);
    });
}