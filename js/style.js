const screenWidth = screen.width;
const screenHeight = screen.height
console.log(screenWidth);
console.log(screenHeight);

// if(screenHeight > screenWidth){
//   $('.col-2').css({width: "100%"});
//   $('#gestureZone').css({width: "90%"});
//   const width = $('#gestureZone').width();
//   $('#gestureZone').css({height: width});
// }


if(screenWidth <= 600){
  const height = $('#gestureZone').height();
  console.log($('#gestureZone').css({"width": height}));
  const width = $('#gestureZone').width();
  if(height > width){
    $('#gestureZone').css({"height": width});
  }
} else {
  const width = $('#gestureZone').width();
  console.log($('#gestureZone').css({"height": width}));
}

$('.score').html(score);