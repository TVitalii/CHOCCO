 const slider = $(".goods").bxSlider({
pager: false,
controls: false

  });

  $(".slider__control-prev").click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
  })

  $(".slider__control-next").click(e => {
    e.preventDefault();
    slider.goToNextSlide();
  })