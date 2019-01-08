const $courses = document.getElementsByClassName("course");
const $modal = document.getElementById('modal');
const $modalContent = document.getElementById('modal-content');
const $hideModal = document.getElementById('hideModal');
const $modalImg = document.getElementById('modal-img');


const $summary = document.getElementById('summary');
const $jobModal = document.getElementById('job-modal');
const $jobModalContent = document.getElementById('job-modal-content');
const $jobModalImg = document.getElementById('job-modal-img');
const $jobModalTitle = document.getElementById('job-modal-title');
const $jobModalPosition = document.getElementById('job-modal-position');
const $activities = document.getElementById('activities');
const $jobHideModal = document.getElementById('jobHideModal');

function openCourse(event){
    var imgClick = event.currentTarget.dataset.img;
    $modal.classList.add('active');
    $modalImg.setAttribute('src', imgClick);
    $modalContent.style.animation = 'modalIn .8s forwards';
}

function openSummary (event) {
    var jobClick = event.currentTarget.dataset.job;
    
    const jobData = findJob(jobClick)
    
    $jobModal.classList.add('active');
    $jobModalImg.setAttribute('srcset', jobData.children[0].children[0].children[0].getAttribute('srcset'))
    $jobModalTitle.innerHTML = jobData.children[0].children[1].innerHTML
    $jobModalPosition.innerHTML = jobData.children[0].children[2].innerHTML
    $activities.innerHTML = getActivities(jobClick)
    $jobModalContent.style.animation = 'modalIn .8s forwards';
}

function findJob(job) {
    const finded = document.getElementById(job)
    return finded
}

function getActivities(job){
    switch (job){
        case "job1": 
            return `Postulación de vacantes, Búsqueda de candidatos, Entrevistas vía telefónica, skype o presenciales, screening de candidatos, Seguimiento a proceso de contratación.
                    </br></br>`
        case "job2":
            return `Desarrollo de aplicación de escritorio con Visual Basic .Net
                    </br></br>
                    Aplicación para la gestión de pagos de aplicadores de Estudios Socioeconómicos</br>
                    </br>
                    Uso de Report Viewer para crear reportes de pagos por persona, por panco y general.</br>
                    Almacenamiento en Base de Datos Microsoft Access 2016.
                    </br></br>`
        case "job3":
            return `<strong>Reclutamiento:</strong></br>
                    Postulación de vacantes, Búsqueda de candidatos, Entrevistas, Encargado de plataforma de psicometrías en línea, Trato directo con clientes, Reportes mensuales de resultados de departamente de Estudios Socioeconómicos, Seguimiento a proceso de contratación.</br>
                    </br>
                    <strong>Soporte Técnico:</strong></br>
                    Atención a problemas de usuarios internos, Formateo de equipos, Instalación de Sistema Operativo, Software y Periféricos, Implementación de respaldos automáticos, Creación de tutoriales para aplicación móvil, Creación de formatos en Excel (Fórmulas, Tablas dinámicas, Formatos condicionales, etc).
                    </br></br>`
    }
}

$modal.addEventListener('click', () => {
    $modalContent.style.animation = 'modalOut .8s forwards';
    setTimeout(function() {
        $modal.classList.remove('active')
    }, 800);
});

$jobModal.addEventListener('click', () => {
    $jobModalContent.style.animation = 'modalOut .8s forwards';
    setTimeout(function() {
        $jobModal.classList.remove('active')
    }, 800);
});

$hideModal.addEventListener('click', () => {
    $modalContent.style.animation = 'modalOut .8s forwards';
    setTimeout(function() {
        $modal.classList.remove('active')
    }, 800);
});

$jobHideModal.addEventListener('click', () => {
    $jobModalContent.style.animation = 'modalOut .8s forwards';
    setTimeout(function() {
        $jobModal.classList.remove('active')
    }, 800);
});


function courseTemplate (HTMLString){
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
};

const $courses_title = document.getElementById('courses-list-title')

const $courses_container = document.getElementById('courses-container');
const folder = 'img/courses/';

const course_images =[
    // Frontend
    'diploma-sistemas-diseno.png',
    'diploma-stylus.png',
    'diploma-less.png',
    'diploma-sass.png',
    'diploma-fundamentos-javascript.png',
    'diploma-jquery-js.png',
    'diploma-optimizacion-web.png',
    'diploma-postcss.png',
    'diploma-animaciones-web.png',
    'diploma-responsive-design.png',
    'diploma-css-grid-layout.png',
    'diploma-html5-css3.png',
    'diploma-programacion-basica.png',
    // Conocimientos Generales
    'diploma-bd.png',
    'diploma-git-github.png',
    'diploma-terminal.png',
    'diploma-ingenieria.png',
    'diploma-redes.png',
    'diploma-finanzas.png',
    'diploma-marca-personal.png',
    // Inglés
    'diploma-ingles-basico.png',
    'diploma-ingles-gramatica.png',
    'diploma-ingles-conversacion.png'
]

$courses_title.innerHTML = `Cursos aprobados: ${course_images.length}`
course_images.forEach(function(img) {
    const course_template = `
    <figure class="course" onclick="openCourse(event)" data-img="${folder}${img}">
        <img src="${folder}${img}">
    </figure>
    `
    const course_element = courseTemplate(course_template);
    const image = course_element.querySelector('img')
    
    image.addEventListener('load', (event) => {
        event.srcElement.style = 'display: inline-block';
        event.srcElement.style.animation = 'fadeIn 1.5s forwards'
    })
    $courses_container.append(course_element);
})


