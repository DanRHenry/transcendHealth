import { build_hero_carousel } from "./build_hero_carousel.js";

export function build_landing_page_content(serverURL) {
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = "";

  const landingpageContent = document.createElement("div");
  landingpageContent.id = "landingpageContent";

  const landingpageHeaderAndImageSection = document.createElement("div");
  landingpageHeaderAndImageSection.id = "landingpageHeaderAndImageSection";

  const landingpageHeader = document.createElement("h1");
  landingpageHeader.id = "landingpageHeader";
  landingpageHeader.innerText = `Our Mission`;

  const landingpageImage = document.createElement("img");
  landingpageImage.src = `${serverURL}/assets/yousef-espanioly-DA_tplYgTow-unsplash.jpg`;
  landingpageImage.alt = "about image";

  const landingpageTextSection = document.createElement("div");
  landingpageTextSection.id = "landingpageTextSection";

  const landingpageParagraph1 = document.createElement("p");
  landingpageParagraph1.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, velit vel luctus vestibulum,  odio  lectus  volutpat  nibh,  sed  hendrerit  libero  arcu  sed  justo.  Mauris placerat vestibulum leo, fringilla sollicitudin dolor. Cras eu arcu elementum, luctus est 
quis, egestas justo. Suspendisse tincidunt eros ante, ac rutrum nunc consequat in. Fusce 
est purus, sodales hendrerit dapibus vitae, bibendum eget sem. Aliquam vulputate augue libero, at gravida urna semper pellentesque. In bibendum mi ac tortor faucibus, sed 
viverra velit rutrum. Etiam ultrices quis libero gravida malesuada.`;

  const landingpageParagraph2 = document.createElement("p");
  landingpageParagraph2.innerText = `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis lorem vitae lorem euismod venenatis eu vel mauris. Fusce nec mauris ornare 
nisl dictum iaculis at ut ligula. Vestibulum dictum, nibh non aliquet ornare, nibh turpis 
semper lorem, in varius mi est nec erat. Maecenas blandit quis odio vel faucibus. Nam efficitur semper nibh, quis mattis lacus accumsan vel. Etiam cursus eros sit amet turpis 
malesuada  pretium  eget  ac  elit.  Suspendisse  in  eleifend  orci.  Orci  varius  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In congue malesuada 
lectus, ac porttitor mauris consequat eu. Donec id justo et leo maximus hendrerit quis vitae odio. Nam auctor lacinia enim consequat vulputate. Donec sit amet magna ut ligula 
dignissim sollicitudin ut ut augue. Phasellus dignissim finibus velit a mattis. In molestie 
consectetur sem, in suscipit augue auctor aliquet.`;

  landingpageTextSection.append(landingpageParagraph1, landingpageParagraph2);

  // landingpageHeaderAndImageSection.append(landingpageHeader, landingpageImage);

    landingpageHeaderAndImageSection.append(landingpageHeader);

  landingpageContent.append(
    landingpageHeaderAndImageSection,
    landingpageTextSection
  );

  const heroCarousel = document.createElement("div")
  heroCarousel.id = "heroCarousel"

    document.getElementById("mainContent").before(heroCarousel);

  mainContent.append(landingpageContent);

  build_hero_carousel()


}
