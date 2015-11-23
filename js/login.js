/**
 * Created by james on 15/8/21.
 */
$(document).ready(function(){
    $(function(){
        window.prettyPrint && prettyPrint()
    });

    $('div.modal-box').modalBox();
    $('div.modalBox.active').modalBox("open");

    var text = false;

    $(document).on('click', "a.modal-box", function(e){
        e.preventDefault();

        var api = $( $(this).attr("href") ).data('modalBox');

        if ( ! text ) {
            text  = $( '#demoModal' ).find('.prettyprint').html();
        }

        if ( $(this).data('animation-open-duration') ) {
            api.options.openAnimationDuration = $(this).data('animation-open-duration');
            api.options.closeAnimationDuration = $(this).data('animation-close-duration');
        } else {
            api.options.openAnimationDuration = 500;
            api.options.closeAnimationDuration = 500;
        }

        api.options.openAnimationEffect = $(this).data('animation-open');
        api.options.closeAnimationEffect = $(this).data('animation-close');

        var text1;
        text1 = text.replace("___1___", api.options.openAnimationEffect);
        text1 = text1.replace("___2___", api.options.closeAnimationEffect);

        $( $(this).attr("href") ).find('.prettyprint').html(text1);

        api.open();
    });
});