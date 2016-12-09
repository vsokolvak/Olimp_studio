window.onload = function(){
    //slider
    var slide = document.querySelectorAll('.big_image li');
    var slide_mini = document.querySelectorAll('.small_image li');
    var cont_slide = document.getElementsByClassName('slider')[0];
    var tape = document.getElementsByClassName('big_image')[0];
    var scroll = cont_slide.offsetWidth;
    var coef = 0;

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
    
    //autoscroll
    function autoscroll(){
       if (coef < 4) 
       coef++;
       else
       coef = 0;
       scrolling(coef);
    };
    var autoscrolling = setInterval(autoscroll, 6000);

    function autoscrollrestart(){
        clearInterval(autoscrolling);
        autoscrolling = setInterval(autoscroll, 6000);
    }
    //end

    //functoon scrolling
    function scrolling(scrol){
        tape.style.left = -900*scrol + 'px';
    }
    //end

    //function click mside_mini
    function goscroll(e){
        coef = this.children[0].id*1;
        scrolling(coef);
        autoscrollrestart();
    }
    //end
    
    //add scroll to click small img
    for(i = 0; i < slide_mini.length; i++){
        slide_mini[i].addEventListener('click', goscroll);
    }
    //end
    
    //добавление прокрутки стрелками
    var next = document.getElementsByClassName("aft")[0];
    var prev = document.getElementsByClassName("bef")[0];
    function gonext(){
        if (coef < 4)
        coef = coef + 1;
        scrolling(coef);
        autoscrollrestart();
    }
    function goprev(){
        if (coef > 0)
        coef = coef - 1;
        scrolling(coef);
        autoscrollrestart();
    }
    next.addEventListener('click', gonext);
    prev.addEventListener('click', goprev);
    //конец


}