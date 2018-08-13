( function ($) {    

    //HD10 - Keep Header On One Line 
    $(window).load(function () {
      
        var parentSelector ='.center-menu nav ul';
        var childSelector ='.center-menu nav ul li';
        var dropDownText = 'View Models';

        function menuPopup () {
            var startPx = 768;
            var windowWidth = $(window).width();
            var parentWidth = $(parentSelector).outerHeight();
            var childWidth = $(childSelector).outerHeight();
            
            console.log(parentWidth);
            console.log(childWidth);

            if(windowWidth >= startPx && parentWidth > childWidth){
                console.log('hide menu');
                //hide menu and create popup
                $(parentSelector).hide();
                createDropDown(parentSelector, dropDownText);
            } else {
                console.log('show menu');
                //show menu & destroy popup
                $(parentSelector).show();
                removeDropDown(parentSelector);
            }
        }
        menuPopup ();

        function createDropDown(parent, text){           
            var dd = "<span class='dd-holder'><span class='dd-button'><span>" + text + "</span><i class='icon-navigation-icons-10'></i></span><div class='dd'><ul>";
            dd = dd + $(parent).html() + '</ul></div></span>';
            $(parent).parent().prepend(dd);
        }

        function removeDropDown(parent){
            $(parent).parent().find('.dd-holder').remove();            
        }

        $(window).resize(function () {
            menuPopup ();      
        });
        
   });
 
}(jQuery) );    