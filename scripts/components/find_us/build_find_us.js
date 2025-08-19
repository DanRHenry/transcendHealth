export function build_find_us () {
    const hiddenMap = document.createElement("div")
      const addressContent = document.createElement("div");
      addressContent.id = "addressContent";
    
      const googleMapsFrame = document.createElement("iframe");
    
      googleMapsFrame.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12217.877373460857!2d-86.13882506964669!3d40.04262577326676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814afac628e5395%3A0x9c7751d32d25da72!2s123%20W%20Main%20St%2C%20Westfield%2C%20IN%2046074!5e0!3m2!1sen!2sus!4v1753171097099!5m2!1sen!2sus";
      googleMapsFrame.allowFullscreen = "";
      googleMapsFrame.loading = "lazy";
      googleMapsFrame.referrerPolicy = "no-referrer-when-downgrade";
    
      const address = document.createElement("div");
    
      const streetAddress = document.createElement("div");
      streetAddress.innerText = "123 Main Street, Suite 9";
      const cityAndState = document.createElement("div");
      cityAndState.innerText = "Westfield, Indiana 46074";
      const phoneNumber = document.createElement("div");
      phoneNumber.innerText = "317.555.5555";
    
      address.append(streetAddress, cityAndState, phoneNumber);
    
      addressContent.append(address, googleMapsFrame);
      hiddenMap.id = "hiddenMap"

      hiddenMap.append(addressContent)
      document.getElementById('mainContent').before(hiddenMap)
}