( function ($) {    

     //HD10 - Keep Header On One Line
     var navSelector = 'header nav ul';
     var dropDownSelector = '.drop-down-menu-list ul';  

    function compare(nav, dropdown){ 
        var navNode =  document.body.querySelector(nav);
        var dropDownNode = document.body.querySelector(dropdown);            
        var navHeight = navNode.offsetHeight;
        var navElHeight = navNode.querySelector('li:first-child').offsetHeight;

        if(navHeight !== navElHeight){
            dropDownNode.parentNode.parentNode.style.visibility = "visible";
            navNode.style.visibility = "hidden";                
        }else{                
            dropDownNode.parentNode.parentNode.style.visibility = "hidden";
            navNode.style.visibility = "visible";
        }          
    }


     //set top and bottom padding of search input based on header height 
     function setSearchBarPadding($element = $("header .secondary-menu .live-search-area")){			
        var windowWidth = $(window).width();
        var $parentSelector = $element;				
        var $formSelector = $parentSelector.find(".search-tool");					
        
        $formSelector.css({
            "padding-top": 0,
            "padding-bottom": 0
        });

        var selectorHeight = $formSelector.height();
        var headerHeight = $("header").height();
        var padding = (headerHeight - selectorHeight) / 2;

        if (windowWidth < 1010) {		
            //cover entire header on mobile & Tablet			
            $formSelector.css({
                "padding-top": padding + "px",
                "padding-bottom": padding + "px"
            });
        } else {
            $formSelector.css({
                "padding-top": 0,
                "padding-bottom": 0
            });
        }			
    }
    
    function openSearchBar() {	
        $(".search-trigger").click(function(event) {
            var $parentSelector = $(this)
            .parents("header")
            .find(".live-search-area");				
            $parentSelector.find(".input-search").val("");
            $parentSelector.toggleClass("active");		
            setSearchBarPadding($parentSelector);	
        });    				
    }

    function closeSearchBar() {
        //HD10 Search Close
        $('.close-trigger').click(function (event) {
            $(this).parents('header').find('.live-search-area').removeClass('active');
        });	
        //Click to close Search
        $('body').bind("click touchstart", function (event) {
            var clickedElement = event.target;
            if ($(clickedElement).parents('.live-search-area').length || $(clickedElement).parents('.search-trigger').length) {
                // do nothing
            } else if($('.live-search-area').hasClass('active')) {
                $('.live-search-area').removeClass('active');
            }
        });	
    }

    compare(navSelector, dropDownSelector);
    openSearchBar();		
	closeSearchBar();

    $(document).ready(function () {
        compare(navSelector, dropDownSelector);
        openSearchBar();		
        closeSearchBar();
    });

    $(document).load(function () {
        compare(navSelector, dropDownSelector);
        openSearchBar();		
        closeSearchBar();
    });

    $(window).resize(function () { 
        compare(navSelector, dropDownSelector);    
        if($("header .secondary-menu .live-search-area").hasClass('active')){
            setSearchBarPadding();
        }
    });

}(jQuery) );    