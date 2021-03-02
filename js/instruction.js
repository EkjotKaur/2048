

for (let i = 1; i < 5; i++) {
  console.log($(`#inst-${i}`));
  $(`#inst-${i}`).css({
    "display": "none"
  });
  
}

$(`#inst-${1}`).css({
  "display": "flex"
});

const next = () => {
  for (let i = 1; i < 4; i++) {
    console.log($(`#inst-${i}`).css("display"));
    if($(`#inst-${i}`).css("display") != "none"){
      $(`#inst-${i}`).css({
        "display": "none"
      });
      if(i!=3){
        $(`#inst-${i+1}`).css({
          "display": "flex"
        });
      } else {
        $(`#inst-${1}`).css({
          "display": "flex"
        });
      }
      return;
    }
    
    
  }
}
