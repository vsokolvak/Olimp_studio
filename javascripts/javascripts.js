window.onload = setTimeout(function(){
                    var image = document.getElementsByClassName("main_bg");
                    var i = 2;
                    setInterval(function(){
                        image[0].src = "images/bg_image"+i+".jpg";
                        image[0].animation = 'bgImg 5s linear';
                        i++;
                        if(i > 6) i = 1;
                    }, 5000);
                }, 0);