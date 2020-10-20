/*jshint esversion: 6 */

//ANIMATION 1: Heart Animation 
heartArray = [];

function saveHearts() {
  for (let i = 1; i <= 5; i++) {
    heartArray[i] = [];
    for (
      let j = 0;
      j < document.getElementById("heart" + i).classList.length;
      j++
    ) {
      heartArray[i].push(
        document.getElementById("heart" + i).classList.item(j)
      );
    }
  }
}


function onhover(hover_id) {
  saveHearts();
  let heart_id = parseInt(hover_id.charAt(hover_id.length - 1));

  for (let i = 1; i <= heart_id; i++) {
    document.getElementById("heart" + i).classList.add("material_hover");
  }
  for (i = heart_id + 1; i <= 5; i++) {
    document.getElementById("heart" + i).classList.remove("material_hover");
  }
}

function nothover() {
  for (i = 1; i <= 5; i++) {
    document.getElementById("heart" + i).classList.remove("material_hover");
    for (let j = 1; j <= heartArray[i].length - 1; j++) {
      document.getElementById("heart" + i).classList.add(heartArray[i][j]);
    }
  }
  heartArray = [];
}

window.addEventListener("click", function (event) {
  if (
    document.getElementById("heart1").contains(event.target) ||
    document.getElementById("heart2").contains(event.target) ||
    document.getElementById("heart3").contains(event.target) ||
    document.getElementById("heart4").contains(event.target) ||
    document.getElementById("heart5").contains(event.target)
  ) {
    let heart_id = parseInt(event.target.id.charAt(event.target.id.length - 1));
    for (let i = 1; i <= heart_id; i++) {
      document.getElementById("heart" + i).classList.add("material_hover");
    }
    for (i = heart_id + 1; i <= 5; i++) {
      document.getElementById("heart" + i).classList.remove("material_hover");
    }
    saveHearts();
  } else {
    for (i = 1; i <= 5; i++) {
      document.getElementById("heart" + i).classList.remove("material_hover");
    }
  }
});
