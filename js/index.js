const $courses = document.getElementsByClassName("course");
const $modal = document.getElementById('modal');
const $modalContent = document.getElementById('modal-content');
const $hideModal = document.getElementById('hideModal');
const $modalImg = document.getElementById('modal-img');

function openCourse(event){
    var imgClick = event.currentTarget.getAttribute('src');
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

function fadeIn(event){
    event.currentTarget.style = 'display: block;'
    event.currentTarget.style.animation = 'fadeIn 1.5s forwards';
}