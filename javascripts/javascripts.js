window.onload = function(){
    //slider
    var slide = document.querySelectorAll('.big_image li');
    var slide_mini = document.querySelectorAll('.small_image li');
    var cont_slide = document.getElementsByClassName('slider')[0];
    var tape = document.getElementsByClassName('big_image')[0];
    var scroll = cont_slide.offsetWidth;
    var coef = 1;
    console.log(slide);
    console.log(slide_mini);
    console.dir(cont_slide);

    //create big image
    for ( var i = 0; i < slide.length; i++){
        var cont_img = document.createElement('img');
        cont_img.setAttribute("src","images/slider/slide" + (i + 1) + ".jpg");
        console.log(cont_img);
        slide[i].appendChild(cont_img);
    }
    //end big image

    //create small image
        for ( var i = 0; i < slide_mini.length; i++){
        var cont_img = document.createElement('img');
        cont_img.setAttribute("src","images/slider/smallslide" + (i + 1) + ".jpg");
        cont_img.setAttribute("id", i);
        console.log(cont_img);
        slide_mini[i].appendChild(cont_img);
    }
    //end small image
    //function click mside_mini
    function goscroll(e){
        coef = this.children[0].id;
        console.log(coef);
        tape.style.left = -900*coef + 'px';
    }
    //end
    for(i = 0; i < slide_mini.length; i++){
        slide_mini[i].addEventListener('click', goscroll);
    }

}