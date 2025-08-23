export function show_find_us() {
  const mainContent = document.getElementById("mainContent");
  // mainContent.innerHTML = "";

  const content = document.getElementById("hiddenMap")
  content.style.visibility = "visible"
  content.style.height = "100vh";
  content.style.flex = "1"
}