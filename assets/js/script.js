// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//variables referencing DOM elements
var saveButton = $('.btn');

var dateTimeEl =  $('#currentDay');
var timeBlocks = [
    $('#hour-9'), 
    $('#hour-10'), 
    $('#hour-11'), 
    $('#hour-12'), 
    $('#hour-13'), 
    $('#hour-14'), 
    $('#hour-15'),
    $('#hour-16'),
    $('#hour-17')
]

//display current date in the header
var currentDate = dayjs();
dateTimeEl.text(currentDate.format('dddd, MMMM D, YYYY'));

var currentTime = dayjs().format('HH');

// var timeBlock = $('#hour-9').data('id')
// console.log(timeBlock);

function colorTimeBlock() {
    for (var i = 0; i < timeBlocks.length; i++) {
        var eachTimeBlock = timeBlocks[i].data('id');
        if (eachTimeBlock < currentTime) {
            timeBlocks[i].addClass('past');
        } else if (eachTimeBlock == currentTime) {
            timeBlocks[i].addClass('present');
        } else if (eachTimeBlock > currentTime) {
            timeBlocks[i].addClass('future');
        }
    }
   
}


function saveEvent(event) {
    
    //compare time to past, present, and future to apply style to text area element    
    // var selectedTimeBlock = $(event.target).parent().data('id');
    // console.log(currentTime);
    // console.log(selectedTimeBlock);
    // if (selectedTimeBlock < currentTime) {
    //     $(event.target).parent().addClass('past');
    // } else if (selectedTimeBlock == currentTime) {
    //     $(event.target).parent().addClass('present');
    // } else if (selectedTimeBlock > currentTime) {
    //     $(event.target).parent().addClass('future');
    // }

    //save user input to local storage

}
//listener for click events on save button
saveButton.on('click', saveEvent);

function init() {
    colorTimeBlock();
}

init(); 


$(function () {
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
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });


  