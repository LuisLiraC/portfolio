const $courses = document.getElementsByClassName("course");
const $modal = document.getElementById('modal');
const $modalContent = document.getElementById('modal-content');
const $hideModal = document.getElementById('hideModal');
const $modalImg = document.getElementById('modal-img');

function openCourse(event){
    var imgClick = event.currentTarget.dataset.img;
    $modal.classList.add('active');
    $modalImg.setAttribute('src', imgClick);
    $modalContent.style.animation = 'modalIn .8s forwards';
}

$modal.addEventListener('click', () => {
    $modalContent.style.animation = 'modalOut .8s forwards';
    setTimeout(function() {
        $modal.classList.remove('active')
    }, 800);
});

$hideModal.addEventListener('click', () => {
    $modalContent.style.animation = 'modalOut .8s forwards';
    setTimeout(function() {
        $modal.classList.remove('active')
    }, 800);
});

function courseTemplate (HTMLString){
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
};

const $courses_title = document.getElementById('courses-list-title')
$courses_title.innerHTML = "Hola";

const $courses_container = document.getElementById('courses-container');
const folder = 'img/courses/';

const course_images =[
    // Frontend
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
    'diploma-marca-personal.png',
    // Inglés
    'diploma-ingles-basico.png',
    'diploma-ingles-gramatica.png',
    'diploma-ingles-conversacion.png'
]

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
    $courses_title.innerHTML = `Cursos aprobados: ${course_images.length}`
})


