$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "http://193.191.177.8:10578/webshopREST/rest/products",
        dataType: "json",
        success: function(json){
            $('#hier').empty()
            $(json).each(function(index, product) {
                $('#hier').append($('<li />').text( product.productId + ': ' +product.name ).attr('class', 'list-group-item'));
                });
        },
        error: function(json){
            alert("Something went wrong while trying to retrieve your products");
        },
    });

});