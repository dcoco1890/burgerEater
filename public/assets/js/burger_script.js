$(document).ready(function() {


    // sends an update to the burgers api which changes the burger
    // (with an id that's passed to function) to devoured
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

    $(".add-burg").on("click", function() {
        $("#add").slideToggle("slow");
    });

    $(".submit").on("click", function(e) {
        e.preventDefault();
        var newBurg = $("#new-burg").val().trim();
        var burg = {
            name: newBurg,
            devoured: false
        };


        if (newBurg) {
            $.post("/api/burgers", burg, () => {
                location.reload();
            })
        } else {
            $(".no-input").text("No name detected");
        }
    })



});