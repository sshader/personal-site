$(document).ready(function() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#general').on('click', function() {
    	$('#generalModal').modal('show');
    });

    $('#classProf').on('click', function() {
    	$('#classModal').modal('show');
    });

    $('#matching').on('click', function() {
    	$('#matchingModal').modal('show');
    });

    $('#summerbook').on('click', function() {
    	$('#coverModal').modal('show');
    });

    $('.remove.icon').on('click', function() {
    	$('.ui.modal').modal('hide');
    });
});