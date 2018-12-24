if (!localStorage.startDate) {
  localStorage.startDate = new Date().getTime();
}
document.getElementById('welcomeModal').style.display = 'block';
var potatoes = 0;
var freeP = 0;
var fries = 0;
var mPs = 0;
var cP = document.getElementById("changeP");
var patchB = false;
var patches = 0;
var patchPrice = 100;
var farmB = false;
var farms = 0;
var farmPrice = 500;
var catB = false;
var cats = 0;
var catPrice = 1750;
var farmerB = false;
var farmers = 0;
var soldierB = false;
var soldiers = 0;
var battle = 0;
var battleDifs = [0.1, 1.2, 2.5, 4.5, 8, 11, 13, 17, 20, 25];
var battleCs = [0, 1, 3, 5, 8, 10, 13, 14, 16, 20];
var battleLocs = ["Battle 1: 377 Keahole St, Honolulu, HI <br> 96825 - McDonald's, Hawaii",
  "Battle 2: 4618 Kilauea Ave, Honolulu, HI <br> 96816 - McDonald's, Hawaii",
  "Battle 3: 2915 E Manoa Rd, Honolulu, HI <br> 96822 - McDonald's, Hawaii",
  "Battle 4: 414 N School St, Honolulu, HI <br> 96817 - McDonald's, Hawaii",
  "Battle 5: 2121 N Nimitz Hwy, Honolulu, HI <br> 96819 - McDonald's, Hawaii",
  "Battle 6: 928 Valkenburgh St, Honolulu, HI <br> 96818 - McDonald's, Hawaii",
  "Battle 7: 4561 Salt Lake Blvd, Honolulu, HI <br> 96818 - McDonald's, Hawaii",
  "Battle 8: 98-147 Kamehameha Hwy, Aiea, HI <br> 96701 - McDonald's, Hawaii",
  "Battle 9: 1065 Waimano Home Rd, Pearl City, HI <br> 96782 - McDonald's, Hawaii",
  "Battle 10: 1180 Kuala St, Pearl City, HI <br> 96782 - McDonald's, Hawaii"
];
var bMDs = [1, 2, 4, 6, 8, 10, 14, 16, 18, 20];
var battleWon = false;
var lB = false;
var lBought = false;
var tB = false;
var tBought = false;
var rB = false;
var finfB = false;
var cincB = false;
var frame = 0;
var message = 0;
var mTimes = [29, 59, 129, 219, 299, 349, 399, 449, 799, 1199, 1699, 1999, 2199, 2449, 2999, 4499, 7999, 9999, 11999, 14999,
  17999, 19999, 24999, 49999, 99999, 199999, 299999, 399999, 499999, 999999, 4999999, 9999999, 49999999
]
var project = 0;
var millisPassed = 0;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  var finalResult = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  var cleanResult = finalResult.substring(0, 8)
  var stringResult = "";
  if (parseInt(hours) > 0) {
    stringResult += parseInt(hours);
    stringResult += " hours"
    if (parseInt(minutes) > 0) {
      stringResult += ", "
    }
  }
  if (parseInt(minutes) > 0) {
    stringResult += parseInt(minutes);
    stringResult += " minutes"
    if (parseInt(seconds) > 0) {
      stringResult += ", and "
    }
  }
  if (parseInt(seconds) > 0) {
    stringResult += parseInt(seconds);
    stringResult += " seconds"
  }

  return stringResult;
}

function updateproject() {
  if (!localStorage.project) localStorage.project = 0;
  project = Number(localStorage.project);
  setInterval(() => {
    localStorage.project = project
  }, 1)
}

updateproject();

function updatepotatoes() {
  if (!localStorage.potatoes) localStorage.potatoes = 0;
  potatoes = Number(localStorage.potatoes);
  setInterval(() => {
    localStorage.potatoes = potatoes
  }, 1)
}

updatepotatoes();


function updatefreeP() {
  if (!localStorage.freeP) localStorage.freeP = 0;
  freeP = Number(localStorage.freeP);
  setInterval(() => {
    localStorage.freeP = freeP
  }, 1)
}

updatefreeP();


function updatefries() {
  if (!localStorage.fries) localStorage.fries = 0;
  fries = Number(localStorage.fries);
  setInterval(() => {
    localStorage.fries = fries
  }, 1)
}

updatefries();


function updatemPs() {
  if (!localStorage.mPs) localStorage.mPs = 0;
  mPs = Number(localStorage.mPs);
  setInterval(() => {
    localStorage.mPs = mPs
  }, 1)
}

updatemPs();


function updatepatches() {
  if (!localStorage.patches) localStorage.patches = 0;
  patches = Number(localStorage.patches);
  setInterval(() => {
    localStorage.patches = patches
  }, 1)
}

updatepatches();


function updatepatchPrice() {
  if (!localStorage.patchPrice) localStorage.patchPrice = 100;
  patchPrice = Number(localStorage.patchPrice);
  setInterval(() => {
    localStorage.patchPrice = patchPrice
  }, 1)
}

updatepatchPrice();


function updatefarms() {
  if (!localStorage.farms) localStorage.farms = 0;
  farms = Number(localStorage.farms);
  setInterval(() => {
    localStorage.farms = farms
  }, 1)
}

updatefarms();


function updatefarmPrice() {
  if (!localStorage.farmPrice) localStorage.farmPrice = 500;
  farmPrice = Number(localStorage.farmPrice);
  setInterval(() => {
    localStorage.farmPrice = farmPrice
  }, 1)
}

updatefarmPrice();


function updatecats() {
  if (!localStorage.cats) localStorage.cats = 0;
  cats = Number(localStorage.cats);
  setInterval(() => {
    localStorage.cats = cats
  }, 1)
}

updatecats();


function updatecatPrice() {
  if (!localStorage.catPrice) localStorage.catPrice = 1750;
  catPrice = Number(localStorage.catPrice);
  setInterval(() => {
    localStorage.catPrice = catPrice
  }, 1)
}

updatecatPrice();


function updatefarmers() {
  if (!localStorage.farmers) localStorage.farmers = 0;
  farmers = Number(localStorage.farmers);
  setInterval(() => {
    localStorage.farmers = farmers
  }, 1)
}

updatefarmers();


function updatesoldiers() {
  if (!localStorage.soldiers) localStorage.soldiers = 0;
  soldiers = Number(localStorage.soldiers);
  setInterval(() => {
    localStorage.soldiers = soldiers
  }, 1)
}

updatesoldiers();


function updatebattle() {
  if (!localStorage.battle) localStorage.battle = 0;
  battle = Number(localStorage.battle);
  setInterval(() => {
    localStorage.battle = battle
  }, 1)
}

updatebattle();

function updateGame() {
  if (!localStorage.millisPassed) localStorage.millisPassed = 0;
  millisPassed = Number(localStorage.millisPassed);
  setInterval(() => {
    localStorage.millisPassed = millisPassed;
    millisPassed++;
  }, 1)
}

updateGame();

function updatepatchB() {
  if (!localStorage.patchB) localStorage.patchB = false;
  patchB = JSON.parse(localStorage.patchB);
  setInterval(() => {
    localStorage.patchB = patchB
  }, 1)
}

updatepatchB();


function updatefarmB() {
  if (!localStorage.farmB) localStorage.farmB = false;
  farmB = JSON.parse(localStorage.farmB);
  setInterval(() => {
    localStorage.farmB = farmB
  }, 1)
}

updatefarmB();


function updatecatB() {
  if (!localStorage.catB) localStorage.catB = false;
  catB = JSON.parse(localStorage.catB);
  setInterval(() => {
    localStorage.catB = catB
  }, 1)
}

updatecatB();


function updatefarmerB() {
  if (!localStorage.farmerB) localStorage.farmerB = false;
  farmerB = JSON.parse(localStorage.farmerB);
  setInterval(() => {
    localStorage.farmerB = farmerB
  }, 1)
}

updatefarmerB();


function updatesoldierB() {
  if (!localStorage.soldierB) localStorage.soldierB = false;
  soldierB = JSON.parse(localStorage.soldierB);
  setInterval(() => {
    localStorage.soldierB = soldierB
  }, 1)
}

updatesoldierB();


function updatelB() {
  if (!localStorage.lB) localStorage.lB = false;
  lB = JSON.parse(localStorage.lB);
  setInterval(() => {
    localStorage.lB = lB
  }, 1)
}

updatelB();


function updatelBought() {
  if (!localStorage.lBought) localStorage.lBought = false;
  lBought = JSON.parse(localStorage.lBought);
  setInterval(() => {
    localStorage.lBought = lBought
  }, 1)
}

updatelBought();


function updatetB() {
  if (!localStorage.tB) localStorage.tB = false;
  tB = JSON.parse(localStorage.tB);
  setInterval(() => {
    localStorage.tB = tB
  }, 1)
}

updatetB();


function updatetBought() {
  if (!localStorage.tBought) localStorage.tBought = false;
  tBought = JSON.parse(localStorage.tBought);
  setInterval(() => {
    localStorage.tBought = tBought
  }, 1)
}

updatetBought();


function updaterB() {
  if (!localStorage.rB) localStorage.rB = false;
  rB = JSON.parse(localStorage.rB);
  setInterval(() => {
    localStorage.rB = rB
  }, 1)
}

updaterB();


function updatefinfB() {
  if (!localStorage.finfB) localStorage.finfB = false;
  finfB = JSON.parse(localStorage.finfB);
  setInterval(() => {
    localStorage.finfB = finfB
  }, 1)
}

updatefinfB();


function updatecincB() {
  if (!localStorage.cincB) localStorage.cincB = false;
  cincB = JSON.parse(localStorage.cincB);
  setInterval(() => {
    localStorage.cincB = cincB
  }, 1)
}

updatecincB();

function randFloat(min, max) {
  return min + Math.random() * (max - min)
}

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min))
}

function changeThing() {
  if (message == 1) {
    cP.innerHTML = "> \"Potatoes are good. Very, very good.\" - Bonnie, the cat";
  } else if (message == 2) {
    cP.innerHTML = "> \"I have to agree with you, Bonnie. Maybe I should eat a potato right now.\" - Beeba, the cat";
  } else if (message == 3) {
    cP.innerHTML = "> \"I've always wanted to grow my very own potato patch.\" - Bonnie";
  } else if (message == 4) {
    cP.innerHTML = "> \"If you couldn't grow potatoes, what would you grow?\" - Beeba";
  } else if (message == 5) {
    cP.innerHTML = "> \"I would grow head rubs.\" - Bonnie";
  } else if (message == 6) {
    cP.innerHTML = "> \"What if there was a better way to make potatoes?\" - Beeba";
  } else if (message == 7) {
    cP.innerHTML = "> \"Oh - I know! We could make a big ray gun that turns stuff into potatoes!\" - Bonnie";
  } else if (message == 8) {
    cP.innerHTML = "> \"I was thinking more along the lines of a farm...\" - Beeba";
  } else if (message == 9) {
    cP.innerHTML = "> \"Farms are good... but I have a better idea!\" - Bonnie";
  } else if (message == 10) {
    cP.innerHTML = "> \"As long as it dosen't involve head rubs, I'm all ears.\" - Beeba";
  } else if (message == 11) {
    cP.innerHTML = "> \"I call it... Potato Cats!\" - Bonnie";
  } else if (message == 12) {
    cP.innerHTML = "> \"You're a potato cat. What can you do?\" - Beeba";
  } else if (message == 13) {
    cP.innerHTML = "> \"Not me. I was thinking we could make super potato cats that can farm.\" - Bonnie";
  } else if (message == 14) {
    cP.innerHTML = "> \"Farming potato cats? I think it's a long shot.\" - Beeba";
  } else if (message == 15) {
    cP.innerHTML = "> \"See? The potato cats are doing a super job farming. Now, I can stop farming and go to sleep.\" - Bonnie";
  } else if (message == 16) {
    cP.innerHTML = "> \"But our work isn't done! It isn't done!\" - Beeba";
  } else if (message == 17) {
    cP.innerHTML = "> \"True, but cats need their sleep.\" - Bonnie";
  } else if (message == 18) {
    cP.innerHTML = "> \"I was thinking we could take over Hawaii.\" - Beeba";
  } else if (message == 19) {
    cP.innerHTML = "> \"Sounds like something I would say.\" - Bonnie";
  } else if (message == 20) {
    cP.innerHTML = "> \"Our potatoes are reaking havoc. Just look at the news.\" - Beeba";
  } else if (message == 21) {
    cP.innerHTML = "> \"Potatoes overflow on remote farms in Hawaii. Superintelligent cats rumored to exsist.\" - CNN";
  } else if (message == 22) {
    cP.innerHTML = "> \"Cat warriors overrun McDonalds. US Military deems situation 'to cute to intervene'.\" - BBC";
  } else if (message == 23) {
    cP.innerHTML = "> \"McDonalds sends french fries to stop cats. Cats eat french fries in route.\" - Fox News";
  } else if (message == 24) {
    cP.innerHTML = "> \"Cat scores 250 on IQ test. Scientists believe this to be caused by an irregular diet of potatoes.\" - New York Times";
  } else if (message == 25) {
    cP.innerHTML = "> \"Lunatics prepare for impending cat domination as cats seize of control of most of Honolulu.\" - The New Yorker";
  } else if (message == 26) {
    cP.innerHTML = "> \"Potato spills in the Pacific Ocean are now bigger than the Pacific Garbage Patch.\" - The London Times";
  } else if (message == 27) {
    cP.innerHTML = "> \"Cats have created a flag to rally under. The flag has a white background and a potato in the center of it.\" - CNN";
  } else if (message == 28) {
    cP.innerHTML = "> \"Cats erect altars to the Potato God in conquered lands. Potatoism is now considered an offical religion.\" - The New Yorker";
  } else if (message == 29) {
    cP.innerHTML = "> \"WOW! Everyone is freaking out! And we started only with a little patch... I should be called Catpoleon!\" - Bonnie";
  } else if (message == 30) {
    cP.innerHTML = "> \"The world is crumbling under our cuteness...\" - Beeba";
  } else if (message == 31) {
    cP.innerHTML = "> \"Breaking news! The UN has surrendered to the United Cat Pact! Humanity has been overthrown!\" - BBC";
  } else if (message == 32) {
    cP.innerHTML = "> \"Well, we pretty much rule the world now!\" - Bonnie";
  } else if (message == 33) {
    cP.innerHTML = "> \"Potatoes are even better than cookies!\" - Bonnie & Beeba";
  }

}

function updateMessage() {
  for (var i = 0; i < mTimes.length; i++) {
    if (potatoes > mTimes[message]) {
      message += 1;
    }
  }
}

function changeModal() {
  if (potatoes > 99) {
    if (!patchB) {
      document.getElementById('patchModal').style.display = 'block';
      document.getElementById("patchLogic").removeAttribute("hidden");
      patchB = true;
    }
  }
  if (potatoes > 499) {
    if (!farmB) {
      document.getElementById('farmModal').style.display = 'block';
      document.getElementById("farmLogic").removeAttribute("hidden");
      farmB = true;
    }
  }
  if (potatoes > 2499) {
    if (!catB) {
      document.getElementById('catModal').style.display = 'block';
      document.getElementById("catLogic").removeAttribute("hidden");
      catB = true;
    }
  }
  if (potatoes > 11999) {
    if (!soldierB) {
      document.getElementById('battleModal').style.display = 'block';
      document.getElementById("bLogic").removeAttribute("hidden");
      document.getElementById("bField").removeAttribute("hidden");
      document.getElementById("sRes").removeAttribute("hidden");
      soldierB = true;
    }
  }
  if (cats > 0) {
    if (!farmerB) {
      document.getElementById('farmercatModal').style.display = 'block';
      document.getElementById("sLogic").removeAttribute("hidden");
      farmerB = true;
    }
  }
  if (battle > 2) {
    if (!lB) {
      document.getElementById("lModal").style.display = 'block';
      document.getElementById("lShell").removeAttribute("hidden");
      lB = true;
    }
  }
  if (battle > 5) {
    if (!tB) {
      document.getElementById("tModal").style.display = 'block';
      document.getElementById("tShell").removeAttribute("hidden");
      tB = true;
    }
  }
  if (battle > 9) {
    if (!rB) {
      document.getElementById("rModal").style.display = 'block';
      document.getElementById("pLut").removeAttribute("hidden");
      document.getElementById("bField").setAttribute("hidden", "true");
      rB = true;
    }
  }

}

function gainPotatoes() {
  if (finfB) {
    farms += 100;
  }
  if (cincB) {
    farmers += 100;
  }
  if (frame % 63 == 0) {
    potatoes += patches;
    freeP += patches;
    potatoes += 10 * farms;
    freeP += 10 * farms;
    potatoes += patches * farmers;
    freeP += patches * farmers;
    potatoes += 10 * farms * farmers;
    freeP += 10 * farms * farmers;

  }

}

function chooseDif() {
  var dif = battleDifs[battle];
  if (dif <= 1) {
    return "Very Easy";
  } else if (dif > 1 && dif <= 2) {
    return "Easy";
  } else if (dif > 2 && dif <= 5) {
    return "Intermediate";
  } else if (dif > 5 && dif <= 10) {
    return "Hard";
  } else if (dif > 10 && dif <= 15) {
    return "Very Hard";
  } else {
    return "Near Impossible";
  }

}

function updateProgressBar(totalNum) {
  var percentage = (potatoes / totalNum) * 100;
  document.getElementById("potatozBar").setAttribute("value", percentage);
  document.getElementById("percentageText").innerHTML = "Potato Resources Utilized Percentage: " + Number(percentage).toFixed(11) + "%";

}

function loop() {
  frame += 1;
  document.getElementById("moveUp").innerHTML = "Potatoz: " + potatoes;
  document.getElementById("freePos").innerHTML = "Unused Potatoes: " + freeP;
  document.getElementById("fries").innerHTML = "French Fries: " + fries;
  document.getElementById("mashed").innerHTML = "Mashed Potatoes(lbs): " + mPs;
  document.getElementById("patchButton").innerHTML = "Purchase patch for " + patchPrice + " potatoes.";
  document.getElementById("patchNum").innerHTML = "Patches: " + patches;
  document.getElementById("farmButton").innerHTML = "Purchase farm for " + farmPrice + " potatoes.";
  document.getElementById("farmNum").innerHTML = "Farms: " + farms;
  document.getElementById("catButton").innerHTML = "Purchase potato cat for " + catPrice + " potatoes.";
  document.getElementById("catNum").innerHTML = "Available Cats: " + cats;
  document.getElementById("farmerNum").innerHTML = "Farmer Cats: " + farmers;
  document.getElementById("sNum").innerHTML = "Soldier Cats: " + soldiers;
  document.getElementById("bLoc").innerHTML = battleLocs[battle];
  document.getElementById("bDif").innerHTML = "Battle Difficulty: " + chooseDif();
  //millisPlaying = new Date().getTime() - localStorage.startDate;
  document.getElementById("playingTime").innerHTML = "You've been playing " + msToTime(millisPassed*4) + "."
  updateMessage();
  changeThing();
  changeModal();
  gainPotatoes();
  updateProgressBar(10000000000000);
}

function makePotato() {
  potatoes += 1;
  freeP += 1;
}

function makePatch() {
  if (freeP >= patchPrice) {
    freeP -= patchPrice;
    patches += 1;
    patchPrice += Math.floor(patchPrice / 10);
  }
}

function makeFarm() {
  if (freeP >= farmPrice) {
    freeP -= farmPrice;
    farms += 1;
    farmPrice += Math.floor(farmPrice / 9);
  }
}

function makeCat() {
  if (freeP >= catPrice) {
    freeP -= catPrice;
    cats += 1;
    catPrice += Math.floor(catPrice / 8);
  }
}

function makeFarmer() {
  if (cats > 0) {
    cats -= 1;
    farmers += 1;
  }
}

function makeSoldier() {
  if (cats > 0) {
    cats -= 1;
    soldiers += 1;
  }
}


function recallCats() {
  cats += (farmers + soldiers);
  farmers = 0;
  soldiers = 0;
}

function battleGo() {
  if (soldiers < 1) {
    return;
  }
  var defenders = battleDifs[battle];
  var offenders = soldiers;
  var cap = offenders;
  if (lBought) {
    for (var i = 0; i < cap; i++) {
      if (freeP > 99) {
        freeP -= 100;
        offenders += 0.5;
      }
    }
  }
  if (tBought) {
    for (var i = 0; i < cap; i++) {
      if (freeP > 149) {
        freeP -= 150;
        defenders -= randInt(0.4, 1.1);
      }
    }
  }
  var captured = 0;
  defenders += randFloat(-0.5, 1);
  offenders += randFloat(-0.5, 5);
  for (var i = 0; i < battleCs[battle]; i++) {
    if (randInt(-2, offenders) == 1) {
      if (soldiers > 0) {
        soldiers -= 1;
        offenders -= 1;
        captured += 1;
      }
    }
  }
  if (defenders >= offenders) {
    battleWon = false;
  } else {
    battleWon = true;
  }
  var displayMessage = "";
  if (battleWon == true) {
    displayMessage += "Victory! "
  } else {
    displayMessage += "Defeat... "
  }
  displayMessage += captured + " cats captured."
  if (battleWon == true) {
    fries += 3040000 * bMDs[battle];
    mPs += 94000 * bMDs[battle];
    displayMessage += "<br> Fries Captured: ";
    displayMessage += 3040000 * bMDs[battle];
    displayMessage += "<br> Mashed Potatoes (in lbs) Captured: <br>";
    displayMessage += 94000 * bMDs[battle];
    bMDs[battle] = 0;
  }
  document.getElementById("bResult").innerHTML = displayMessage;
  if (battleWon == true) {
    battle += 1;
  }
}

function buyLaunchers() {
  if (freeP >= 5000 && fries >= 1000000 && mPs >= 50000) {
    freeP -= 5000;
    fries -= 1000000;
    mashed -= 50000;
    lBought = true;
    document.getElementById("lShell").setAttribute("hidden", "true");
    document.getElementById("lMessage").innerHTML = "Potato Launchers equipped! Cats now have potato launchers for battle!"
  }
}

function buyBombs() {
  if (freeP >= 10000 && fries >= 3000000 && mPs >= 150000) {
    freeP -= 10000;
    fries -= 3000000;
    mashed -= 150000;
    tBought = true;
    document.getElementById("tShell").setAttribute("hidden", "true");
    document.getElementById("tMessage").innerHTML = "Tater tot bombs equipped! Cats now have TTBs for battle!"
  }
}

function pL() {
  if (freeP >= 250000) {
    freeP -= 250000;
    document.getElementById("move1").setAttribute("hidden", "true");
    document.getElementById("pLZ").removeAttribute("hidden");
    document.getElementById("lMessage").innerHTML = ""
    document.getElementById("tMessage").innerHTML = ""
    document.getElementById("bLogic").setAttribute("hidden", "true");
    cats += soldiers;
    soldiers = 0;
    project = 1;
  }
}

function rC() {
  if (freeP >= 100000) {
    freeP -= 100000;
    fries += (3040000 * 35901);
    mPs += (94000 * 35901);
    document.getElementById("rayCroc").setAttribute("hidden", "true");
    document.getElementById("takeOver").removeAttribute("hidden");
    project = 2;
  }
}

function tK() {
  if (freeP >= 250000) {
    freeP -= 250000;
    patchPrice = Math.floor(patchPrice / 10);
    farmPrice = Math.floor(farmPrice / 10);
    catPrice = Math.floor(catPrice / 10);
    document.getElementById("takeOver").setAttribute("hidden", "true");
    document.getElementById("spudTron").removeAttribute("hidden");
    project = 3;
  }
}

function spudTron2000() {
  if (freeP >= 500000) {
    freeP -= 500000;
    potatoes += 1000000;
    freeP += 1000000;
    fries = 0;
    mPs = 0;
    document.getElementById("spudTron").setAttribute("hidden", "true");
    document.getElementById("finf").removeAttribute("hidden");
    project = 4;
  }
}

function finfP() {
  if (freeP >= 2500000) {
    freeP -= 2500000;
    finfB = true;
    document.getElementById("finf").setAttribute("hidden", "true");
    document.getElementById("cinc").removeAttribute("hidden");
    project = 5;

  }
}

function cincP() {
  if (freeP >= 500000000) {
    freeP -= 500000000;
    cincB = true;
    document.getElementById("cinc").setAttribute("hidden", "true");
    document.getElementById("endB").removeAttribute("hidden");
    project = 6;
  }
}

function reset() {
  potatoes = 0;
  freeP = 0;
  fries = 0;
  mPs = 0;
  cP = document.getElementById("changeP");
  patchB = false;
  patches = 0;
  patchPrice = 100;
  farmB = false;
  farms = 0;
  farmPrice = 500;
  catB = false;
  cats = 0;
  catPrice = 1750;
  farmerB = false;
  farmers = 0;
  soldierB = false;
  soldiers = 0;
  battle = 0;
  battleDifs = [0.1, 1.2, 2.5, 4.5, 8, 11, 13, 17, 20, 25];
  battleCs = [0, 1, 3, 5, 8, 10, 13, 14, 16, 20];
  battleLocs = ["Battle 1: 377 Keahole St, Honolulu, HI <br> 96825 - McDonald's, Hawaii",
    "Battle 2: 4618 Kilauea Ave, Honolulu, HI <br> 96816 - McDonald's, Hawaii",
    "Battle 3: 2915 E Manoa Rd, Honolulu, HI <br> 96822 - McDonald's, Hawaii",
    "Battle 4: 414 N School St, Honolulu, HI <br> 96817 - McDonald's, Hawaii",
    "Battle 5: 2121 N Nimitz Hwy, Honolulu, HI <br> 96819 - McDonald's, Hawaii",
    "Battle 6: 928 Valkenburgh St, Honolulu, HI <br> 96818 - McDonald's, Hawaii",
    "Battle 7: 4561 Salt Lake Blvd, Honolulu, HI <br> 96818 - McDonald's, Hawaii",
    "Battle 8: 98-147 Kamehameha Hwy, Aiea, HI <br> 96701 - McDonald's, Hawaii",
    "Battle 9: 1065 Waimano Home Rd, Pearl City, HI <br> 96782 - McDonald's, Hawaii",
    "Battle 10: 1180 Kuala St, Pearl City, HI <br> 96782 - McDonald's, Hawaii"
  ];
  bMDs = [1, 2, 4, 6, 8, 10, 14, 16, 18, 20];
  battleWon = false;
  lB = false;
  lBought = false;
  tB = false;
  tBought = false;
  rB = false;
  finfB = false;
  cincB = false;
  frame = 0;
  message = 0;
  mTimes = [29, 59, 129, 219, 299, 349, 399, 449, 799, 1199, 1699, 1999, 2199, 2449, 2999, 4499, 7999, 9999, 11999, 14999,
    17999, 19999, 24999, 49999, 99999, 199999, 299999, 399999, 499999, 999999, 4999999, 9999999, 49999999
  ]
  project = 0;
  millisPassed = 0;
}

function endG() {
  if (freeP >= 10000000000000) {
    freeP -= 10000000000000;
    document.getElementById("move2").remove();
    clearInterval(intervalId);
    document.getElementById("playTime").innerHTML = "You took " + msToTime(millisPassed*4) + " to finish the game."
    document.getElementById('winModal').style.display = 'block';
    reset();
  }
}

var intervalId = setInterval(loop, 16);

window.onload = () => {
  if (patchB) {
    document.getElementById("patchLogic").removeAttribute("hidden");
  }
  if (farmB) {
    document.getElementById("farmLogic").removeAttribute("hidden");
  }
  if (catB) {
    document.getElementById("catLogic").removeAttribute("hidden");
  }
  if (soldierB) {
    document.getElementById("bLogic").removeAttribute("hidden");
    document.getElementById("bField").removeAttribute("hidden");
    document.getElementById("sRes").removeAttribute("hidden");
  }
  if (farmerB) {
    document.getElementById("sLogic").removeAttribute("hidden");
  }
  if (lB) {
    document.getElementById("lShell").removeAttribute("hidden");
  }
  if (tB) {
    document.getElementById("tShell").removeAttribute("hidden");
  }
  if (rB) {
    document.getElementById("pLut").removeAttribute("hidden");
    document.getElementById("bField").setAttribute("hidden", "true");
  }
  if (battle > 9) {
    document.getElementById("lShell").setAttribute("hidden", "true")
    document.getElementById("tShell").setAttribute("hidden", "true")
  }
  if (project > 0) {
    document.getElementById("move1").setAttribute("hidden", "true");
    document.getElementById("pLZ").removeAttribute("hidden");
    document.getElementById("lMessage").innerHTML = ""
    document.getElementById("tMessage").innerHTML = ""
    document.getElementById("bLogic").setAttribute("hidden", "true");
    if (project === 2) {
      document.getElementById("rayCroc").setAttribute("hidden", "true");
      document.getElementById("takeOver").removeAttribute("hidden");
    }
    if (project === 3) {
      document.getElementById("rayCroc").setAttribute("hidden", "true");
      document.getElementById("takeOver").setAttribute("hidden", "true");
      document.getElementById("spudTron").removeAttribute("hidden");
    }
    if (project === 4) {
      document.getElementById("rayCroc").setAttribute("hidden", "true");
      document.getElementById("spudTron").setAttribute("hidden", "true");
      document.getElementById("finf").removeAttribute("hidden");
    }
    if (project === 5) {
      document.getElementById("rayCroc").setAttribute("hidden", "true");
      document.getElementById("finf").setAttribute("hidden", "true");
      document.getElementById("cinc").removeAttribute("hidden");
    }
    if (project === 6) {
      document.getElementById("rayCroc").setAttribute("hidden", "true");
      document.getElementById("cinc").setAttribute("hidden", "true");
      document.getElementById("endB").removeAttribute("hidden");
    }
  } else {
    document.getElementById('pLZ').setAttribute("hidden", "true")
  }
  if (!localStorage.username) {
    localStorage.username = prompt("Enter a potatoz username (other players will see this):")
  }
  document.getElementById("usernameP").innerHTML = "> You're logged in as: " + "<em>" + localStorage.username + "</em>";

}
