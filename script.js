// Scroll to booking section
function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

// Booking form alert
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your trip has been booked ✈️`);
  this.reset();
});

// taj mahal //
function toggleMore() {
  const info = document.getElementById("extraInfo");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}


function bookPackage(packageName) {
  alert(`You selected: ${packageName}\nWe will contact you shortly for booking details.`);
}




