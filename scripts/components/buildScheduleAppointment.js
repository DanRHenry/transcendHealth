export function buildScheduleAppointment() {
  const scheduleContent = document.createElement("div");
  scheduleContent.id = "scheduleAppointmentContent";
  scheduleContent.innerText = "Schedule Appointment Content";

  const mainContent = document.getElementById("mainContent");

  mainContent.innerHTML = "";
  mainContent.append(scheduleContent);
}

// formsubmit.co may not be trustworthy
// formspree.io may be a good option for sending emails
// https://search.brave.com/search?q=netlify+form+email+submission&summary=1&conversation=efa3cfdce310da62b14e17&spellcheck=0


//https://www.netlify.com/pricing/