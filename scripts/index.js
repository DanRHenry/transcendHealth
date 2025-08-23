import { serverURL } from "../serverURL.js";
import { heroCarouselContent } from "./content/heroCarouselContent.js";
import { build_landing_page_content } from "./components/build_landing_page_content.js";
import { build_about_content } from "./components/build_about_content.js";
import { build_schedule_appointment } from "./components/build_schedule_appointment.js";
import { build_medicine_content } from "./components/build_medicine_content.js";

import { build_b_section } from "./components/build_b_section.js";
import { medicinePageData } from "./content/medicineSectionData.js";

const heroContentTransitionSpeed = 6000; // in milliseconds

const logoBtn = document.getElementById("logo");
const aboutBtn = document.getElementById("aboutBtn");
const scheduleApptBtn = document.getElementById("scheduleApptBtn");
const medicineBtn = document.getElementById("medicineBtn");
const addressInfoBtn = document.getElementById("addressInfo");

// logoBtn.addEventListener("click", () => {goToAnchor("landingpageContent")});

// aboutBtn.addEventListener("click", () => {goToAnchor("aboutContent")})

// scheduleApptBtn.addEventListener("click", () => {goToAnchor("scheduleAppointmentContent")})

function buildLandingPageAndHeaderCarousel () {
  build_landing_page_content(serverURL, heroCarouselContent);

  const setHeroChangeInterval = setInterval(() => {
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
  clearInterval(setHeroChangeInterval);
}

function buildAboutSection() {
    build_about_content(serverURL)
}

function buildScheduleApptSection () {
    build_schedule_appointment()
}

function buildMedicineSection () {
    build_medicine_content()
}

//! Process Medicine Page Data (build b section) 
function processMedicinePageData() {
for (let i = 0; i < medicinePageData.length; i++) {
    build_b_section(serverURL, medicinePageData[i].heading, medicinePageData[i].summary, medicinePageData[i].photo)
}

let index = 0;

const setHeroChangeInterval = setInterval(() => {
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

buildLandingPageAndHeaderCarousel()
buildAboutSection()
buildScheduleApptSection()
buildMedicineSection()
processMedicinePageData()

//todo work on animation for new content here
const options = {
    root: document.getElementById("scheduleAppointmentContent"),
    rootMartin: "0px",
    scrollMargin: "0px",
    threshold: 1.0,
};

const observer = new IntersectionObserver(scrollcallback, options)

function scrollcallback (entries, observer) {
    entries.array.forEach(entry => {
        if (entry.isIntersecting) {
            let elem = entry.target;
            if (entry.intersectionRatio >= 0.75) {
                intersectionCounter++
                console.log("hit")
            }
        }
    });
}

const target = document.querySelector("scheduleAppointmentContent")

