export function buildAboutContent() {
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
  aboutParagraph1.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, velit vel luctus vestibulum,  odio  lectus  volutpat  nibh,  sed  hendrerit  libero  arcu  sed  justo.  Mauris placerat vestibulum leo, fringilla sollicitudin dolor. Cras eu arcu elementum, luctus est 
quis, egestas justo. Suspendisse tincidunt eros ante, ac rutrum nunc consequat in. Fusce 
est purus, sodales hendrerit dapibus vitae, bibendum eget sem. Aliquam vulputate augue libero, at gravida urna semper pellentesque. In bibendum mi ac tortor faucibus, sed 
viverra velit rutrum. Etiam ultrices quis libero gravida malesuada.`

const aboutParagraph2 = document.createElement("p")
aboutParagraph2.innerText = `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis lorem vitae lorem euismod venenatis eu vel mauris. Fusce nec mauris ornare 
nisl dictum iaculis at ut ligula. Vestibulum dictum, nibh non aliquet ornare, nibh turpis 
semper lorem, in varius mi est nec erat. Maecenas blandit quis odio vel faucibus. Nam efficitur semper nibh, quis mattis lacus accumsan vel. Etiam cursus eros sit amet turpis 
malesuada  pretium  eget  ac  elit.  Suspendisse  in  eleifend  orci.  Orci  varius  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In congue malesuada 
lectus, ac porttitor mauris consequat eu. Donec id justo et leo maximus hendrerit quis vitae odio. Nam auctor lacinia enim consequat vulputate. Donec sit amet magna ut ligula 
dignissim sollicitudin ut ut augue. Phasellus dignissim finibus velit a mattis. In molestie 
consectetur sem, in suscipit augue auctor aliquet.`

const aboutPictureHolder = document.createElement("div")
aboutPictureHolder.id = "aboutPictureHolder"

const aboutPicture = document.createElement("img")
aboutPicture.src = "../assets/yousef-espanioly-DA_tplYgTow-unsplash.jpg"
aboutPicture.alt = "about image"

aboutPictureHolder.appendChild(aboutPicture)
  aboutTextSection.append(aboutHeader, aboutParagraph1, aboutParagraph2)
  aboutContent.append(aboutTextSection, aboutPictureHolder)
  mainContent.append(aboutContent);
}
