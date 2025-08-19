import { serverURL } from "../../serverURL.js";
import { build_schedule_appointment } from "./build_schedule_appointment.js";
const heroContentTransitionSpeed = 7000; // in milliseconds

export function build_hero_carousel() {
  const heroCarouselContent = [
    {
      heroImageUrl: `${serverURL}assets/1.jpg`,
      heroImageAlt: "carousel image 1",
      headerText: `First Header`,
      sentence: `description here`,
      linkURL: `https://www.google.com`,
    },
    {
      heroImageUrl: `${serverURL}assets/2.jpg`,
      heroImageAlt: "carousel image 2",
      headerText: `Second Header`,
      sentence: `description here`,
      linkURL: `https://bing.com`,
    },
    {
      heroImageUrl: `${serverURL}assets/3.jpg`,
      heroImageAlt: "carousel image 3",
      headerText: `Third Header`,
      sentence: `3rd description here`,
      linkURL: `https://duckduckgo.com`,
    },
  ];

  const heroCarousel = document.getElementById("heroCarousel");

  for (let i = 0; i < heroCarouselContent.length; i++) {
    const heroContent = document.createElement("div");
    heroContent.className = "heroContent";
    heroContent.style.width = "100%"
    heroContent.style.height = "100%"

    heroContent.style.backgroundImage=`url("${heroCarouselContent[i].heroImageUrl}")`

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

    const heroContactBtn = document.createElement("button")
    heroContactBtn.innerText = "Schedule"
    heroContactBtn.addEventListener("click",() =>{
        console.log("clicked")
build_schedule_appointment()
    } )
    buttonLine.append(heroSubjectBtn, heroContactBtn)
    //----------


    heroContent.append(headerText, sentence, buttonLine);

    document.getElementById("heroCarousel").append(heroContent);
  }

  let index = 0;
  const heroContent = document.getElementsByClassName("heroContent");

  heroContent[0].style.opacity = 1;
  heroContent[0].style.zIndex = 1;
  setInterval(() => {
    const heroContent = document.getElementsByClassName("heroContent");
    heroContent[index].style.opacity = 0;
    heroContent[index].style.zIndex = 0;

    if (index === heroCarouselContent.length - 1) {
      index = 0;
    } else {
      index++;
    }
    heroContent[index].style.opacity = 1;
    heroContent[index].style.zIndex = 1;

  }, heroContentTransitionSpeed);
}
