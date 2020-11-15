$(document).ready(function(){

  $('.uutinen h3').click(function(e){
      $(e.target.nextElementSibling).slideToggle("slow");
  });

});
