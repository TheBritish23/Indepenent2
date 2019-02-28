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

  // Business logic not included because it will remain the same.

  var add = function(number1, number2) {
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  };




  $(document).ready(function() {
    $("form#calculator").submit(function() {
      event.preventDefault();
      var number1 = parseInt($("#input1").val());
      var number2 = parseInt($("#input2").val());
      var operator = $("input:radio[name=operator]:checked").val();
      var result;
      if (operator === "add") {
        result = add(number1, number2);
      } else if (operator === "subtract") {
        result = subtract(number1, number2);
      } else if (operator === "multiply") {
        result = multiply(number1, number2);
      } else if (operator === "divide") {
        result = divide(number1, number2);
      }
      $("#output").text(result);
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
