function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPositoin = window.innerHeight / 1.2;

    if(introPosition < screenPositoin){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear());