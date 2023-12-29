function updateColors() {
  //current hour
  var currentHour = dayjs().hour();

  //loop over each time block
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    //Removing classes
    $(this).removeClass("past present future");

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}


$(document).ready(function() {
  //establish variables
  var currentDay = $("#currentDay");
  currentDay.text(dayjs().format("MMMM D, YYYY"));
  var container = $(".container");
  var currentHour = dayjs().hour();

  var currentTime = dayjs().hour();

  $("#currentTime").text(dayjs().format("h:mm A"));


    // Create time blocks for standard business hours of 9am to 5pm
    for (var i = 9; i <= 17; i++) {
        var row = $("<div>")
          .addClass("row time-block")
          .attr("id", "hour-" + i);
        var hour = $("<div>")
          .addClass("hour col-2")
          .text(i + ":00");
        var textarea = $("<textarea>").addClass("description col-8");
        var saveBtn = $("<button>").addClass("saveBtn col-2").text("Save");
    
        //loading saved data
        textarea.val(localStorage.getItem("hour-" + i));

        

        // When the save button for that time block is clicked, save the event in local storage
        saveBtn.on("click", function () {
            var hour = $(this).siblings(".hour").text();
            var text = $(this).siblings(".description").val();
            localStorage.setItem("hour-" + hour, text);
        });

        // Append the row to the container
        row.append(hour, textarea, saveBtn);
        container.append(row);
    }

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Remove all classes
    $(this).removeClass("past present future");

    // Add the appropriate class based on the current time
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
})

  


//     if (i < currentTime) {
//       textarea.addClass("past");
//     } else if (i === currentTime) {
//       textarea.addClass("present");
//     } else {
//       textarea.addClass("future");
//     }
//     //savebutton actions
//     saveBtn.on("click", function () {
//       var hour = $(this).siblings(".hour").text();
//       var text = $(this).siblings(".description").val();
//       localStorage.setItem("hour-" + hour, text);
//     });

//     //appending to new container
//     row.append(hour, textarea, saveBtn);
//     container.append(row);
//   }

  //calling function to change colors
function updateColors() {
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        // Remove all classes
        $(this).removeClass("past present future");

        // Add the appropriate class based on the current time
        if (blockHour < currentHour) {
                $(this).addClass("past");
        } else if (blockHour === currentHour) {
                $(this).addClass("present");
        } else {
                $(this).addClass("future");
        }
    });
}

updateColors();

// Update colors every second
setInterval(updateColors, 1000);
}); // Add a closing curly brace here

