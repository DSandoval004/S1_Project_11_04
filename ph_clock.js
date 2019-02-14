"use strict ";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Diego Sandoval
   Date:  2/13/19

   Filename:   ph_clock.js     

*/
// Declares all the variable that where used, the minutes left, the seconds left, the time left and the variable that cause the countdown function to be run every second.
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = (minsLeft * 60) + secsLeft;
var clockID = setInterval('countdown()', 1000);
// Function that stops the clock when the clock hits zero, and inserts HTML to tell the user that the time has expired.
function stopClock() {
    document.getElementById('TimeHead').insertAdjacentHTML('beforeend', "<br />(Order Expired)");
    clearInterval(clockID);
};
// Function to calculate the time left.
function countdown() {
    // Calculates the time left and makes sure the it is rounded down.
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - (60 * minsLeft);
    // Adds a leading zero to the minutes left and the seconds left
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    // Applies the minutes left string and the seconds left string to the HTML document.
    document.getElementById('minutes').innerHTML = minsString;
    document.getElementById('seconds').innerHTML = secsString;
    // Runs the function checkTimer() that checks if the timer has reached 0, and if it does hit 0 then it runs the function stopTimer() to stop the timer.
    checkTimer();
    // Rudeces the timeLeft by 1 second
    timeLeft -= 1;
};

/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}