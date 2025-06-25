document.addEventListener('DOMContentLoaded', function () {
    console.log('Cargo mi pagina');
    cargarTarjetas();

    const btn = document.querySelector('#btn_crear_tarjeta');
    btn.addEventListener('click', crearTarjeta)
});

//OBJETO LITERAL

//nombre objeto && ARREGLO []
//{} LOS OBJETOS 
let tarjetas = [
    {
        titulo: 'Titulo 1',
        descripcion: 'Some quick example text to build on the card title and make up the bulk of the card’s content',
        boton: 'Button text',
        imagen: 'https://i.pinimg.com/736x/fd/a6/f3/fda6f304d00d80cf5d1f388d0164685b.jpg'
    },
    {
        titulo: 'Titulo 2',
        descripcion: 'Some quick example text to build on the card title and make up the bulk of the card’s content',
        boton: 'Button text',
        imagen: 'https://i.pinimg.com/736x/fd/a6/f3/fda6f304d00d80cf5d1f388d0164685b.jpg'
    },
    {
        titulo: 'Titulo 3',
        descripcion: 'Some quick example text to build on the card title and make up the bulk of the card’s content',
        boton: 'Button text',
        imagen: 'https://i.pinimg.com/736x/fd/a6/f3/fda6f304d00d80cf5d1f388d0164685b.jpg'
    }
];



//Para el formulario 
const crearTarjeta = () => {
    console.log('mi funcion cargar tarjeta');
    const form = document.querySelector('#formulario')
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());
    const { titulo, descripcion, boton, imagen } = entries;
    const jsonEntries = JSON.stringify(entries);
    const objectEntries = JSON.parse(jsonEntries);

//CREAR NUEVA TARJETA
    const nuevaTarjeta = { titulo, descripcion, boton, imagen };
    console.log(nuevaTarjeta);
    tarjetas.push(nuevaTarjeta);
    localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
    form.reset();
    cargarTarjetas();

    //console.log(entries);
    //console.log(jsonEntries);
    //console.log(objectEntries);
}



const cargarTarjetas = () => {
    console.log('Llamando a la funcion cargar tarjeta');

    const localStorageTarjetas = localStorage.getItem('tarjetas');
    console.log ('tarjetas obtenidas de localStorage',localStorageTarjetas);
    if (localStorageTarjetas == null){
        localStorage.setItem ('tarjetas', JSON.stringify(tarjetas))
    } else{
        const getTarjetas = localStorage.getItem('tarjetas')
        tarjetas = JSON.parse (getTarjetas);
    }

    const tarjetas_section = document.querySelector('#tarjetas_section');
    console.log(tarjetas_section);

    tarjetas_section.innerHTML = '';


    tarjetas.forEach(tarjetas => {
        console.log(tarjetas);

        const { imagen, titulo, descripcion, boton } = tarjetas

        const col = document.createElement('div');
        col.classList.add('col-4');
        col.classList.add('mb-3');
        col.innerHTML = ` <div class="card" style="width: 18rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${titulo}</h5>
                                    <p class="card-text"> ${descripcion}</p>
                                    <a href="#" class="btn btn-primary">${boton}</a>
                                </div>
                        </div>`;
        tarjetas_section.append(col);
    });



}


// const cargarTarjetas = () => {
//     console.log('Llamando a la funcion cargar tarjeta');
//     const tarjetas_section = document.querySelector('#tarjetas_section');
//     console.log(tarjetas_section);

//     tarjetas_section.innerHTML = '';

//     let content = '';
//     tarjetas.forEach(tarjetas => {
//         console.log(tarjetas);

//         const {imagen,titulo, descripcion, boton} = tarjetas


//         content += `<div class="col-4">
//                         <div class="card" style="width: 18rem;">
//                             <img src="${imagen}" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${titulo}</h5>
//                                     <p class="card-text"> ${descripcion}</p>
//                                     <a href="#" class="btn btn-primary">${boton}</a>
//                                 </div>
//                         </div>
//                      </div>`;
//     });

//     //tarjetas_section.append (content);
//     tarjetas_section.innerHTML = content;
// }

