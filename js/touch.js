let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('gestureZone');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    if (touchendX <= touchstartX && (Math.abs(touchendY-touchstartY) < Math.abs(touchendX-touchstartX))) {
        console.log('Swiped left');
        move = Left();
        console.log("sum done");
        shift = LeftShift();
        if(move || shift){
          l=GenerateNew();
        }
        doesMovesLeft();
    }
    
    else if (touchendX >= touchstartX && (Math.abs(touchendY-touchstartY) < Math.abs(touchendX-touchstartX))  ) {
        console.log('Swiped right');
        move = Right();
        console.log("sum done");
        shift = RightShift();
        if(move || shift){
          r=GenerateNew();
        } 
        doesMovesLeft();
        
    }
    
    else if (touchendY <= touchstartY && (Math.abs(touchendY-touchstartY) > Math.abs(touchendX-touchstartX))) {
        console.log('Swiped up');
        move = Up();
        console.log("sum done");
        shift = UpShift();
        if(move || shift){
          u=GenerateNew();
        } 
        doesMovesLeft();
    }
    
    else if (touchendY >= touchstartY && (Math.abs(touchendY-touchstartY) > Math.abs(touchendX-touchstartX))) {
        console.log('Swiped down');
        move = Down();
        console.log("sum done");
        shift = DownShift();
        if(move || shift){
          d=GenerateNew();
        } 
        doesMovesLeft();
    }
    
    // if (touchendY === touchstartY) {
    //     console.log('Tap');
    // }
}