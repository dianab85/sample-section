( function ($) {
    if(window.location.pathname == '/'){
        //Home Child Scripts Here

        function setImgHeight(){              
            var $windowsize = $(window).width();      
            var $boxHeight = $('.custom-banner-sect').height();      
            $('.custom-banner-sect .custom-banner-sect__img-bg').css('height', 0);  

            if($windowsize >= 600 && $windowsize < 1030){                 
                $('.custom-banner-sect .custom-banner-sect__img-bg').css('height', $boxHeight);           
            }else if($windowsize >= 1030){                                
                $('.custom-banner-sect .custom-banner-sect__img-bg').css('height', $boxHeight);  
            }else {
                $('.custom-banner-sect .custom-banner-sect__img-bg').css('height', 300);     
            }
        }
        setImgHeight();  
        $( window ).resize(function() {        
            setImgHeight();
        });
    }
}(jQuery) );   
