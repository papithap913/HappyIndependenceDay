// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Callback function for countdown
function countdown(count, callback) {
  if (count > 0) {
    setTimeout(() => {
      countdownElement.textContent = count;
      countdown(count - 1, callback);
    }, 1000);
  } else {
    callback();
  }
}

// Start the countdown
countdown(10, function() {
  countdownElement.textContent = "Happy Independence Day!";
});
