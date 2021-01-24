// Display current date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);


// Function for 
$(document).ready(function(){

    // Function to save user input
    $(".saveBtn").on("click", function() {

        // Get values of description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text to local storage
        localStorage.setItem(time, text);
    })

    // Function for tracking time
    function timeTracker() {
        // Get current time in hours
        var timeNow = moment().hour();

        // Loop over time blocks
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // Add classes based on time
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");

            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");

            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // Get items from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));


    timeTracker();
})