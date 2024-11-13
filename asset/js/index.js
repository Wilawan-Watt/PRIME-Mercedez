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



// =============== Remove Menu mobile ===============
const navLink = document.querySelectorAll('.nav_link');
const animatedChange = document.getElementById("animated-container");

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When you click on each nav_link, you remove the show-menu class
    navMenu.classList.remove('show-menu');
    animatedChange.classList.toggle("change");
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// =============== Add Blur Header ===============
const blurHeader = () => {
  const header = document.getElementById('header');
  if (window.scrollY >= 50) {
    header.classList.add('blur-header');
    console.log("Added blur-header");
  } else {
    header.classList.remove('blur-header');
    console.log("Removed blur-header");
  }
}
window.addEventListener('scroll', blurHeader);

