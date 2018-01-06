$(document).ready(function() {
  function blockHeight() {
  	$('.data').each(function() {
  		if (($(this).hasClass('data_workspace')) || ($(this).hasClass('data_col'))) {
  			return;
  		}
  		else {
  			$(this).height($('.data_workspace').height());
  			console.log($('.data_workspace').height());	
    	};
  	});
  };
  blockHeight();
  $(window).resize(function() {
    $('.js').height($('.data_workspace').height());
    if ($(window).width() < 640) {
      $('.js').height($('.data-head_workspace').height() + $('.data-body_right').height() + 50);  
    };
  });
});
