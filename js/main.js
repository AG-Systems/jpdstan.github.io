$(document).ready(function() {
  // materialize animations
  Materialize.fadeInImage('#header');
  Materialize.fadeInImage('#summary');
  Materialize.fadeInImage('#about');

  
  var options = [
    {selector: '#projects', offset: 30, callback: function() {
      Materialize.showStaggeredList('#projects');
    }},
    {selector: '#design', offset: 30, callback: function() {
      Materialize.showStaggeredList('#design');
    }}
  ];
  Materialize.scrollFire(options);

  

  // jquery animations
  $('#loading').toggle();
  // $('#summary').toggle();
  // $('#summary').slideToggle();
  
});
