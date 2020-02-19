$(document).ready(function() {

    $(".change-eat").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");

        let newBurgerState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT", 
            data: newBurgerState
        }).then(function() {
            console.log(newBurgerState);
            location.reload();
        });

    });

//     $(".create-form").on("submit", function(event) {
//         event.preventDefault();

//         let newBurger = $("#ca").val().trim();

//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(function() {
//             console.log(newBurger);
//             location.reload();
//         });

//     });



// });

    
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var burger_data = { 
          burger_name: $(".burger_id").val().trim()
      }
    //   console.log(burger_id);
      $.ajax({
        method: "POST",
        url: "/api/burgers",
        data: burger_data
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
    });
  });