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
        console.log(localStorage)
    })

    // Function for tracking time

})



// Get items from local storage