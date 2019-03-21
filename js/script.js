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
    console.log(Q1)
    console.log(Q2)
    console.log(Q3)
    console.log(Q4)
    console.log(Q5)
    if(Q1==="home"){
       csharp++;
    } else if(Q1==="office"){
       ruby++;
    } else if(Q1==="both"){
       java++;
    if(Q2==="modest"){
       php++;
    } else if(Q2==="medium"){
       css++;
    } else if(Q2==="BIG(🎵I want it all!🎵)"){
       java++;
    if(Q3==="yes"){
       php++;
    } else if(Q3==="Depends on who they are."){
       csharp++;
    } else if(Q3==="Hell no!!"){
       css++;
    if(Q4==="internal software"){
       csharp++;
    } else if(Q4==="user interface"){
       java++;
    } else if(Q4==="content management"){
       php++;
                       

      event.preventDefault();
     });
   });
