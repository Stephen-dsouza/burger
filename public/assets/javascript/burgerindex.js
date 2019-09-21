$(document).ready(function () {
    $(".devour-button").on("click", function (event) {
        var answer = {
            id: $(this).data("newdevour")
        };

        console.log(answer);

        $.ajax("/update", {
                type: "POST",
                data: answer
            })
            //We get the reponse of the answers send and display to modal
            .then(
                function (response) {
                    console.log("res" + response);
                    console.log("suvvvvess");
                    location.reload();
                }
            );
        // var condition = "id = " + req.params.id;

        // console.log("condition", condition);

        // burger.update({
        //   devour: req.body.devour
        // }, condition, function(result) {
        //   if (result.changedRows == 0) {
        //     // If no rows were changed, then the ID must not exist, so 404
        //     return res.status(404).end();
        //   } else {
        //     res.status(200).end();
        //   }
        // });

    });

});