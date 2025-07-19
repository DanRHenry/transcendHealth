export function buildAboutContent() {
  const aboutContent = document.createElement("div");
  aboutContent.id = "aboutContent";
  aboutContent.innerText = "About Content";

  const mainContent = document.getElementById("mainContent");
  
  mainContent.innerHTML = "";
  mainContent.append(aboutContent);
}
