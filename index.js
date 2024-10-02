document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form submission
  
    const age = document.getElementById('age').value;
    const hasPassport = document.getElementById('passport').checked;
    const isFlightAvailable = document.getElementById('flight').checked;
    const result = document.getElementById('result');
  
    // Call function to check eligibility
    result.textContent = checkFlightBookingEligibility(age, hasPassport, isFlightAvailable);
  });
  
  function checkFlightBookingEligibility(age, hasPassport, isFlightAvailable) {
    if (age >= 18 && age <= 70 && hasPassport && isFlightAvailable) {
      return "Booking successful";
    } else {
      return "Booking failed";
    }
  }
  