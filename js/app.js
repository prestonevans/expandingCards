const images = document.querySelectorAll('img');
let intervalId;

galleryAutoPlay()

images.forEach((image) => {
  image.addEventListener('click', () => {
    clearInterval(intervalId);
    galleryAutoPlay()
    images.forEach((image) => image.classList.remove('active'));
    image.classList.add('active');
  });
});

function galleryAutoPlay() {
  intervalId = setInterval(() => {
    let activeIndex;
    images.forEach((image, index) => {
      if (image.classList.contains('active')) {
        activeIndex = index;
        image.classList.remove('active');
      }
    });
    if (activeIndex + 1 === images.length) {
      images[0].classList.add('active');
      return;
    }
    images[activeIndex + 1].classList.add('active');
  }, 4 * 1000);
}
