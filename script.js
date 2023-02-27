const message = "Thank you for contacting the Kingdom. The King's scribes will respond as soon as possible.";

  const contactForm = document.getElementById("contactForm");
  
  if(null!== contactForm){
      contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(message);
    });
  }