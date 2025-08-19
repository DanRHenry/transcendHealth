export function build_about_content(serverURL) {
  const aboutContent = document.createElement("div");
  aboutContent.id = "aboutContent";

  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = "";

  const aboutTextSection = document.createElement("div")
  aboutTextSection.id = "aboutTextSection"

  const aboutHeader = document.createElement("h1")
  aboutHeader.id = "aboutHeader"
  aboutHeader.innerText = "Dr. Trinh Tran"

  const aboutParagraph1 = document.createElement("p")
  aboutParagraph1.innerText = `Dr. Trinh Tran is a board-certified rheumatologist with a deep commitment to patient-centered care and a distinguished background in both academic medicine and private practice. Born in Vietnam, Dr. Tran pursued her medical education internationally, beginning with medical school in London, England. She went on to complete her internal medicine residency at the Medical College of Wisconsin and advanced her specialty training with a rheumatology fellowship at the renowned Duke University Medical Center.`

const aboutParagraph2 = document.createElement("p")
aboutParagraph2.innerText = `Since 2005, Dr. Tran has been dedicated to the diagnosis and management of complex autoimmune and musculoskeletal conditions. After several years in conventional rheumatology practice, she founded her own private practice in 2012, where she combines evidence-based medicine with a personalized approach tailored to each patient’s unique journey.`

const aboutParagraph3 = document.createElement("p")
aboutParagraph3.innerText = `In recent years, Dr. Tran has expanded her practice to incorporate functional and cellular medicine, a science-driven approach that emphasizes restoring health and vitality at the root level. This includes the use of therapeutic nutrients, medical peptides, and lifestyle interventions to support immune function, optimize cellular repair, and promote long-term wellness. Her integrative care model is grounded in clinical research and is designed to help patients not only manage disease but also regain functionality, improve energy, and extend their healthspan.`

const aboutParagraph4 = document.createElement("p")
aboutParagraph4.innerText = `Dr. Tran also integrates state-of-the-art regenerative technologies into her clinical approach, with a focus on healing the body at the cellular and stem cell level. These advanced modalities are designed to stimulate tissue repair, reduce inflammation, and restore optimal function from within. By combining the latest in biomedical innovation with personalized medicine, Dr. Tran empowers her patients to take an active role in their recovery and long-term vitality.`

const aboutParagraph5 = document.createElement("p")
aboutParagraph5.innerText = `Dr. Tran also understands the powerful connection between the mind and body in healing. She offers mindfulness meditation training to help patients manage stress, reduce inflammation, and support emotional and physical well-being. Her compassionate and integrative approach empowers patients to take an active role in their healing journey—body, mind, and spirit.`

const aboutPictureHolder = document.createElement("div")
aboutPictureHolder.id = "aboutPictureHolder"

const aboutPicture = document.createElement("img")
aboutPicture.src = `${serverURL}/assets/yousef-espanioly-DA_tplYgTow-unsplash.jpg`
aboutPicture.alt = "about image"

aboutPictureHolder.appendChild(aboutPicture)
  aboutTextSection.append(aboutHeader, aboutParagraph1, aboutParagraph2, aboutParagraph3, aboutParagraph4, aboutParagraph5)
  aboutContent.append(aboutTextSection, aboutPictureHolder)
  mainContent.append(aboutContent);
}
