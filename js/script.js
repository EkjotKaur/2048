let n = 4;
let score = 123456;
let emptySquares = [];
let leftSquares = [];

for(let i = 0; i< n; i++){
  for(let j = 0; j < n; j++){
    emptySquares.push(`${i}-${j}`);
  }
}

const Reset = () => {
  score = 0;
  leftSquares.forEach( sq => {
    let number = $(`#${sq}`).html();
    $(`#${sq}`).addClass('empty-square').removeClass(`full-square full-square-${number}`).html('');
    leftSquares = leftSquares.filter( s => s!== `${sq}`);
  });

  emptySquares = [];
  console.log(leftSquares);
  console.log(emptySquares);

  for(let i = 0; i< n; i++){
    for(let j = 0; j < n; j++){
      emptySquares.push(`${i}-${j}`);
    }
  }

  let sq1 = emptySquares[Math.floor(Math.random()*emptySquares.length)];

  emptySquares = emptySquares.filter(sq => sq!==sq1);
  leftSquares.push(sq1);

  let sq2 = emptySquares[Math.floor(Math.random()*emptySquares.length)];

  emptySquares = emptySquares.filter(sq => sq!==sq2);
  leftSquares.push(sq2);
  leftSquares.sort();

  $(`#${sq1}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
  $(`#${sq2}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
}

Reset();

// let emptySquares = ['0-0', '0-1', '0-2', '0-3', '1-0', '1-1', '1-2', '1-3', '2-0', '2-1', '2-2', '2-3', '3-0', '3-1', '3-2', '3-3'];


const toEasy = (event) => {
  n = 5;
  $(".hidden").removeClass("hidden").addClass("now-active");
  $(".empty-square").css({"width": "18%", "height": "18%"});
  $(".full-square").css({"width": "18%", "height": "18%"});
  
  $('.easy').addClass('active');
  $('.hard').removeClass('active');
  Reset();

}
const toHard = (event) => {
  n = 4;
  
  $(".now-active").addClass("hidden").removeClass("now-active");
  $(".empty-square").css({"width": "23%", "height": "23%"});
  $(".full-square").css({"width": "23%", "height": "23%"});

  $('.easy').removeClass('active');
  $('.hard').addClass('active');
  Reset();
}

console.log(n);

// STEP 1: Two starting 2s 

// let emptySquares = ['0-0', '0-1', '0-2', '0-3', '1-0', '1-1', '1-2', '1-3', '2-0', '2-1', '2-2', '2-3', '3-0', '3-1', '3-2', '3-3'];

// let leftSquares = [];

// let sq1 = emptySquares[Math.floor(Math.random()*emptySquares.length)];

// emptySquares = emptySquares.filter(sq => sq!==sq1);
// leftSquares.push(sq1);

// let sq2 = emptySquares[Math.floor(Math.random()*emptySquares.length)];

// emptySquares = emptySquares.filter(sq => sq!==sq2);
// leftSquares.push(sq2);
// leftSquares.sort();


// $(`#${sq1}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${sq2}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);



// STEP 2: Sum Values

const LeftSum = () => {
  let doesItMoves = false;
  leftSquares.forEach(sq => {
    let square = sq.split("-");
    for (let i = Number(square[1])+1; i < n; i++) {
      if($(`#${square[0]}-${i}`).hasClass('full-square')){
        if($(`#${square[0]}-${i}`).html() !== $(`#${sq}`).html()){
          break;
        }
        let toBeRemoved = $(`#${square[0]}-${i}`).html();
        $(`#${sq}`).html(Number($(`#${sq}`).html())*2);
        let newValue = $(`#${sq}`).html();
        score += Number(newValue);
        $(`#${sq}`).addClass(`full-square-${newValue}`).removeClass(`full-square-${toBeRemoved}`);
        $(`#${square[0]}-${i}`).addClass('empty-square').removeClass(`full-square full-square-${toBeRemoved}`);
        $(`#${square[0]}-${i}`).html('');

        leftSquares = leftSquares.filter(s => s!== `${square[0]}-${i}`);
        emptySquares.push(`${square[0]}-${i}`);
        emptySquares.sort();
        doesItMoves = true;
        break;
      }
      
    }
  });
  return doesItMoves;
}

const RightSum = () => {
  let doesItMoves = false;
  for (let j = leftSquares.length-1; j >= 0 ; j--) {
    const sq = leftSquares[j];

    let square = sq.split("-");
    for (let i = Number(square[1])-1; i >= 0; i--) {
      if($(`#${square[0]}-${i}`).hasClass('full-square')){
        if($(`#${square[0]}-${i}`).html() !== $(`#${sq}`).html()){
          break;
        }
        let toBeRemoved = $(`#${square[0]}-${i}`).html();
        $(`#${sq}`).html(Number($(`#${sq}`).html())*2);
        let newValue = $(`#${sq}`).html();
        score += Number(newValue);
        $(`#${sq}`).addClass(`full-square-${newValue}`).removeClass(`full-square-${toBeRemoved}`);
        $(`#${square[0]}-${i}`).addClass('empty-square').removeClass(`full-square full-square-${toBeRemoved}`);
        $(`#${square[0]}-${i}`).html('');

        leftSquares = leftSquares.filter(s => s!== `${square[0]}-${i}`);
        emptySquares.push(`${square[0]}-${i}`);
        emptySquares.sort();
        doesItMoves = true;
        break;
      }
      
    }
    
  }
  return doesItMoves;
}

const UpSum = () => {
  let doesItMoves = false;
  leftSquares.forEach(sq => {
    let square = sq.split("-");
    for (let i = Number(square[0])+1; i < n; i++) {
      if($(`#${i}-${square[1]}`).hasClass('full-square')){
        if($(`#${i}-${square[1]}`).html() !== $(`#${sq}`).html()){
          break;
        }
        let toBeRemoved = $(`#${i}-${square[1]}`).html();
        $(`#${sq}`).html(Number($(`#${sq}`).html())*2);
        let newValue = $(`#${sq}`).html();
        score += Number(newValue);
        $(`#${sq}`).addClass(`full-square-${newValue}`).removeClass(`full-square-${toBeRemoved}`);
        $(`#${i}-${square[1]}`).addClass('empty-square').removeClass(`full-square full-square-${toBeRemoved}`);
        $(`#${i}-${square[1]}`).html('');

        leftSquares = leftSquares.filter(s => s!== `${i}-${square[1]}`);
        emptySquares.push(`${i}-${square[1]}`);
        emptySquares.sort();
        doesItMoves = true;
        break;
      }
      
    }
  });
  return doesItMoves;
}

const DownSum = () => {
  let doesItMoves = false;
  for (let j = leftSquares.length-1; j >= 0 ; j--) {
    const sq = leftSquares[j];

    let square = sq.split("-");

    for (let i = Number(square[0])-1; i >= 0; i--) {

      if($(`#${i}-${square[1]}`).hasClass('full-square')){
        console.log($(`#${i}-${square[1]}`).html());
        console.log($(`#${sq}`).html());
        if($(`#${i}-${square[1]}`).html() !== $(`#${sq}`).html()){
          break;
        }

        let toBeRemoved = $(`#${i}-${square[1]}`).html();
        $(`#${sq}`).html(Number($(`#${sq}`).html())*2);
        let newValue = $(`#${sq}`).html();
        score += Number(newValue);
        $(`#${sq}`).addClass(`full-square-${newValue}`).removeClass(`full-square-${toBeRemoved}`);
        $(`#${i}-${square[1]}`).addClass('empty-square').removeClass(`full-square full-square-${toBeRemoved}`);
        $(`#${i}-${square[1]}`).html('');

        leftSquares = leftSquares.filter(s => s!== `${i}-${square[1]}`);
        emptySquares.push(`${i}-${square[1]}`);
        emptySquares.sort();
        doesItMoves = true;
        break;
      }
      
    }
    
  }
  return doesItMoves;
}


// Step 3: Shifting Values

const LeftShift = () => {
  let doesItShift = false;
  leftSquares.forEach(sq => {
    let square = sq.split("-");
    for (let i = 0; i < Number(square[1]); i++) {
      if($(`#${square[0]}-${i}`).hasClass('empty-square')){

        let toBeShift = $(`#${sq}`).html()
        $(`#${square[0]}-${i}`).html($(`#${sq}`).html());

  
        $(`#${square[0]}-${i}`).addClass(`full-square full-square-${toBeShift}`).removeClass(`empty-square`);
        
        $(`#${sq}`).addClass(`empty-square`).removeClass(`full-square full-square-${toBeShift}`);
        $(`#${sq}`).html('');

        leftSquares = leftSquares.filter(s => s!== `${sq}`);
        leftSquares.push(`${square[0]}-${i}`);
        leftSquares.sort();

        emptySquares = emptySquares.filter(s => s!== `${square[0]}-${i}`)
        emptySquares.push(`${sq}`);
        emptySquares.sort();
        doesItShift = true;
        break;
      }
      
    }
  });
  return doesItShift;
}

const RightShift = () => {
  let doesItShift = false;
  for (let j = leftSquares.length-1; j >= 0; j--) {

    const sq = leftSquares[j];

    let square = sq.split("-");

    let m = leftSquares.length-1;

    for (let i = n-1; i > Number(square[1]); i--) {
      console.log('Yes');
      if($(`#${square[0]}-${i}`).hasClass('empty-square')){

        let toBeShift = $(`#${sq}`).html()
        $(`#${square[0]}-${i}`).html($(`#${sq}`).html());

        $(`#${square[0]}-${i}`).addClass(`full-square full-square-${toBeShift}`).removeClass(`empty-square`);
        
        $(`#${sq}`).addClass(`empty-square`).removeClass(`full-square full-square-${toBeShift}`);
        $(`#${sq}`).html('');

        leftSquares = leftSquares.filter(s => s!== `${sq}`);
        leftSquares.push(`${square[0]}-${i}`);
        leftSquares.sort();

        emptySquares = emptySquares.filter(s => s!== `${square[0]}-${i}`)
        emptySquares.push(`${sq}`);
        emptySquares.sort();
        doesItShift = true;
        break;
      }
      
    }
    
  }
  return doesItShift;
}

const UpShift = () => {
  let doesItShift = false;
  leftSquares.forEach(sq => {
    let square = sq.split("-");
    for (let i = 0; i < Number(square[0]); i++) {
      if($(`#${i}-${square[1]}`).hasClass('empty-square')){

        let toBeShift = $(`#${sq}`).html()
        $(`#${i}-${square[1]}`).html($(`#${sq}`).html());

        $(`#${i}-${square[1]}`).addClass(`full-square full-square-${toBeShift}`).removeClass(`empty-square`);
        
        $(`#${sq}`).addClass(`empty-square`).removeClass(`full-square full-square-${toBeShift}`);
        $(`#${sq}`).html('');

        leftSquares = leftSquares.filter(s => s!== `${sq}`);
        leftSquares.push(`${i}-${square[1]}`);
        leftSquares.sort();

        emptySquares = emptySquares.filter(s => s!== `${i}-${square[1]}`)
        emptySquares.push(`${sq}`);
        emptySquares.sort();
        doesItShift = true;
        break;
      }
      
    }
  });
  return doesItShift;
}

const DownShift = () => {
  let doesItShift = false;
  for (let j = leftSquares.length-1; j >= 0; j--) {

    const sq = leftSquares[j];

    let square = sq.split("-");
    let m = leftSquares.length-1;

    for (let i = n-1; i > Number(square[0]); i--) {
      console.log('Yes');
      if($(`#${i}-${square[1]}`).hasClass('empty-square')){

        let toBeShift = $(`#${sq}`).html()
        $(`#${i}-${square[1]}`).html($(`#${sq}`).html());

        console.log(`${i}-${square[1]}`);
        $(`#${i}-${square[1]}`).addClass(`full-square full-square-${toBeShift}`).removeClass(`empty-square`);
        
        $(`#${sq}`).addClass(`empty-square`).removeClass(`full-square full-square-${toBeShift}`);
        $(`#${sq}`).html('');

        leftSquares = leftSquares.filter(s => s!== `${sq}`);
        leftSquares.push(`${i}-${square[1]}`);
        leftSquares.sort();

        emptySquares = emptySquares.filter(s => s!== `${i}-${square[1]}`)
        emptySquares.push(`${sq}`);
        emptySquares.sort();
        doesItShift = true;
        break;
      }
      
    }
    
  }
  return doesItShift;
}


// Step 4: Checking for more moves possible

const checkMoreMovesPossible = () => {
  let doesItMovesX = false;
  let doesItMovesY = false;
  let doesItShiftLeft = false;
  let doesItShiftUp = false;
  let doesItShiftRight = false;
  let doesItShiftDown = false;

  leftSquares.forEach(sq => {
    let square = sq.split("-");

    for (let i = Number(square[1])+1; i < n; i++) {
  
      if($(`#${square[0]}-${i}`).hasClass('full-square')){
 
        if($(`#${square[0]}-${i}`).html() !== $(`#${sq}`).html()){
          break;
        }
        doesItMovesX = true;
        break;
      }
      
    }
  });


  leftSquares.forEach(sq => {
    let square = sq.split("-");

    for (let i = Number(square[0])+1; i < n; i++) {

      if($(`#${i}-${square[1]}`).hasClass('full-square')){

        if($(`#${i}-${square[1]}`).html() !== $(`#${sq}`).html()){
          break;
        }

        doesItMovesY = true;
        break;
      }
      
    }
  });


  leftSquares.forEach(sq => {
    let square = sq.split("-");
    for (let i = 0; i < Number(square[1]); i++) {
      if($(`#${square[0]}-${i}`).hasClass('empty-square')){
        doesItShiftLeft = true;
        break;
      }
    }
  });

  leftSquares.forEach(sq => {
    let square = sq.split("-");
    for (let i = 0; i < Number(square[0]); i++) {
      if($(`#${i}-${square[1]}`).hasClass('empty-square')){
        doesItShiftUp = true;
        break;
      }
    }
  });


  for (let j = leftSquares.length-1; j >= 0; j--) {
    const sq = leftSquares[j];

    let square = sq.split("-");

    let m = leftSquares.length-1;
 
    for (let i = n-1; i > Number(square[1]); i--) {
      console.log('Yes');
      if($(`#${square[0]}-${i}`).hasClass('empty-square')){
        doesItShiftRight = true;
        break;
      }
    }
  }

  for (let j = leftSquares.length-1; j >= 0; j--) {
    const sq = leftSquares[j];

    let square = sq.split("-");

    let m = leftSquares.length-1;
  
    for (let i = n-1; i > Number(square[0]); i--) {
      console.log('Yes');
      if($(`#${i}-${square[1]}`).hasClass('empty-square')){
        doesItShiftDown = true;
        break;
      }
      
    }
    
  }

  if(doesItMovesX || doesItMovesY || doesItShiftLeft || doesItShiftUp || doesItShiftRight || doesItShiftDown){
    return true;
  }
  return false;

}

// Step 5: Generate New Values

const GenerateNew = () => {
  let sq = emptySquares[Math.floor(Math.random()*emptySquares.length)];
 
  if(!sq){
    alert("Move not allowed");
    return false;
  }
  emptySquares = emptySquares.filter(s => s!==sq);
  leftSquares.push(sq);
  leftSquares.sort();

  $(`#${sq}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
  return true;
  
}
  

// Step 6: GAME OVER
const doesMovesLeft = () => {
  let movesLeft = checkMoreMovesPossible();
  if(!movesLeft){
    // alert("GAME OVER");
    $("#game-over").addClass("game-over").removeClass("game-going");
    $("#game-over button").addClass("play-again").removeClass("playing-now");
    return false;
  } 
  return true;
}


document.onkeydown = function(e){

  let move, shift;
  switch (e.keyCode) { 
    case 37: 
        console.log("left");
        move = LeftSum();
        console.log("sum done");
        shift = LeftShift();
        if(move || shift){
          l=GenerateNew();
        }
        doesMovesLeft();
        break; 
    case 38: 
        console.log("up");
        move = UpSum();
        console.log("sum done");
        shift = UpShift();
        if(move || shift){
          u=GenerateNew();
        } 
        doesMovesLeft();
        break; 
    case 39: 
        console.log("right");
        move = RightSum();
        console.log("sum done");
        shift = RightShift();
        if(move || shift){
          r=GenerateNew();
        } 
        doesMovesLeft();
        break; 
    case 40: 
        console.log("down");
        move = DownSum();
        console.log("sum done");
        shift = DownShift();
        if(move || shift){
          d=GenerateNew();
        } 
        doesMovesLeft();
        break; 
  } 
  $('.score').html(score);
  
}

document.getElementById("restart").addEventListener("click", () => {
  Reset();
});

const playAgain = () => {
  Reset();
  $("#game-over").addClass("game-going").removeClass("game-over");
  $("#game-over button").addClass("playing-now").removeClass("play-again");
}


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus();
})