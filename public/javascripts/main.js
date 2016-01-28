$(document).ready(function() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('.btn-green').on('click', function() {
    	$('.modal').modal();
    });
});