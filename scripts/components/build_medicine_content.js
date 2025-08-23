import { medicinePageData } from "../content/medicineSectionData.js";

export function build_medicine_content(serverURL) {
  const mainContent = document.getElementById("mainContent");
//   mainContent.innerHTML = "";

  const medicalSection = document.createElement("div");
  medicalSection.id = "medicalSection";
  medicalSection.className = "pageElements"
  mainContent.append(medicalSection);

//   buildSidebar();
  buildMedicineContentWindow();

  function buildMedicineContentWindow() {
    const medicineContent = document.createElement("div");
    medicineContent.id = "medicineContent";

    const medicalContentInitialHeader = document.createElement("h1");
    medicalContentInitialHeader.innerText = "What is Medicine?";

    const medicalContentInitialParagraph_1 = document.createElement("p");
    medicalContentInitialParagraph_1.innerText =
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non ipsam delectus nobis incidunt voluptate earum officia harum reprehenderit perferendis, cumque ex enim placeat soluta eaque suscipit quam reiciendis cupiditate accusamus fugit deserunt. Temporibus inventore provident odio soluta iusto, magni nemo ducimus, corporis quidem animi asperiores ad. Earum error porro eius voluptas temporibus quam cum ut placeat atque iure repellendus facilis ratione officiis velit repellat modi reiciendis, nulla quos optio illo recusandae! Reprehenderit eum tempora laboriosam nisi alias, natus laborum est, voluptate odio, quibusdam consectetur animi provident ratione cupiditate minus quisquam mollitia ad perspiciatis saepe consequatur sed! Voluptatum tempora odit fuga voluptates! Molestias iste magnam, fuga pariatur quia, magni similique est facilis explicabo, maiores nobis eveniet non nostrum illo voluptate molestiae fugit dolore voluptatibus tenetur voluptatum laboriosam ab. Sed facere eligendi, esse, earum, distinctio sit officia fugiat culpa amet voluptatibus similique ipsam id quaerat tempore et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non ipsam delectus nobis incidunt voluptate earum officia harum reprehenderit perferendis, cumque ex enim placeat soluta eaque suscipit quam reiciendis cupiditate accusamus fugit deserunt. Temporibus inventore provident odio soluta iusto, magni nemo ducimus, corporis quidem animi asperiores ad. Earum error porro eius voluptas temporibus quam cum ut placeat atque iure repellendus facilis ratione officiis velit repellat modi reiciendis, nulla quos optio illo recusandae! Reprehenderit eum tempora laboriosam nisi alias, natus laborum est, voluptate odio, quibusdam consectetur animi provident ratione cupiditate minus quisquam mollitia ad perspiciatis saepe consequatur sed! Voluptatum tempora odit fuga voluptates! Molestias iste magnam, fuga pariatur quia, magni similique est facilis explicabo, maiores nobis eveniet non nostrum illo voluptate molestiae fugit dolore voluptatibus tenetur voluptatum laboriosam ab. Sed facere eligendi, esse, earum, distinctio sit officia fugiat culpa amet voluptatibus similique ipsam id quaerat tempore et.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non ipsam delectus nobis incidunt voluptate earum officia harum reprehenderit perferendis, cumque ex enim placeat soluta eaque suscipit quam reiciendis cupiditate accusamus fugit deserunt. Temporibus inventore provident odio soluta iusto, magni nemo ducimus, corporis quidem animi asperiores ad. Earum error porro eius voluptas temporibus quam cum ut placeat atque iure repellendus facilis ratione officiis velit repellat modi reiciendis, nulla quos optio illo recusandae! Reprehenderit eum tempora laboriosam nisi alias, natus laborum est, voluptate odio, quibusdam consectetur animi provident ratione cupiditate minus quisquam mollitia ad perspiciatis saepe consequatur sed! Voluptatum tempora odit fuga voluptates! Molestias iste magnam, fuga pariatur quia, magni similique est facilis explicabo, maiores nobis eveniet non nostrum illo voluptate molestiae fugit dolore voluptatibus tenetur voluptatum laboriosam ab. Sed facere eligendi, esse, earum, distinctio sit officia fugiat culpa amet voluptatibus similique ipsam id quaerat tempore et.`;

const medicalContentInitialParagraph_2 = document.createElement("p")
medicalContentInitialParagraph_2.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non ipsam delectus nobis incidunt voluptate earum officia harum reprehenderit perferendis, cumque ex enim placeat soluta eaque suscipit quam reiciendis cupiditate accusamus fugit deserunt. Temporibus inventore provident odio soluta iusto, magni nemo ducimus, corporis quidem animi asperiores ad. Earum error porro eius voluptas temporibus quam cum ut placeat atque iure repellendus facilis ratione officiis velit repellat modi reiciendis, nulla quos optio illo recusandae! Reprehenderit eum tempora laboriosam nisi alias, natus laborum est, voluptate odio, quibusdam consectetur animi provident ratione cupiditate minus quisquam mollitia ad perspiciatis saepe consequatur sed! Voluptatum tempora odit fuga voluptates! Molestias iste magnam, fuga pariatur quia, magni similique est facilis explicabo, maiores nobis eveniet non nostrum illo voluptate molestiae fugit dolore voluptatibus tenetur voluptatum laboriosam ab. Sed facere eligendi, esse, earum, distinctio sit officia fugiat culpa amet voluptatibus similique ipsam id quaerat tempore et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non ipsam delectus nobis incidunt voluptate earum officia harum reprehenderit perferendis, cumque ex enim placeat soluta eaque suscipit quam reiciendis cupiditate accusamus fugit deserunt. Temporibus inventore provident odio soluta iusto, magni nemo ducimus, corporis quidem animi asperiores ad. Earum error porro eius voluptas temporibus quam cum ut placeat atque iure repellendus facilis ratione officiis velit repellat modi reiciendis, nulla quos optio illo recusandae! Reprehenderit eum tempora laboriosam nisi alias, natus laborum est, voluptate odio, quibusdam consectetur animi provident ratione cupiditate minus quisquam mollitia ad perspiciatis saepe consequatur sed! Voluptatum tempora odit fuga voluptates! Molestias iste magnam, fuga pariatur quia, magni similique est facilis explicabo, maiores nobis eveniet non nostrum illo voluptate molestiae fugit dolore voluptatibus tenetur voluptatum laboriosam ab. Sed facere eligendi, esse, earum, distinctio sit officia fugiat culpa amet voluptatibus similique ipsam id quaerat tempore et.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non ipsam delectus nobis incidunt voluptate earum officia harum reprehenderit perferendis, cumque ex enim placeat soluta eaque suscipit quam reiciendis cupiditate accusamus fugit deserunt. Temporibus inventore provident odio soluta iusto, magni nemo ducimus, corporis quidem animi asperiores ad. Earum error porro eius voluptas temporibus quam cum ut placeat atque iure repellendus facilis ratione officiis velit repellat modi reiciendis, nulla quos optio illo recusandae! Reprehenderit eum tempora laboriosam nisi alias, natus laborum est, voluptate odio, quibusdam consectetur animi provident ratione cupiditate minus quisquam mollitia ad perspiciatis saepe consequatur sed! Voluptatum tempora odit fuga voluptates! Molestias iste magnam, fuga pariatur quia, magni similique est facilis explicabo, maiores nobis eveniet non nostrum illo voluptate molestiae fugit dolore voluptatibus tenetur voluptatum laboriosam ab. Sed facere eligendi, esse, earum, distinctio sit officia fugiat culpa amet voluptatibus similique ipsam id quaerat tempore et.` 

const medicinePageParagraphContainer = document.createElement("div")
medicinePageParagraphContainer.id = "medicinePageParagraphContainer"
medicinePageParagraphContainer.append(medicalContentInitialParagraph_1,
      medicalContentInitialParagraph_2)

    medicineContent.append(
      medicalContentInitialHeader,
      medicinePageParagraphContainer
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
    medicineContent.style.backgroundSize = "cover";

    for (let j = 0; j < medicineDataListing.paragraphs.length; j++) {
      const paragraph = medicineDataListing.paragraphs[j];

      const medicalListingParagraph = document.createElement("p");
      medicalListingParagraph.className = "medicalListingParagraphs";
      medicalListingParagraph.innerText = paragraph;

      heading.after(medicalListingParagraph);
    }
  }
}
