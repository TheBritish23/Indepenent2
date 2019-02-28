$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Daniel Craig</li>");
    $("ul#webpage").prepend("<li>Looks a like a blonde chimp</li>");
    $('li').click(function() {
      alert('Mediocre');
      $('li').css('background-color', 'green');
    });
  });


  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Roger Moore</li>");
    $("ul#webpage").prepend("<li>Some of his movies were good</li>");
    $('li').click(function() {
      alert('Good');
      $('li').css('background-color', 'green');
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Pierce Brosnan</li>");
    $("ul#webpage").prepend("<li>Also pretty good</li>");
    $('li').click(function() {
      alert('good');
      $('li').css('background-color', 'green');
    });
  });

  $(document).ready(function() {
    $("form#lottery").submit(function(event) {
        var age = parseInt($("input#age").val());
        var gender = $("select#gender").val();

        if (age) {
          var cash = (100 - age) * 3;
          if (gender === 'male' && age < 26) {
            cash += 50;
          }

          $("#lottery").empty().append(quote);
          $("#cash").show();
        } else {
          alert('Please enter your age.');
        }

        event.preventDefault();
      });
    });

    $(document).ready(function() {
      $("button#green").click(function() {
        $("body").removeClass();
        $("body").css("background-color", "green");
        $("body").addClass("green-background");
      });

      $("button#yellow").click(function() {
        $("body").removeClass();
        $("body").css("background-color", "yellow");
        $("body").addClass("yellow-background");
      });

      $("button#red").click(function() {
        $("body").removeClass();
        $("body").css("background-color", "red");
        $("body").addClass("red-background");
      });
    });
  });
