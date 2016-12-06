window.onload = function(){
    //slider
    var slide = document.querySelectorAll('.big_image li');
    var slide_mini = document.querySelectorAll('.small_image li');
    var cont_slide = document.getElementsByClassName('slider')[0];
    var scroll = cont_slide.offsetWidth;
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
        console.log(cont_img);
        slide_mini[i].appendChild(cont_img);
    }
    //end small image

}