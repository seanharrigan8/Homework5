// //cant hear over here again

// // var timeBlock = $('.time-block');

// // // // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // // the code isn't run until the browser has finished rendering all the elements
// // // in the html.

// $(document).ready(function () {
//   var date = dayjs().format("dddd, MMMM D: YYYY");
//   var currentHour = dayjs().hour();
// var timeId = ["9", "10", "11", "12", "13", "14", "15", "16", `17`];
// var hourBlockEl = $('.container');
  

//   $("#currentDay").text(date);
//     // Retrieve and set saved user input
//     function renderTimeblock() {
//       $(".time-block").each(function () {
//         var blockHour = parseInt($(this).attr("id").split("-")[1]);
//         if (blockHour < currentHour) {
//           $(this).addClass("past");
//         } else if (blockHour === currentHour) {
//           $(this).removeClass("past");
//           $(this).addClass("present");
//         } else {
//           $(this).removeClass("past");
//           $(this).removeClass("present");
//           $(this).addClass("future");
//         }
//       });
//     }


//     for (var i = 0; i < timeId.length; i++) {
//       var hourId = "hour-" + timeId[i];
//       //sets values for all divs on the page
//       //create container
    
  
//       var hourText = $("<div>")
//         hourText.addClass("hour")
//         hourText.attr("id", hourId).text(timeId[i] + ":00");
  
//       var descriptionInput = $("<textarea>")
//       descriptionInput.addClass("col-8 col-md-10 description"),text(savedText);
  
//       var saveButton = $("<button>")
//       .addClass("saveBtn col-2")
//       .attr("aria-label", "save")
//       .html('<i class="fas fa-save" aria-hidden"true"></i>');
      
//       var timeBlock = $("<div>")
//       .addClass("time-block row")
//       .attr("id", hourId)
//       .append(hourText, descriptionInput, saveButton);
//       hourBlockEl.append(timeBlock);
  
//       var savedText = localStorage.getItem(hourId, userInput);
  
//       if (savedText) {
//         descriptionInput.val(savedText).text(userInput)
//       }
    

//   //   for (var i = 9; i <= 17; i++) 
//   //     var hourId = "hour-" + i;
//   //     var savedText = localStorage.getItem(hourId);
//   //     $("#" + hourId + " .description").val(savedText);
//   //   
  
//   // var currentTime = dayjs().format("h:mm:ss A");
//   // // $("#currentDay").text(date + " - Current Time: " + currentTime);
  
//   // var timeBlockEl = $('#hour-' + i);
//   // console.log("Current Time: ", currentTime);
   

  

//   // TODO: Add a listener for click events on the save button. This code should

//   for (var i = 0; i < localStorage.length; i++) {
//         var key = localStorage.key(i);
//         var value = localStorage.getItem(key);
//         console.log(key + ": " + value);
//   $(".saveBtn").on('click', function() {
//     var hourId = $(this).parent().attr("id");
//     var userInput = $(this).siblings('.description').val();
    
//     localStorage.setItem(hourId, userInput);
//       console.log(hourId, userInput);
//   }

//     renderTimeblock ();

//   }); 







//   //   // for (var i = 0; i < localStorage.length; i++) {
//   //   //   var key = localStorage.key(i);
//   //   //   var value = localStorage.getItem(key);
//   //   //   console.log(key + ": " + value);
//   //   // }
//   // }
//   // });

//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //

// //   var currentHour = dayjs().hour();
// // function renderTimeBlock {
// //   $(".").each(function () {
// //     var blockHour = parseInt($(hourId).attr("id").split("-")[1]);

// //     if (blockHour < currentHour) {
// //       $(this).addClass(".past");
// //     }
// //     if (blockHour === currentHour) {
// //       $(this).addClass(".present");
// //     }
// //     if (blockHour > currentHour) {
// //       $(this).addClass(".future");
// //     }
// //   });
// // }
// // });



// // TODO: Add code to apply the past, present, or future class to each time
// // block by comparing the id to the current hour. HINTS: How can the id
// // attribute of each time-block be used to conditionally add or remove the
// // past, present, and future classes? How can Day.js be used to get the
// // current hour in 24-hour time?
// //
// // TODO: Add code to get any user input that was saved in localStorage and set
// // the values of the corresponding textarea elements. HINT: How can the id
// // attribute of each time-block be used to do this?
// //
// // TODO: Add code to display the current date in the header of the pag



// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
// // $(function () {
// //     $('#add-to').button();
// //     icons: {
// //         primary: "ui-icon-circle-plus"
// //     }
// // })      .click(function() {
// //     $('#new-todo').dialog('open');
// // });

// //     $('#new-todo').dialog({
// //     modal : true,
// //     autoOpen : false,
// //     buttons: {
// //             "Add task" : function () {
// //                 var taskName = $('#task').val();
// //                 if(taskName === '') {
// //                     return false;
// //                 }
// //                 var taskHTML = '<li><span class="done">%</span>';
// //                 taskHTML += '<span class="delete">x</span>';
// //                 taskHTML += '<span class="task"></span>'
// //                 var $newTask = $(taskHTML);
// //                 $newTask.find('task.').text(taskName);
// //                 $newTask.hide();
// //                 $('$todo-list').prepend($newTask);
// //                 #newTask.show('clip',250).effect('highlight',1000);
// //                 $(this).dialog('close');

// //             }, 
// //                 "Cancel" : function () {
// //                     $(this).dialog('close');
// //                 }
// //     }
// // });

//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
// //     // attribute of each time-block be used to do this?
// //     //
// //     // TODO: Add code to display the current date in the header of the page.
// //   });












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
// TODO: Add code to display the current date in the header of the page