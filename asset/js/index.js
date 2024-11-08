// เลือก element ที่ต้องการใช้งาน
const animatedContainer = document.getElementById("animated-container");
const navMenu = document.getElementById("nav-menu");

// ฟังก์ชัน toggle menu เมื่อคลิกที่ hamburger icon
function toggleMenu() {
  // เปลี่ยน class ของ animatedContainer เป็น 'change' เพื่อเปลี่ยนเป็น icon กากบาท
  animatedContainer.classList.toggle("change");

  // เปลี่ยน class ของ navMenu เป็น 'show-menu' เพื่อเปิด-ปิดเมนู
  navMenu.classList.toggle("show-menu");
}

// เพิ่ม event listener สำหรับคลิกที่ hamburger icon
animatedContainer.addEventListener("click", toggleMenu);
