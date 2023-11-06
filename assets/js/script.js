//cant hear over here again
var date = dayjs().format('dddd, MMMM D: YYYY')
// var timeBlock = $('.time-block');

// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.

$(document).ready(function () {
  
  var currentTime = dayjs().format("h:mm:ss A");
  $("#currentDay").text(date + " - Current Time: " + currentTime);
  var currentHour = dayjs().hour();

  var timeBlock = $(".time-block");
  console.log("Current Time: ", currentTime);

  for (var i = 9; i <= 17; i++) {
    var hourId = "hour-" + i;
    var timeBlock = $("<div>").attr("id", hourId[i]).addClass("time-block row");
    var hourLabel = $("<div>")
      .addClass("hour col-2")
      .text(i + ":00");
    var descriptionInput = $("<textarea>").addClass("description col-8");
      var saveButton = $("<button>").addClass("saveBtn col-2").text("Save");
    timeBlock.append(hourLabel, descriptionInput, saveButton);
    $(".container").append(timeBlock);
    var savedText = localStorage.getItem(hourId);


    if (savedText) {
      descriptionInput.val(savedText);
    }
  }


  // TODO: Add a listener for click events on the save button. This code should
  $(".saveBtn").on("click", function () {

    var timeBlock = $(this).closest(".time-block");
    var hourId = timeBlock.attr("id");
    var userInput = $(this).prev(".description").val();
    // $("#currentDay").text(currentTime);

    localStorage.setItem(hourId, userInput);
   

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      console.log(key + ": " + value);
    }
  });

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    }
    if (blockHour === currentHour) {
      $(this).addClass("present");
    }
    if (blockHour > currentHour) {
      $(this).addClass("future");
    }
  });
});
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
