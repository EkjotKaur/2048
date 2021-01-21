// STEP 1: Two starting 2s 

let emptySquares = ['0-0', '0-1', '0-2', '0-3', '1-0', '1-1', '1-2', '1-3', '2-0', '2-1', '2-2', '2-3', '3-0', '3-1', '3-2', '3-3'];
console.log(emptySquares);

let leftSquares = [];

let sq1 = emptySquares[Math.floor(Math.random()*emptySquares.length)];
console.log(sq1);

emptySquares = emptySquares.filter(sq => sq!==sq1);
leftSquares.push(sq1);

let sq2 = emptySquares[Math.floor(Math.random()*emptySquares.length)];
console.log(sq2);

emptySquares = emptySquares.filter(sq => sq!==sq2);
leftSquares.push(sq2);
leftSquares.sort();

// let sq3 = emptySquares[Math.floor(Math.random()*emptySquares.length)];
// console.log(sq3);

// emptySquares = emptySquares.filter(sq => sq!==sq3);
// leftSquares.push(sq3);
// leftSquares.sort();

// let sq4 = emptySquares[Math.floor(Math.random()*emptySquares.length)];
// console.log(sq4);

// emptySquares = emptySquares.filter(sq => sq!==sq4);
// leftSquares.push(sq4);
// leftSquares.sort();

// let sq5 = emptySquares[Math.floor(Math.random()*emptySquares.length)];
// console.log(sq5);

// emptySquares = emptySquares.filter(sq => sq!==sq5);
// leftSquares.push(sq5);
// leftSquares.sort();

// let sq6 = emptySquares[Math.floor(Math.random()*emptySquares.length)];
// console.log(sq6);

// emptySquares = emptySquares.filter(sq => sq!==sq6);
// leftSquares.push(sq6);
// leftSquares.sort();

// let sq7 = emptySquares[Math.floor(Math.random()*emptySquares.length)];
// console.log(sq7);

// emptySquares = emptySquares.filter(sq => sq!==sq7);
// leftSquares.push(sq7);
// leftSquares.sort();

// let sq2 = emptySquares.getByIndex(Math.floor(Math.random()*emptySquares.size));
// console.log(sq2);

// emptySquares.delete(sq2);
// leftSquares.add(sq2);
console.log(leftSquares);
console.log(emptySquares);

$(`#${sq1}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
$(`#${sq2}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${sq3}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${sq4}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${sq5}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${sq6}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${sq7}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);


// // let row1 = Math.floor(Math.random()*4);
// // let col1 = Math.floor(Math.random()*4);

// // let row2 = Math.floor(Math.random()*4);
// let col2 = Math.floor(Math.random()*4);
// // let row3 = Math.floor(Math.random()*4);
// // let col3 = Math.floor(Math.random()*4);
// // let row4 = Math.floor(Math.random()*4);
// // let col4 = Math.floor(Math.random()*4);
// // let row5 = Math.floor(Math.random()*4);
// // let col5 = Math.floor(Math.random()*4);

// while(row1 === row2 && col1 === col2){
//   row2 = Math.floor(Math.random()*4);
//   col2 = Math.floor(Math.random()*4);
// }

// $(`#${row1}-${col1}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${row2}-${col2}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${row3}-${col3}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${row4}-${col4}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// $(`#${row5}-${col5}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);

// console.log($(`#${row2}-${col2}`));


// STEP 2: 

// const Left = () => {
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       console.log(j);
//       if($(`#${i}-${j}`).hasClass('empty-square') === false){
//           if(j==3){
//             break;
//           }
//         // console.log($(`#${i}-${j}`).hasClass('empty-square'));
//         console.log("j"+j);
//         let k=j+1;
//         console.log("k"+k);
//         while(k<4){
//           console.log("x");
//           if(!$(`#${i}-${k}`).hasClass('empty-square')){
//             if($(`#${i}-${j}`).html() !== $(`#${i}-${k}`).html()){
//               j=k-2;
//               break;
//             }
//             console.log($(`#${i}-${j}`));
//             console.log($(`#${i}-${k}`));
//             let toBeRemoved = $(`#${i}-${k}`).html();
//             $(`#${i}-${j}`).html(Number($(`#${i}-${j}`).html())+Number($(`#${i}-${k}`).html()));
//             let newValue = $(`#${i}-${j}`).html();
//             console.log(newValue);
//             $(`#${i}-${j}`).addClass(`full-square-${newValue}`).removeClass(`full-square-${toBeRemoved}`);
//             $(`#${i}-${k}`).addClass('empty-square').removeClass(`full-square-${toBeRemoved}`);
//             $(`#${i}-${k}`).html('');
//             // console.log($(`#${i}-${j}`).html());
//             // console.log($(`#${i}-${k}`).html(''));
//             j=k;
//             break;
//           }
//           k++;
//           // if(k===3) {j=k;}
//         }
//       }
//     }
//   }
// }

const Left = () => {
  let doesItMoves = false;
  leftSquares.forEach(sq => {
    let square = sq.split("-");
    console.log(square[1]);
    for (let i = Number(square[1])+1; i < 4; i++) {
      console.log(i);
      if($(`#${square[0]}-${i}`).hasClass('full-square')){
        console.log($(`#${square[0]}-${i}`).html());
        console.log($(`#${sq}`).html());
        if($(`#${square[0]}-${i}`).html() !== $(`#${sq}`).html()){
          break;
        }
        console.log(i);
        let toBeRemoved = $(`#${square[0]}-${i}`).html();
        $(`#${sq}`).html(Number($(`#${sq}`).html())*2);
        let newValue = $(`#${sq}`).html();
        console.log(newValue);
        console.log(`${square[0]}-${i}`);
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

const Right = () => {
  let doesItMoves = false;
  for (let j = leftSquares.length-1; j >= 0 ; j--) {
    const sq = leftSquares[j];

    let square = sq.split("-");
    console.log(square[1]);
    for (let i = Number(square[1])-1; i >= 0; i--) {
      console.log(i);
      if($(`#${square[0]}-${i}`).hasClass('full-square')){
        console.log($(`#${square[0]}-${i}`).html());
        console.log($(`#${sq}`).html());
        if($(`#${square[0]}-${i}`).html() !== $(`#${sq}`).html()){
          break;
        }
        console.log(i);
        let toBeRemoved = $(`#${square[0]}-${i}`).html();
        $(`#${sq}`).html(Number($(`#${sq}`).html())*2);
        let newValue = $(`#${sq}`).html();
        console.log(newValue);
        console.log(`${square[0]}-${i}`);
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

const Up = () => {
  let doesItMoves = false;
  leftSquares.forEach(sq => {
    let square = sq.split("-");
    console.log(square[0]);
    for (let i = Number(square[0])+1; i < 4; i++) {
      console.log(i);
      if($(`#${i}-${square[1]}`).hasClass('full-square')){
        console.log($(`#${i}-${square[1]}`).html());
        console.log($(`#${sq}`).html());
        if($(`#${i}-${square[1]}`).html() !== $(`#${sq}`).html()){
          break;
        }
        console.log(i);
        let toBeRemoved = $(`#${i}-${square[1]}`).html();
        $(`#${sq}`).html(Number($(`#${sq}`).html())*2);
        let newValue = $(`#${sq}`).html();
        console.log(newValue);
        console.log(`${i}-${square[1]}`);
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

const Down = () => {
  let doesItMoves = false;
  for (let j = leftSquares.length-1; j >= 0 ; j--) {
    const sq = leftSquares[j];

    let square = sq.split("-");
    console.log(square[0]);
    for (let i = Number(square[0])-1; i >= 0; i--) {
      console.log(i);
      if($(`#${i}-${square[1]}`).hasClass('full-square')){
        console.log($(`#${i}-${square[1]}`).html());
        console.log($(`#${sq}`).html());
        if($(`#${i}-${square[1]}`).html() !== $(`#${sq}`).html()){
          break;
        }
        console.log(i);
        let toBeRemoved = $(`#${i}-${square[1]}`).html();
        $(`#${sq}`).html(Number($(`#${sq}`).html())*2);
        let newValue = $(`#${sq}`).html();
        console.log(newValue);
        console.log(`${i}-${square[1]}`);
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

// const LeftShift = () => {
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       if($(`#${i}-${j}`).hasClass('empty-square')){

//         let k=j+1;
        
//         while(k<4 || $(`#${i}-${j}`).hasClass('empty-square')){
//           if(!$(`#${i}-${k}`).hasClass('empty-square')){
//             $(`#${i}-${j}`).html(Number($(`#${i}-${k}`).html()));
//             let value = $(`#${i}-${j}`).html();
//             $(`#${i}-${j}`).addClass(`full-square full-square-${value}`).removeClass(`empty-square`);
//             $(`#${i}-${k}`).addClass('empty-square').removeClass(`full-square-${value}`);
//             $(`#${i}-${k}`).html('');
//             break;
//           }
//         }
//       } 
//     }
    
//   }
// }

const LeftShift = () => {
  let doesItShift = false;
  leftSquares.forEach(sq => {
    let square = sq.split("-");
    for (let i = 0; i < Number(square[1]); i++) {
      if($(`#${square[0]}-${i}`).hasClass('empty-square')){

        let toBeShift = $(`#${sq}`).html()
        $(`#${square[0]}-${i}`).html($(`#${sq}`).html());

        console.log(`${square[0]}-${i}`);
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
    // console.log(leftSquares.length);
    // console.log(leftSquares[1]);
    const sq = leftSquares[j];
    // console.log(j);
    // console.log(sq);

    let square = sq.split("-");
    console.log(square);
    let m = leftSquares.length-1;
    console.log(Number(square[1]));
    console.log(m);
    for (let i = 3; i > Number(square[1]); i--) {
      console.log('Yes');
      if($(`#${square[0]}-${i}`).hasClass('empty-square')){

        let toBeShift = $(`#${sq}`).html()
        $(`#${square[0]}-${i}`).html($(`#${sq}`).html());

        console.log(`${square[0]}-${i}`);
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
  });
  return doesItShift;
}

const DownShift = () => {
  let doesItShift = false;
  for (let j = leftSquares.length-1; j >= 0; j--) {
    // console.log(leftSquares.length);
    // console.log(leftSquares[1]);
    const sq = leftSquares[j];
    // console.log(j);
    // console.log(sq);

    let square = sq.split("-");
    console.log(square);
    let m = leftSquares.length-1;
    console.log(Number(square[1]));
    console.log(m);
    for (let i = 3; i > Number(square[0]); i--) {
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
// const GenerateNew = () => {
//   let r = Math.floor(Math.random()*4);
//   let c = Math.floor(Math.random()*4);
//   while($(`#${r}-${c}`).hasClass('full-square')){
//     r = Math.floor(Math.random()*4);
//     c = Math.floor(Math.random()*4);
//   }
//   $(`#${r}-${c}`).removeClass('empty-square').addClass('full-square full-square-2').html(2);
// }

const checkMoreMovesPossible = () => {
  let doesItMovesX = false;
  let doesItMovesY = false;
  let doesItShiftLeft = false;
  let doesItShiftUp = false;
  let doesItShiftRight = false;
  let doesItShiftDown = false;

  leftSquares.forEach(sq => {
    let square = sq.split("-");
    console.log(square[1]);
    for (let i = Number(square[1])+1; i < 4; i++) {
      console.log(i);
      if($(`#${square[0]}-${i}`).hasClass('full-square')){
        console.log($(`#${square[0]}-${i}`).html());
        console.log($(`#${sq}`).html());
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
    console.log(square[0]);
    for (let i = Number(square[0])+1; i < 4; i++) {
      console.log(i);
      if($(`#${i}-${square[1]}`).hasClass('full-square')){
        console.log($(`#${i}-${square[1]}`).html());
        console.log($(`#${sq}`).html());
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
    console.log(square);
    let m = leftSquares.length-1;
    console.log(Number(square[1]));
    console.log(m);
    for (let i = 3; i > Number(square[1]); i--) {
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
    console.log(square);
    let m = leftSquares.length-1;
    console.log(Number(square[1]));
    console.log(m);
    for (let i = 3; i > Number(square[0]); i--) {
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

const GenerateNew = () => {
  let sq = emptySquares[Math.floor(Math.random()*emptySquares.length)];
  console.log(sq);
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
  
let u,d,l,r;
u=d=l=r=true;

const doesMovesLeft = () => {
  let movesLeft = checkMoreMovesPossible();
  if(!movesLeft){
    alert("GAME OVER");
    return false;
  } 
  return true;
}

document.onkeydown = function(e){
  // console.log(d);
  // console.log(l);
  // console.log("Hello");
  // console.log(e.keyCode);
  // if((!u || !d) && (!l || !r)){
  //   if(emptySquares.length===0){
  //     console.log("GAME OVER");
  //     alert("GAME OVER");
  //   }
  // }
  let move, shift;
  switch (e.keyCode) { 
    case 37: 
        console.log("left");
        move = Left();
        console.log("sum done");
        shift = LeftShift();
        if(move || shift){
          l=GenerateNew();
        }
        doesMovesLeft();
        break; 
    case 38: 
        console.log("up");
        move = Up();
        console.log("sum done");
        shift = UpShift();
        if(move || shift){
          u=GenerateNew();
        } 
        doesMovesLeft();
        break; 
    case 39: 
        console.log("right");
        move = Right();
        console.log("sum done");
        shift = RightShift();
        if(move || shift){
          r=GenerateNew();
        } 
        doesMovesLeft();
        break; 
    case 40: 
        console.log("down");
        move = Down();
        console.log("sum done");
        shift = DownShift();
        if(move || shift){
          d=GenerateNew();
        } 
        doesMovesLeft();
        break; 
  } 
  
}

