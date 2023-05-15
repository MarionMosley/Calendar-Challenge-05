// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
var input = document.getElementById('text').innerHTML;

    document.querySelectorAll('.saveBtn').forEach(item => {
      item.addEventListener('click', event => {
        localStorage.setItem('event', input);
      })
    })
 
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
 
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
  var rows = document.getElementsByClassName("row");
    var currentHour = dayjs().format('HH');

    Array.from(rows).forEach(row => {
      var
        rowIdString = row.id,
        rowHour;
      if (rowIdString) {
        rowHour = parseInt(rowIdString);
      }
      if (rowHour) {
        // Compares row id to current hour and sets color accordingly
        if (currentHour == rowHour) {
          setColor(row, "lightred");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 8)) {
          setColor(row, "lightgreen");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 8)) {
          setColor(row, "lightgrey");
        } else {
          setColor(row, "lightgrey");
        }
      }
    });

  function setColor(element, color) {
    element.style.backgroundColor = color;
  }
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    var date = dayjs().format('dddd, MMMM D');
    $('#currentDay').text(date + "th");
  });