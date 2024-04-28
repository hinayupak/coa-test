$.noConflict();
jQuery(document).ready(function($){
    
    const dropdown = $('.header-main-nav').find('.has-children');
    if(dropdown.length) {

        // level 1
        $('.has-children-1').on("click", function() {
            if ($(this).next('.nav-submenu:first').is(':visible')) {
                $(this).next('.nav-submenu:first').slideUp();
            } else {
                $(this).next('.nav-submenu:first').slideDown();
            }
        });

        // level 2
        $('.has-children-2').on("click", function() {
            if ($(this).next('.nav-submenu:first').is(':visible')) {
                $(this).next('.nav-submenu:first').slideUp();
            } else {
                $(this).next('.nav-submenu:first').slideDown();
            }
        });

        // close all dropdowns
        $(document).on("click", function(e) {
            if ($(e.target).closest(".has-children").length === 0 && $(event.target).closest(".nav-submenu").length === 0) {
                closeDropdown();
            }
        });
    
        function closeDropdown() {
            $('.nav-submenu').slideUp();
        }
    }

    // offcanvas
    const offcanvasMenu = $('#offcanvas-menu');
    $('.offcanvas-menu-open').click(function() {
        if (offcanvasMenu.length) {
            offcanvasMenu.toggleClass('-translate-x-full');
        }
    });

});