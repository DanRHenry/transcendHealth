export function build_b_section(serverURL, heading, summary, image) {
    console.log(image)
  const container = document.createElement("div");
  container.className = "container";

  const imageSection = document.createElement("div");
  imageSection.className = "image-section";

  const imageSource = document.createElement("img");
  imageSource.src = image;
  imageSource.alt = "Pouring essential oils";

  imageSection.append(imageSource);

  const textSection = document.createElement("div");
  textSection.className = "text-section";
  const textSectionHeader = document.createElement("h2");
  textSectionHeader.innerText = heading;
  const textSectionParagraph = document.createElement("p");
  textSectionParagraph.innerText = summary;

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttons";

  const infoAnchor = document.createElement("a");
  infoAnchor.href = "#info";
  infoAnchor.className = "btn-info";
  infoAnchor.innerText = "INFO";

  const bookAnchor = document.createElement("a");
  bookAnchor.className = "btn-appointment";
  bookAnchor.href = "#scheduleAppointmentContent";
  bookAnchor.innerText = "BOOK APPOINTMENT"

  buttonContainer.append(infoAnchor, bookAnchor);

  textSection.append(textSectionHeader, textSectionParagraph, buttonContainer);

  document.getElementById('mainContent').append(container)

  const containers = document.getElementsByClassName("container")

  let direction
  for (let i = 0; i < containers.length; i++) {
    if (i === containers.length-1) {
        direction = i
    }
  }
  if (direction %2 === 1) {
      container.append(imageSection, textSection);
  } else {
      container.append(textSection, imageSection);
}

}

/* 
<div class="container">
  <!-- Left Image -->
  <div class="image-section">
    <img src="your-image.jpg" alt="Pouring essential oils">
  </div>

  <!-- Right Text -->
  <div class="text-section">
    <h2>Topic Discussion</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus accumsan lorem, nec ultricies mi volutpat non.</p>
    <div class="buttons">
      <a href="#info" class="btn-info">INFO</a>
      <a href="#book" class="btn-appointment">BOOK APPOINTMENT</a>
    </div>
  </div>
</div>
*/
