/* custom scripts */

(function( $ ) {
    $(document).ready(function(){
        // resources filter modal
        function custom_modal_filters(){

            var modal = $('#modal');

            $('#modalCall').on('click', function(){

                modal.show();

            });

            $('.close').on('click', function(){
                modal.hide();
            });

            window.onclick = function(event) {

                if (event.target == modal[0]) {
                    modal.hide();
                }
            }
        }
        custom_modal_filters();

    });

})( jQuery );

