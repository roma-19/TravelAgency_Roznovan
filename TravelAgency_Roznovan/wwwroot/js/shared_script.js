document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let header = document.getElementById('header-top');
        let scrollTop = window.scrollY;
        let maxScroll = 250; //Максимальная прокрутка для изменения цвета
        
        //Расчет прозрачности на основе прокрутки
        let opacity = Math.min(scrollTop / maxScroll, 1);
        header.style.backgroundColor = `rgba(255, 165, 0, ${opacity})`;
    });
});