var today = moment();
$("#timeDisplay").text(today.format("MMM Do, YYYY"))

var realTime = moment().format('LT');
var timeInteger = timeString.slice(1,3);
var meridiem = timeString.slice(7,9);

console.log(timeInteger + meridiem)

if (timeInteger + meridiem == "9AM") {
$('#nineAM').css('background-color','red');
} if else(timeInteger + meridiem == "10AM") {
    $('#nineAM').css('background-color','red');
    $('#tenAM').css('background-color','red');
} if else(timeInteger + meridiem == "11AM") {
    $('#nineAM').css('background-color','red');
    $('#tenAM').css('background-color','red');
    $('#elevenAM').css('background-color','red');
} if else timeInteger + meridiem == "12PM") {
    $('#nineAM').css('background-color','red');
    $('#tenAM').css('background-color','red');
    $('#elevenAM').css('background-color','red');
    $('#twelvePM').css('background-color','red');
} if else timeInteger + meridiem == "1PM") {
    $('#nineAM').css('background-color','red');
    $('#tenAM').css('background-color','red');
    $('#elevenAM').css('background-color','red');
    $('#twelvePM').css('background-color','red');
    $('#onePM').css('background-color','red');
} if else timeInteger + meridiem == "2PM"){
    $('#nineAM').css('background-color','red');
    $('#tenAM').css('background-color','red');
    $('#elevenAM').css('background-color','red');
    $('#twelvePM').css('background-color','red');
    $('#onePM').css('background-color','red');
    $('#twoPM').css('background-color','red');
} if else timeInteger + meridiem == "3PM"){
    $('#nineAM').css('background-color','red');
    $('#tenAM').css('background-color','red');
    $('#elevenAM').css('background-color','red');
    $('#twelvePM').css('background-color','red');
    $('#onePM').css('background-color','red');
    $('#twoPM').css('background-color','red');
    $('#threePM').css('background-color','red');
} if else timeInteger + meridiem == "3PM"){
    $('#nineAM').css('background-color','red');
    $('#tenAM').css('background-color','red');
    $('#elevenAM').css('background-color','red');
    $('#twelvePM').css('background-color','red');
    $('#onePM').css('background-color','red');
    $('#twoPM').css('background-color','red');
    $('#threePM').css('background-color','red');
} if else timeInteger + meridiem == "4PM"){
    $('#nineAM').css('background-color','red');
    $('#tenAM').css('background-color','red');
    $('#elevenAM').css('background-color','red');
    $('#twelvePM').css('background-color','red');
    $('#onePM').css('background-color','red');
    $('#twoPM').css('background-color','red');
    $('#threePM').css('background-color','red');
    $('#fourPM').css('background-color','red');
} if else timeInteger + meridiem == "5PM"){
    $('#nineAM').css('background-color','red');
    $('#tenAM').css('background-color','red');
    $('#elevenAM').css('background-color','red');
    $('#twelvePM').css('background-color','red');
    $('#onePM').css('background-color','red');
    $('#twoPM').css('background-color','red');
    $('#threePM').css('background-color','red');
    $('#fourPM').css('background-color','red');
    $('#fivePM').css('background-color','red');

