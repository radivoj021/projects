var one = document.getElementById("one");
var rafal = document.getElementById("rafal");

one.classList.add("fire");

one.onclick = function () {
  rafal.classList.remove("fire");
  one.classList.add("fire");
};

rafal.onclick = function () {
  one.classList.remove("fire");
  rafal.classList.add("fire");
};

function visible() {
  for (var i = 1; i <= 9; i++) {
    if ((document.getElementById("brd" + i).style.visibility = "hidden")) {
      document.getElementById("brd" + i).style.visibility = "visible";
    }
  }
}

var res = 0;

function kill() {
  var bird1 = document.getElementById("bird1");
  var birdx1 = document.getElementById("brd1");

  bird1.onclick = function () {
    birdx1.style.visibility = "hidden";
    birdx1.classList.add("poof");
    document.getElementById("result").innerHTML = res;
    res = res + 1;
  };

  var bird2 = document.getElementById("bird2");
  var birdx2 = document.getElementById("brd2");

  bird2.onclick = function () {
    birdx2.style.visibility = "hidden";
    res = res + 1;
    document.getElementById("result").innerHTML = res;
  };

  var bird3 = document.getElementById("bird3");
  var birdx3 = document.getElementById("brd3");

  bird3.onclick = function () {
    birdx3.style.visibility = "hidden";
    res = res + 1;
    document.getElementById("result").innerHTML = res;
  };

  var bird4 = document.getElementById("bird4");
  var birdx4 = document.getElementById("brd4");

  bird4.onclick = function () {
    birdx4.style.visibility = "hidden";
    res = res + 1;
    document.getElementById("result").innerHTML = res;
  };

  var bird5 = document.getElementById("bird5");
  var birdx5 = document.getElementById("brd5");

  bird5.onclick = function () {
    birdx5.style.visibility = "hidden";
    res = res + 1;
    document.getElementById("result").innerHTML = res;
  };

  var bird6 = document.getElementById("bird6");
  var birdx6 = document.getElementById("brd6");

  bird6.onclick = function () {
    birdx6.style.visibility = "hidden";
    res = res + 1;
    document.getElementById("result").innerHTML = res;
  };

  var bird7 = document.getElementById("bird7");
  var birdx7 = document.getElementById("brd7");

  bird7.onclick = function () {
    birdx7.style.visibility = "hidden";
    res = res + 1;
    document.getElementById("result").innerHTML = res;
  };

  var bird8 = document.getElementById("bird8");
  var birdx8 = document.getElementById("brd8");

  bird8.onclick = function () {
    birdx8.style.visibility = "hidden";
    res = res + 1;
    document.getElementById("result").innerHTML = res;
  };

  var bird9 = document.getElementById("bird9");
  var birdx9 = document.getElementById("brd9");

  bird9.onclick = function () {
    birdx9.style.visibility = "hidden";
    res = res + 1;
    document.getElementById("result").innerHTML = res;
  };

  setInterval(visible, 5000);
}

kill();
