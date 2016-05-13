// We declare the username variable up here so that we can
// access it after we set it's value in the submit-button
// click handler

var username;

// When the user clicks the submit button, we want to save the 
// username they entered, hide the form, and show the color input
$('.submit-button').click(function (e) {
  username = $('.username-input').val();

  $('.username-form').addClass('is-hidden');
  $('.color-input').removeClass('is-hidden');
});

// Actually handle user input on our chat options
// This is where we're tying particular values to 
// colors in messages we send.
$('.museum').click(function () {
  sendMessage(0);
});

$('.coffee').click(function () {
  sendMessage(1);
});

$('.park').click(function () {
  sendMessage(2);
});

$('.shop').click(function () {
  sendMessage(3);
});

$('.drinks').click(function () {
  sendMessage(4);
});

$('.homework').click(function () {
  sendMessage(5);
});

$('.food').click(function () {
  sendMessage(6);
});

$('.movie').click(function () {
  sendMessage(7);
});

$('.games').click(function () {
  sendMessage(8);
});

// This is where the magic happens!!!
// We use the Chat object's `sendMessage` function
// to actually send the message
function sendMessage(value) {
  Chat.sendMessage({
    sender: username,
    type: 'color',
    value: value
  });
}

// This map of color values makes it easy
// for us to interpret the messages we receive
var colorValues = {
  0: 'museum',
  1: 'coffee',
  2: 'park',
  3: 'shop',
  4: 'drinks',
  5: 'homework',
  6: 'food',
  7: 'movie',
  8: 'games',
  9: 'museum',
  10: 'coffee',
  11: 'park',
  12: 'shop'
};

// And here's where we actually handle incoming messages
// For each message we get, we create a new element, label
// it with the message sender's name, and assign classes
// based on its sender and value
Chat.onMessage(function (data) {
  // Create the message element
  var message = $('<div><img src="images/museum.png"></div>');
  $(message).addClass('message');

  if (data.value == 1) {
    var message = $('<div><img src="images/coffee.png"></div>');
    $(message).addClass('message');
  }

  if (data.value == 2) {
    var message = $('<div><img src="images/park.png"></div>');
    $(message).addClass('message');
  }

  if (data.value == 3) {
    var message = $('<div><img src="images/shop.png"></div>');
    $(message).addClass('message');
  }

  if (data.value == 4) {
    var message = $('<div><img src="images/drinks.png"></div>');
    $(message).addClass('message');
  }

  if (data.value == 5) {
    var message = $('<div><img src="images/homework.png"></div>');
    $(message).addClass('message');
  }

  if (data.value == 6) {
    var message = $('<div><img src="images/food.png"></div>');
    $(message).addClass('message');
  }

  if (data.value == 7) {
    var message = $('<div><img src="images/cinema.png"></div>');
    $(message).addClass('message');
  }

  if (data.value == 8) {
    var message = $('<div><img src="images/games.png"></div>');
    $(message).addClass('message');
  }


  // Here's where we assign the color class. We use the
  // message's value to pull a color from our map of 
  // colors above
  $(message).addClass(colorValues[data.value]);

  // If the message is from the current user, give it a
  // special class
  if (data.sender == username) {
    $(message).addClass('from-current-user');
  }

  // Create the label element and set its html
  var messageLabel = $('<div></div>');
  $(messageLabel).html(data.sender);

  // Append label to the message
  $(message).append(messageLabel);

  // Append message to the container on the page
  $('.message-container').append(message);
});

// This is where we handle changes in active user count.
// We're going to lighten the background based on the number
// of users on the page
Chat.onUserCountChange(function (currentCount) {
  // We'll say that maximum lightness happens at 20 users,
  // so we'll treat all counts greater than 20 the same as 20
  if (currentCount > 20) {
    currentCount = 20;
  }

  // How close we are to twenty users determines the lightness.
  // It's a percentage so we multiply by 100.
  var lightness = Math.round((currentCount / 20) * 100);

  // Actually set the background color. HSL is often the easiest
  // color format to use when modifying color dynamically
  
});



// timer

var minutes = $( '#set-time' ).val();

var target_date = new Date().getTime() + ((minutes * 10 ) * 9000); // set the countdown date
var time_limit = ((minutes * 10 ) * 9000);
//set actual timer
// setTimeout(
//   function() 
//   {
//     $(".popup").show("");
//   }, time_limit );

$(function(){
	$(".popup").delay(90000).fadeIn();
});


setTimeout(function(){
	$(".popup-outer").delay(90000).fadeIn();
});


var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

// getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles' ).removeClass('color-full');
     $( '#tiles' ).addClass('color-half');

    } 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
      $( '#tiles' ).removeClass('color-half');
      $( '#tiles' ).addClass('color-empty');
    }
  
  days = pad( parseInt(seconds_left / 86400) );
  seconds_left = seconds_left % 86400;
     
  hours = pad( parseInt(seconds_left / 3600) );
  seconds_left = seconds_left % 3600;
      
  minutes = pad( parseInt(seconds_left / 60) );
  seconds = pad( parseInt( seconds_left % 60 ) );

  // format countdown string + set tag value
  countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  
$('.museum').click(function () {
	$("#color-option museum"). toggle();

	event.stopPropagation();
	return false;
});

$('.coffee').click(function () {
	event.stopPropagation();
});

$('.park').click(function () {
	event.stopPropagation();
});

$('.shop').click(function () {
	event.stopPropagation();
});

$('.drinks').click(function () {
	event.stopPropagation();
});

$('.homework').click(function () {
	event.stopPropagation();
});

$('.food').click(function () {
	event.stopPropagation();
});

$('.movie').click(function () {
	return false;
});

$('.games').click(function () {
});
  
}
   
  
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}



(function blink() { 
    $('.popup').fadeOut(500).fadeIn(500, blink); 
})();


(function blink() { 
    $('.color-half').fadeOut(500).fadeIn(500, blink); 
})();