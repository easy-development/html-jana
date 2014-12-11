jQuery(document).ready(function() {

    jQuery(".exit-modal").click(function(){
        jQuery(".form-1").addClass("form-inactive");
        jQuery(".contain-button-see-modal").addClass("active");
        jQuery(".modal-contact").removeClass("active");
        jQuery("#responsive_map").removeClass("grayscale");
    });
    jQuery(".button-see-modal").click(function(){
        $(".form-1").removeClass("form-inactive");
        $(".contain-button-see-modal").removeClass("active");
        $(".modal-contact").addClass("active");
        $("#responsive_map").addClass("grayscale");
    });

    jQuery('.collapse').not(".navbar-collapse").collapse();
});
