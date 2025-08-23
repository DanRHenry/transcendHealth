import { serverURL } from "../../serverURL.js";
import { build_schedule_appointment } from "./build_schedule_appointment.js";

export function build_hero_carousel(heroCarouselContent) {


  for (let i = 0; i < heroCarouselContent.length; i++) {
    const heroContent = document.createElement("div");
    heroContent.className = "heroContent";
    heroContent.style.width = "100%"
    heroContent.style.height = "100%"

    const heroBackgroundImage = document.createElement("img")
    heroBackgroundImage.src = heroCarouselContent[i].heroImageUrl;
    heroBackgroundImage.className = "heroBackgroundImages"
    // heroContent.style.backgroundImage=`url("${heroCarouselContent[i].heroImageUrl}")`

    const headerText = document.createElement("div")
    headerText.innerText = heroCarouselContent[i].headerText
    headerText.className = "heroContentHeaders"

    const sentence = document.createElement('div')
    sentence.innerText = heroCarouselContent[i].sentence
    sentence.className = "heroContentSentences"

    //----------
    const buttonLine = document.createElement("div")
    buttonLine.className = "heroContentBtnLines"

    const heroSubjectBtn = document.createElement("button");
    heroSubjectBtn.innerText = `Button ${i + 1}`;

    const heroContactBtn = document.createElement("a")
    heroContactBtn.className = "heroScheduleBtns"
    heroContactBtn.href = "#scheduleAppointmentContent"
    heroContactBtn.innerText = "Book Appointment"
//     heroContactBtn.addEventListener("click",() =>{
//         console.log("clicked")
// build_schedule_appointment()
//     } )
    buttonLine.append(heroSubjectBtn, heroContactBtn)
    //----------


    heroContent.append(heroBackgroundImage, headerText, sentence, buttonLine);

    document.getElementById("heroCarousel").append(heroContent);
  }

  const heroContent = document.getElementsByClassName("heroContent");

  heroContent[0].style.opacity = 1;
  heroContent[0].style.zIndex = 1;
}
