export function buildmedicineContent() {
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = "";
  const medicinePageData = [
    {
      name: "Regenerative & Longevity",
      heading: "Regenerative & Longevity Heading",
      paragraphs: [
        `Detection Testing Pagagraph One`,
        `Detection Testing Pagagraph Two`,
      ],
      backgroundPhoto: `url("../assets/jonas-degener-Hvl4NH9mF8M-unsplash.jpg")`,
    },
    {
      name: "Early Detection Testing",
      heading: "Early Detection Heading",
      paragraphs: [
        `Early Detection Testing Paragraph One`,
        `Early Detection Testing Paragraph Two`,
      ],
      backgroundPhoto: `url("../assets/sumup-Cy_RRgdwHxA-unsplash.jpg")`,
    },
    {
      name: "Regenerative Aesthetics",
      heading: "Regenerative Aesthetics Heading",
      paragraphs: ["", ""],
      backgroundPhoto: "",
    },
    {
      name: "Sexual Rejuvenation",
      heading: "Sexual Rejuvenation Heading",
      paragraphs: ["", ""],
      backgroundPhoto: "",
    },
  ];
  const medicalSection = document.createElement("div");
  medicalSection.id = "medicalSection";
  mainContent.append(medicalSection);

  buildSidebar();
  buildMedicineContentWindow();

  function buildMedicineContentWindow() {
    const medicineContent = document.createElement("div");
    medicineContent.id = "medicineContent";

    const medicalContentInitialHeader = document.createElement("h1");
    medicalContentInitialHeader.innerText = "Medicine Content Information Here";

    const medicalContentInitialParagraph = document.createElement("p");
    medicalContentInitialParagraph.innerText =
      "Medicine Content Starting Paragraph";

    medicineContent.append(
      medicalContentInitialHeader,
      medicalContentInitialParagraph
    );
    medicalSection.append(medicineContent);
  }

  function buildSidebar() {
    const sidebar = document.createElement("aside");
    sidebar.id = "sidebar";
    for (let i = 0; i < medicinePageData.length; i++) {
      const medicineDataListing = medicinePageData[i];

      const sidebarItem = document.createElement("div");
      sidebarItem.innerText = medicineDataListing.name;

      sidebarItem.addEventListener("click", () =>
        handleSidebarItemClick(medicineDataListing)
      );
      sidebar.appendChild(sidebarItem);
    }
    medicalSection.append(sidebar);
  }

  function handleSidebarItemClick(medicineDataListing) {
    document.getElementById("medicineContent").innerHTML = "";
    const heading = document.createElement("h1");
    heading.innerText = medicineDataListing.heading;

    const medicineContent = document.getElementById("medicineContent");
    medicineContent.append(heading);

    medicineContent.style.background = medicineDataListing.backgroundPhoto;
    medicineContent.style.backgroundSize = "contain";

    for (let j = 0; j < medicineDataListing.paragraphs.length; j++) {
      const paragraph = medicineDataListing.paragraphs[j];

      const medicalListingParagraph = document.createElement("p");
      medicalListingParagraph.className = "medicalListingParagraphs";
      medicalListingParagraph.innerText = paragraph;

      heading.after(medicalListingParagraph);
    }
  }
}
