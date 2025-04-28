let currentImageIndex = 0;
const images = [
  "img/shopnova.jpg",
  "img/shopnova1.jpg",
  "img/shopnova2.jpg",
  "img/shopnova3.jpg"
];

function openModal(projectName) {
  document.getElementById('modal-' + projectName).style.display = 'block';
  showImage(currentImageIndex);
}

function closeModal(projectName) {
  document.getElementById('modal-' + projectName).style.display = 'none';
}

function showImage(index) {
  const sliderImage = document.getElementById('slider-image');
  sliderImage.src = images[index];
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function toggleSkill(element) {
    const skillSection = element.nextElementSibling;
  
    if (element.classList.contains('open')) {
      element.classList.remove('open');
  
      skillSection.classList.remove('skill-open');
      skillSection.classList.add('skill-close');
  
      skillSection.addEventListener('animationend', function handler() {
        skillSection.style.display = 'none';
        skillSection.classList.remove('skill-close');
        skillSection.removeEventListener('animationend', handler);
      });
    } else {
      element.classList.add('open');
  
      skillSection.style.display = 'block';
      skillSection.classList.add('skill-open');
    }
}
  
  
  
  
  

