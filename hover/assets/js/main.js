$(document).ready(function() {

  $('.number').mouseenter(function() {
    $('.footnote').addClass('showme');
  });
  $('.number').mouseleave(function() {
     $('.footnote').removeClass('showme');
     $(document).ready(function() {
  $('.image').click(function() {
    $(this).toggleClass('enlarge');
  
});
