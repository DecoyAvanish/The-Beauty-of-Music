function wrong1() {
  document.getElementById("onew").innerHTML = "";
  document.getElementById("oner").innerHTML = "";
  setTimeout(function () {
    document.getElementById("onew").innerHTML = "Wrong";
  }, 200);
}

function right1() {
  document.getElementById("onew").innerHTML = "";
  document.getElementById("oner").innerHTML = "";
  setTimeout(function () {
    document.getElementById("oner").innerHTML = "Right";
  }, 200);
}

function wrong2() {
  document.getElementById("twow").innerHTML = "";
  document.getElementById("twor").innerHTML = "";
  setTimeout(function () {
    document.getElementById("twow").innerHTML = "Wrong";
  }, 200);
}

function right2() {
  document.getElementById("twow").innerHTML = "";
  document.getElementById("twor").innerHTML = "";
  setTimeout(function () {
    document.getElementById("twor").innerHTML = "Right";
  }, 200);
}
function wrong3() {
  document.getElementById("threew").innerHTML = "";
  document.getElementById("threer").innerHTML = "";
  setTimeout(function () {
    document.getElementById("threew").innerHTML = "Wrong";
  }, 200);
}

function right3() {
  document.getElementById("threew").innerHTML = "";
  document.getElementById("threer").innerHTML = "";
  setTimeout(function () {
    document.getElementById("threer").innerHTML = "Right";
  }, 200);
}
function wrong4() {
  document.getElementById("fourw").innerHTML = "";
  document.getElementById("fourr").innerHTML = "";
  setTimeout(function () {
    document.getElementById("fourw").innerHTML = "Wrong";
  }, 200);
}

function right4() {
  document.getElementById("fourw").innerHTML = "";
  document.getElementById("fourr").innerHTML = "";
  setTimeout(function () {
    document.getElementById("fourr").innerHTML = "Right";
  }, 200);
}

const button = document.querySelector("button");

let audio = new Audio("gong.wav");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (event) => {
        const key = event.target.name;
        audio.src = `${key}.wav`;
        audio.play();
    });
});
