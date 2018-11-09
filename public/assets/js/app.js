$(function() {

    $(".change").on("click", function(event) {
      var id = $(this).attr("data-id");
      var newAte = $(this).attr("data-newAte");
  
      var newAteState = {
        ate: newAte
  
      };
  
      console.log(newAteState);
      // Send the PUT request.
      $.ajax("/api/veggieburgers/" + id, {
        type: "PUT",
        data: newAteState
      }).then(
        function() {
          console.log("changed ate to", newAte);
          // Reload the page to get the updated list
        
        }
      );
    });
  

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newVeggieburger = {
        type: $("#vb").val().trim(),
        ate: $("[name=ate]:checked").val().trim()
    };


    $.ajax("/api/veggieburgers", {
        type: "POST",
        data: newVeggieburger
    }).then(
        function() {
            console.log("new burger");
            location.reload();
        });
    });


    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/veggieburgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          });
      });
    });
    