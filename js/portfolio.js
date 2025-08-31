function openModal(id) {
    document.getElementById('modal-' + id).classList.remove('hidden');
  }

  function closeModal(id) {
    document.getElementById('modal-' + id).classList.add('hidden');
  }

const toggleBtn = document.getElementById("toggleBtn");
  const intro = document.getElementById("intro");
  let isOpen = false;

  toggleBtn.addEventListener("click", () => {
    if (!isOpen) {
      intro.style.maxHeight = intro.scrollHeight + "px"; // 펼치기
      toggleBtn.textContent = "▲";
    } else {
      intro.style.maxHeight = "0px"; // 닫기
      toggleBtn.textContent = "▼";
    }
    isOpen = !isOpen;
  });