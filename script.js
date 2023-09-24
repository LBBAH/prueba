const spans = document.querySelectorAll('·animated-text span');


function animateWords(index) {
    if (index < spans.length) {
        spans[index].style.animationDelay = (index * 0.2) + 's';
        spans[index].classList.add('appear-animation');
        index++;
        setTimeout(() => {
            animateWords(index);
        }, 200);
    }
}

animateWords(0);


function closePlease(){
    var div = document.getElementById('navbarPage-response');
    div.style.display = 'none';
}


function openPlease(){
    var div = document.getElementById('navbarPage-response');
    div.style.display = 'block';
}