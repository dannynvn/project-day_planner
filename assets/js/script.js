// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//variables referencing DOM elements
var saveButton = $('.btn');

//variables for storing and rendering from local storage
var selectedTextBox;
var eventDescription;

//array of id's referencing time block divs in the DOM
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

//current time variable to compare against timeblock for styling
var currentTime = dayjs().format('HH');


//display current date in the header
var currentDate = dayjs();
dateTimeEl.text(currentDate.format('dddd, MMMM D, YYYY'));


//function to style time blocks depending on current time
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

//saves event text when user clicks save button
function saveEvent(event) {
    var selectedTextBox = $(event.target).siblings('textarea').attr('id');
    var eventDescription = $(event.target).siblings('textarea').val();
    localStorage.setItem(selectedTextBox, eventDescription);
    $('#save-notification').text('Event saved to local storage!');
}


//pulls stored data from local storage and renders in time blocks corresponding to
// time blocks when saved previously
//resource referenced: https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
function renderEvents() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = '#' + localStorage.key(i);
        var storedEvents = localStorage.getItem(localStorage.key(i));
        console.log(key)
        $(key).append(storedEvents);
        console.log(localStorage.getItem(localStorage.key(i)));
    }
    console.log('rendering')
}

//runs on page load and reload
function init() {
    colorTimeBlock();
    renderEvents();
}


//run init function when page loads
init(); 


//listener for click events on save button
saveButton.on('click', saveEvent);




  