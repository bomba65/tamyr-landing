$( document ).ready(function() {
  $( "nav .nav-item a, .scroll-link" ).click(function( event ) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 71 }, 500);
  });
});

$('.partners-list').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  prevArrow: '<img class="slick-arrow slick-arrow-left" src="../assets/img/icons-arrow-left.png" alt="arrow" />',
  nextArrow: '<img class="slick-arrow slick-arrow-right" src="../assets/img/icons-arrow-left.png" alt="arrow" />',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$(document).ready(function() {
	$('.popup-pdf').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});
