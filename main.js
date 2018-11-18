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
  17999, 19999, 24999, 49999, 99999, 199999, 299999, 399999, 499999, 999999, 4999999, 9999999, 49999999]

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
  if (potatoes > mTimes[message]) {
    message += 1;
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
  updateMessage();
  changeThing();
  changeModal();
  gainPotatoes();
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
    cats += soldiers;
    soldiers = 0;
    document.getElementById("bLogic").setAttribute("hidden", "true");
  }
}

function rC() {
  if (freeP >= 100000) {
    freeP -= 100000;
    fries += (3040000 * 35901);
    mPs += (94000 * 35901);
    document.getElementById("rayCroc").setAttribute("hidden", "true");
    document.getElementById("takeOver").removeAttribute("hidden");
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
  }
}

function finfP() {
  if (freeP >= 2500000) {
    freeP -= 2500000;
    finfB = true;
    document.getElementById("finf").setAttribute("hidden", "true");
    document.getElementById("cinc").removeAttribute("hidden");

  }
}

function cincP() {
  if (freeP >= 500000000) {
    freeP -= 500000000;
    cincB = true;
    document.getElementById("cinc").setAttribute("hidden", "true");
    document.getElementById("endB").removeAttribute("hidden")
  }
}
function endG(){
  if(freeP >= 10000000000000){
    freeP-=10000000000000;
    document.getElementById("move2").remove();
    clearInterval(intervalId);
    document.getElementById('winModal').style.display = 'block';
  }
}

var intervalId = setInterval(loop, 16);
