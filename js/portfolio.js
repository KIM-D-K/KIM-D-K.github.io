let currentShopnovaIndex = 0;
const shopnovaImages = [
  "img/shopnova.jpg",
  "img/shopnova1.jpg",
  "img/shopnova2.jpg",
  "img/shopnova3.jpg"
];

function closeModal(projectName) {
  document.getElementById('modal-' + projectName).style.display = 'none';
}

function openModal(projectName) {
  document.getElementById('modal-' + projectName).style.display = 'block';
  showImageShopnova(currentShopnovaIndex);
}

function showImageShopnova(index) {
  const sliderImage = document.getElementById('slider-image-shopnova');
  sliderImage.src = shopnovaImages[index];
}

function prevImageShopnova() {
  currentShopnovaIndex = (currentShopnovaIndex - 1 + shopnovaImages.length) % shopnovaImages.length;
  showImageShopnova(currentShopnovaIndex);
}

function nextImageShopnova() {
  currentShopnovaIndex = (currentShopnovaIndex + 1) % shopnovaImages.length;
  showImageShopnova(currentShopnovaIndex);
}


let currentCampingIndex = 0;
const campingImages = [
  'img/CampingReservation.jpg',
  'img/CampingReservation1.jpg',
];

/* function prevImageCamping() {
  currentCampingIndex = (currentCampingIndex - 1 + campingImages.length) % campingImages.length;
  document.getElementById('slider-image-camping').src = campingImages[currentCampingIndex];
}

function nextImageCamping() {
  currentCampingIndex = (currentCampingIndex + 1) % campingImages.length;
  document.getElementById('slider-image-camping').src = campingImages[currentCampingIndex];
}
*/

function showImageCamping(index) {
  const sliderImage = document.getElementById('slider-image-camping');
  sliderImage.src = campingImages[index];
}

function prevImageCamping() {
  currentShopnovaIndex = (currentCampingIndex - 1 + campingImages.length) % campingImages.length;
  showImageCamping(currentCampingIndex);
}


function nextImageCamping() {
  currentCampingIndex = (currentCampingIndex + 1) % campingImages.length;
  showImageCamping(currentCampingIndex);
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
  
  
  
  
  

