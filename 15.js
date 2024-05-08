/*15. Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"*/
function displayClock() {
    // Get the current time
    var currentTime = new Date();
    
    // Extract hours, minutes, and seconds from the current time
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros to single-digit hours, minutes, and seconds
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Display the time in the console
    console.log(hours + ":" + minutes + ":" + seconds);
}

// Call the displayClock function every second
setInterval(displayClock, 1000);