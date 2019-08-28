$(document).ready(function() {

    // loading the "munch" sound for when the devour button is clicked
    // const munch = $("<audio>");
    // munch.attr("src", "/assets/audio/crunch.mp3");
    // console.log(munch);
    // // munch.trigger("play");

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
        // setTimeout(moveBurger(id), 5000);
        // const munch = $("<audio>");
        // munch.attr("src", "/assets/audio/crunch.mp3");
        // console.log(munch);
        // munch.trigger("play");
        var id = $(this).attr("data-id");
        $(this).parent().hide();
        moveBurger(id);

    });

    $(".text-info").on("click", function() {
        $("#add").slideToggle("slow");
        $("#new-burg").focus();

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