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

        function positionBanner(){

            var windowHeight = $(window).height();
            var windowWidth = $(window).width();
            var footerHeight = $('.home > footer.wp').height();
            var bannerHeight = $('.banner-static .banner-border-container').height(); 
            var remainderSpace = windowHeight - footerHeight - bannerHeight;       


            if(windowWidth >= 1030) {                    
                $('.wp .banner-static').css({'padding-top':'200px','padding-bottom':'80px'});            
                if(remainderSpace > 280){                    
                    $('.wp .banner-static').css({'padding-top':remainderSpace*2/3+'px','padding-bottom':remainderSpace/3+'px'});
                }         
            }
        }

        positionBanner();    
        setImgHeight();  

        $( window ).load(function() {        
            setImgHeight();
            positionBanner();    
        });

        $( window ).ready(function() {        
            setImgHeight();
            positionBanner();    
        });

        $( window ).resize(function() {        
            setImgHeight();
            positionBanner();    
        });




    }
}(jQuery) );   
