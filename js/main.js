$('#myTabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show')
})

$('.collapse').collapse();

$("#Genero").change(function () {

    var genero = "";

    $(this).find("option:selected").each(function () {
        genero = $(this).val();
    });

    if (genero === "301") {
        $('#Mujer').removeClass('hidden');
    } else {
        $('#Mujer').addClass('hidden');
    }
});

$(document).ready(function () {
    $('#IS').click(function () {
        $('#myModal').modal();
    })
})
