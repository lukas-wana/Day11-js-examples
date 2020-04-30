console.log('Script file is loaded')
// single line comment //

/* multiple
line
of comments */

let person = {
  name: 'Lukas',
  age: '40',
  oldEnoughtDrive: true
}

// jQuery.com is loaded //
// $('css selector').action()

//replace text in HTML
//$('h1').text('this is from javaScript');

$('h1').html('this is from <em> javaScript </em>');

// add
$('h2').toggleClass('blue');

// remove
$('h2').toggleClass('blue');


function myLittleFunction() {
  if ($('p').length < 5) {
    $('main').append('<p>A p is appended in the main.</p>');
  } else {
    console.log('Jeste jednou zmacknes ten cudlik tak se uz nic nestane')
  }
  $('p').css('border', '1px solid red');
  $('p').css('padding', '20px');
}

//start function in line
// myLittleFunction();




function addLikeFunction() {
  $(".box")
  .animate({width: "300px"})
}

function LikeFunction() {
  $(".box")
  .animate({width: "1px"})
}

$('#like').click(addLikeFunction);
$('#dontlike').click(LikeFunction);

$('#add').click(myLittleFunction);

$('#remove').click(function () {
  $('p:last-child').remove();
});

let colors = ['orange', 'cyan', 'green', 'lime', 'magenta'];

colors.forEach(function (unicorncolor){
  $('#box-container').append('<div class="box"></div>');
  $('.box:last-child').css('background', unicorncolor);
})

// presne i === 5
// neni i !== 5
// <, >, <=, >=, ===, !==
// to same
// i = i + 1
// i++

for (let i = 0; i < 11; i++) {
  console.log(i)
  // console.log("I'l not cheat at exam.")
}

/*
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
*/