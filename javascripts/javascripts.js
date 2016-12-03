window.onload = function(){
    

    var slider = document.getElementById('slide');
    setInterval(sliderlist, 5000);
    function sliderlist(){
        var rnm = Math.floor(Math.random()*27 + 1);
        slider.setAttribute('src', 'images/slider/img' + rnm + '.jpg');

    }

}