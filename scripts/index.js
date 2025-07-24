import { buildLandingpageContent } from "./components/buildLandingpageContent.js";
import { buildAboutContent } from "./components/buildAboutContent.js";
import { buildScheduleAppointment } from "./components/buildScheduleAppointment.js";
import { buildMedicineContent } from "./components/buildMedicineContent.js";
import { buildAddressContent } from "./components/buildAddressContent.js";
import { buildmap } from "./buildmap.js";
import {serverURL} from "../serverURL.js";

const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const scheduleApptBtn = document.getElementById("scheduleApptBtn");
const medicineBtn = document.getElementById("medicineBtn");
const addressInfoBtn = document.getElementById("addressInfo");

homeBtn.addEventListener("click", handleHomeBtnClick);
aboutBtn.addEventListener("click", handleAboutBtnClick);
scheduleApptBtn.addEventListener("click", handleScheduleApptBtnClick);
medicineBtn.addEventListener("click", handleMedicineBtnClick);
addressInfoBtn.addEventListener("click", handleAddressBtnClick);


function handleHomeBtnClick(e) {
        hidemap()

  e.preventDefault();
  clearBtnStyling();
  homeBtn.style.fontWeight = "bold";
  homeBtn.style.borderColor = "white";
  buildLandingpageContent(serverURL);
}

function handleAboutBtnClick(e) {
  e.preventDefault();
  clearBtnStyling();
  hidemap()
  aboutBtn.style.fontWeight = "bold";
  aboutBtn.style.borderColor = "white";
  buildAboutContent(serverURL);
}

function handleScheduleApptBtnClick(e) {
  e.preventDefault();
  clearBtnStyling();
  hidemap()
  scheduleApptBtn.style.fontWeight = "bold";
  scheduleApptBtn.style.borderColor = "white";
  buildScheduleAppointment();
}

function handleAddressBtnClick(e) {
  e.preventDefault();
  clearBtnStyling();
  addressInfoBtn.style.fontWeight = "bold";
  addressInfoBtn.style.borderColor = "white";
  buildAddressContent(addressContent);
}

function handleMedicineBtnClick(e) {
  e.preventDefault();
  clearBtnStyling();
  hidemap()
  medicineBtn.style.fontWeight = "bold";
  medicineBtn.style.borderColor = "white";
  buildMedicineContent(serverURL);
}

function clearBtnStyling() {
  const buttons = document.getElementsByClassName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style = null;
    // console.log(buttons[i])
  }
}

function hidemap () {
    const map = document.getElementById('hiddenMap')
    if (map) {
    map.style.visibility = "hidden"
    map.style.height = "0"
    map.style.flex = null
    }
}

    window.addEventListener("load", () => {
        buildmap()
    })

//homeBtn.click();
medicineBtn.click();

