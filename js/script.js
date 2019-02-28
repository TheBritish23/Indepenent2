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
});
