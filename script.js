// Function to get the current time
function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    // Format hours, minutes, and seconds to have leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    return hours + ":" + minutes + ":" + seconds;
  }
  
  // Function to update greeting, date, and time
  function updateDashboard() {
    var greetings = ["Good Morning Mahfudz", "Good Afternoon Mahfudz", "Good Evening Mahfudz"];
    var date = new Date();
    var hour = date.getHours();
    var greeting;
  
    if (hour >= 5 && hour < 12) {
      greeting = greetings[0];
    } else if (hour >= 12 && hour < 18) {
      greeting = greetings[1];
    } else {
      greeting = greetings[2];
    }
  
    // Update greeting
    document.getElementById("greeting").innerHTML = greeting;
  
    // Update date
    document.getElementById("date").innerHTML = date.toDateString();
  
    // Update time every second
    setInterval(function () {
      document.getElementById("time").innerHTML = getCurrentTime();
    }, 1000);
  }
  
  // Call the updateDashboard function when the page is loaded
  window.onload = updateDashboard;
  