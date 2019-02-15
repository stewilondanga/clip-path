var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();


$(function() {
      $('#triangle').on("click", function() {
        $('#cut').toggleClass("tri");

      });

      $('#circle').on("click", function() {
        $('#cut').toggleClass("cir");

      });

      $('#pentagon').on("click", function() {
        $('#cut').toggleClass("pent");

      });

      /*        	$('#rhombus').on("click", function () {
            		$('#cut').toggleClass("rhom");

            		});

            		});
