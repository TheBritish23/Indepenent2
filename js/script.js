$(document).ready(function() {
  var over16 = confirm("Are you over 16? Click OK for yes or Cancel for no.");

    if (over16) {
      $('#drinks').show();
    } else {
      $('#under-16').show();
    }
  });

  var flavor = $("input:radio[name=flavor]:checked").val();

  $(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $('li').click(function() {
      alert('hi');
      $('li').css('background-color', 'green');
    });
  });


  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $('li').click(function() {
      alert('See Ya!');
      $('li').css('background-color', 'green');
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $('li').click(function() {
      alert('Hey!');
      $('li').css('background-color', 'green');
    });
  });
});
