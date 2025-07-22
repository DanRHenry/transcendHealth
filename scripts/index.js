import { buildSplashpageContent } from "./components/buildSplashpageContent.js"
import {buildAboutContent} from "./components/buildAboutContent.js"
import {buildScheduleAppointment} from "./components/buildScheduleAppointment.js"
import { buildmedicineContent } from "./components/buildMedicineContent.js"
import { buildAddressContent } from "./components/buildAddressContent.js"

const homeBtn = document.getElementById("homeBtn")
const aboutBtn = document.getElementById("aboutBtn")
const scheduleApptBtn = document.getElementById("scheduleApptBtn")
const medicineBtn = document.getElementById("medicineBtn")
const addressInfoBtn = document.getElementById("addressInfo")

homeBtn.addEventListener("click", buildSplashpageContent)
aboutBtn.addEventListener("click", buildAboutContent)
scheduleApptBtn.addEventListener("click", buildScheduleAppointment)
medicineBtn.addEventListener("click", buildmedicineContent)
addressInfoBtn.addEventListener("click", buildAddressContent)

// buildSplashpageContent()
// buildAboutContent()
buildScheduleAppointment()
// buildAddressContent()
// buildmedicineContent()