export function buildSplashpageContent() {
  const splashpageContent = document.createElement("div");
  splashpageContent.id = "splashscreenContent";
  splashpageContent.innerText = "Splashpage Content";

  const mainContent = document.getElementById("mainContent");

  mainContent.innerHTML = "";
  mainContent.append(splashpageContent);
}
