export function build_schedule_appointment() {
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
  contactTextParagraph.innerText = `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, excepturi incidunt aliquid quis esse ducimus odio. Atque libero, quos dignissimos, eos aut soluta consequatur amet ipsa quibusdam, possimus temporibus earum minima odit impedit officiis. Odio iure consequatur voluptatum dicta dolore numquam quas architecto asperiores nam nesciunt. Veniam recusandae, possimus consequuntur ad facilis ea fugiat porro deleniti repudiandae! Architecto, laboriosam unde debitis atque quasi sint praesentium voluptatibus commodi maxime officiis adipisci saepe at vel nam fugit! Et quidem illum, dolor rem, molestias ut enim repellat minus voluptatum repudiandae saepe dicta, facere ipsa minima quisquam accusantium! Hic eos totam doloremque, eaque aperiam quas voluptate quae consequuntur accusantium blanditiis autem impedit fuga ut maxime eveniet repellat quidem ratione, non, unde sunt alias earum neque rerum suscipit?`

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