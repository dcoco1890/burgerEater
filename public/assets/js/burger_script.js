$(document).ready(function() {

    function moveBurger(id) {

        $.ajax({
                method: "PUT",
                url: "/api/burgers/" + id
            })
            .then(function() {

                location.reload();
            });
    }

    $(".devour").on("click", function() {
        var id = $(this).attr("data-id");
        $(this).parent().hide();
        moveBurger(id);
    });

    function getBurgs() {

    }


});