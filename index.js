const main = document.getElementById("main");
const body = document.getElementById("body");
const MasterUnitSwitch = document.getElementById("MasterSwitch");
const unit1Switch = document.getElementById("Unit1Switch");
const unit2Switch = document.getElementById("Unit2Switch");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

function masterHandle() {
  if (MasterUnitSwitch.checked) {
    body.style.backgroundColor = "#fff";
    body.style.display = "inline-flex";
  } else {
    body.style.display = "none";
    main.style.backgroundColor = "black";
  }
}

function unit1Handle() {
  if (unit1Switch.checked) {
    box1.style.backgroundColor = "red";
  } else {
    box1.style.backgroundColor = "lightgray";
  }
}

function unit2Handle() {
  if (unit1Switch.checked) {
    box2.style.backgroundColor = "yellow";
  } else {
    box2.style.backgroundColor = "lightgray";
  }
}
