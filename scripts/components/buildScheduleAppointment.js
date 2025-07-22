export function buildScheduleAppointment() {
  const scheduleContent = document.createElement("div");
  scheduleContent.id = "scheduleAppointmentContent";
  // scheduleContent.innerText = "Schedule Appointment Content";

  const mainContent = document.getElementById("mainContent");

  mainContent.innerHTML = "";
  mainContent.append(scheduleContent);

  const contactTextContainer = document.createElement("div")
  contactTextContainer.id = "contactTextContainer"

  const contactTextHeader = document.createElement("h1")
  contactTextHeader.innerText = "Contact Us"

  const contactTextParagraph = document.createElement('p')
  contactTextParagraph.innerText = `Lorem  ipsum  dolor  sit  amet,  consectetur 
adipiscing  elit.  Pellentesque  dapibus  accumsan 
rhoncus.  Mauris  urna  augue,  mattis  id  facilisis 
mattis, semper ac diam. Praesent bibendum mattis 
ligula,  nec  pellentesque  massa  iaculis  sit  amet. Etiam  venenatis  enim  ut  nisi  porttitor  laoreet. 
Nullam  venenatis  faucibus  elit  in  iaculis.  In  hac 
habitasse platea dictumst. Curabitur a arcu ipsum. 
Sed  nec  magna  tempor,  dignissim  turpis  sed, cursus turpis. Mauris tincidunt scelerisque metus, 
congue vehicula tortor ullamcorper ac. Curabitur gravida euismod sem, ac sodales lorem iaculis sed. 
Pellentesque  auctor,  tortor  sit  amet  scelerisque 
porttitor,  libero  ipsum  tincidunt  lorem,  sed faucibus  nunc  risus  et  orci.  Quisque  eu  ex  sed 
massa ultrices venenatis.`

contactTextContainer.append(contactTextHeader, contactTextParagraph)


const contactFormContainer = document.createElement("div")
contactFormContainer.id = "contactFormContainer"

const contactForm = document.createElement('form')

const nameInput = document.createElement("input")
nameInput.required = true;
nameInput.id = "nameInput"
nameInput.placeholder="First & Last Name"

const emailInput = document.createElement("input")
emailInput.required = "true"
emailInput.id = "emailInput"
emailInput.placeholder = "youremail@email.com"

const phoneInput = document.createElement("input")
phoneInput.type = "tel"
phoneInput.id = "phoneInput";
phoneInput.name = "phoneInput";
phoneInput.pattern = '[0-9]{3}.[0-9]{3}.[0-9]{4}'
phoneInput.required = true;
phoneInput.placeholder = "555.555.5555"

const contactMessageBody = document.createElement("textarea")
contactMessageBody.id = "contactMessageBody"
contactMessageBody.name = "contactMessageBody"
contactMessageBody.required = true;
contactMessageBody.placeholder = `Please provide any information that 
you believe to be of importance.`

const contactSubmitBtn = document.createElement('input')
contactSubmitBtn.id = "contactSubmitBtn"
contactSubmitBtn.type = "submit"
contactSubmitBtn.value = "Submit"


contactForm.append(nameInput, emailInput, phoneInput, contactMessageBody, contactSubmitBtn)
contactFormContainer.append(contactForm)

scheduleContent.append(contactTextContainer, contactFormContainer)
}

// formsubmit.co may not be trustworthy
// formspree.io may be a good option for sending emails
// https://search.brave.com/search?q=netlify+form+email+submission&summary=1&conversation=efa3cfdce310da62b14e17&spellcheck=0


//https://www.netlify.com/pricing/