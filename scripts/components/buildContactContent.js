export function buildContactContent() {
  const contactContent = document.createElement("div");
  contactContent.id = "contactContent";
  contactContent.innerText = "Contact Content";

  const mainContent = document.getElementById("mainContent");

  mainContent.innerHTML = "";
  mainContent.append(contactContent);
}
