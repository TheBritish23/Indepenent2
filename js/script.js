var php = 0;
var csharp = 0;
var ruby = 0;
var java = 0;
$(document).ready(function() {
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var Q1 = $("input:radio[name=enviroment]:checked").val();
    var Q2 = $("input:radio[name=Area]:checked").val();
    var Q3 = $("input:radio[name=reliance]:checked").val();
    var Q4 = $("input:radio[name=coding]:checked").val();
    var Q5 = $("input:radio[name=computer]:checked").val();

    if(Q1==="home"){
       csharp++;
    } else if(Q1==="office"){
       ruby++;
    } else if(Q1==="both"){
       java++;
    }
    if(Q2==="modest"){
       php++;
    } else if(Q2==="medium"){
       csharp++;
    } else if(Q2==="BIG(🎵I want it all!🎵)"){
       java++;
    }
    if(Q3==="yes"){
       php++;
    } else if(Q3==="Depends on who they are."){
       csharp++;
    } else if(Q3==="hell no!!"){
       ruby++;
    }
    if(Q4==="internal software"){
       csharp++;
    } else if(Q4==="user interface"){
       java++;
    } else if(Q4==="content management"){
       php++;
    } else if(Q4==="interactive web applications") {
       ruby++;
    }
    if(Q5==="pc"){
      ruby++;
    } else if(Q5==="mac"){
      php++;
    } else if (Q5==="linux"){
      csharp++;
    }
    console.log(csharp)
    console.log(php)
    console.log(java)
    console.log(ruby)

    $('results').append("<li>"(#:"+csharp+"</li>")
    $('results').append("<li>"(java:"+java+"</li>")
    $(".results").append("<li class='r-item'>C#"+csharp+"</li>")

       event.preventDefault();
      });
    });
  });
