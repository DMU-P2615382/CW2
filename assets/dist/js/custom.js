// เปิดเมนูด้านข้าง
function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}
// ซ่อน เมนูด้านข้าง
function closeNav() {
  document.getElementById("mySidenav").style.setProperty("display", "none", "important")
}
// คลิกที่เนื้อหา แล้วเรียกฟังก์ชั่น ซ่อนเมนูด้านข้าง
$('#mainContainer').click(function (e) { 
  closeNav()
});

