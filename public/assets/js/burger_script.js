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
        moveBurger(id);
    });

    function getBurgs() {

    }


});