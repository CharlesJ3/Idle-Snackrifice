/**
 * Main Functions
 */

/**
 * Reanimal Control / Ring Speed and Power
 */

const upgradeRingSpeedOne = () => {
  if (player.animal > rings[0].ringCost) {
    player.animal -= rings[0].ringCost;
    rings[0].rotationalSpeedX += 0.005;

    rings[0].ringLevel += 1;
    rings[0].ringCost = (rings[0].ringCost * 1.15) + (1 * rings[0].ringLevel);

    function flashLights() {
      if (materialOne.emissiveIntensity <= 1.5) {
        materialOne.emissiveIntensity += .02
        setTimeout(flashLights, 100);
      } else {
        materialOne.emissiveIntensity = materialDefaults.materialEmissiveOneIntensity;
      }
    }

    flashLights();

    // function showLights(){
    //   for(i = 0; i < 10; i++) {
    //     materialOne.emissiveIntensity += .01;
    //     setTimeout(function () {
    //       materialOne.emissiveIntensity += .01;
    //       console.log('sup');
    //     }, 500);
    //   }
    //  }
    //  showLights();
  }
}

const upgradeRingSpeedTwo = () => {
  if (player.animal > rings[1].ringCost) {
    player.animal -= rings[1].ringCost;
    rings[1].rotationalSpeedX += 0.005;

    rings[1].ringLevel += 1;
    rings[1].ringCost = (rings[1].ringCost * 1.15) + (1 * rings[1].ringLevel);

    function flashLights() {
      if (materialTwo.emissiveIntensity <= 1.5) {
        materialTwo.emissiveIntensity += .02
        setTimeout(flashLights, 100);
      } else {
        materialTwo.emissiveIntensity = materialDefaults.materialEmissiveTwoIntensity;
      }
    }

    flashLights();
  }
}

const upgradeRingSpeedThree = () => {
  if (player.animal > rings[2].ringCost) {
    player.animal -= rings[2].ringCost;
    rings[2].rotationalSpeedX += 0.005;

    rings[2].ringLevel += 1;
    rings[2].ringCost = (rings[2].ringCost * 1.15) + (1 * rings[2].ringLevel);

    function flashLights() {
      if (materialThree.emissiveIntensity <= 1.5) {
        materialThree.emissiveIntensity += .02
        setTimeout(flashLights, 100);
      } else {
        materialThree.emissiveIntensity = materialDefaults.materialEmissiveThreeIntensity;
      }
    }

    flashLights();
  }
}

const upgradeRingSpeedFour = () => {
  if (player.human > rings[3].ringCost) {
    player.human -= rings[3].ringCost;
    rings[3].rotationalSpeedX += 0.005;

    rings[3].ringLevel += 1;
    rings[3].ringCost = (rings[3].ringCost * 1.15) + (1 * rings[3].ringLevel);

    function flashLights() {
      if (materialFour.emissiveIntensity <= 1.5) {
        materialFour.emissiveIntensity += .02
        setTimeout(flashLights, 100);
      } else {
        materialFour.emissiveIntensity = materialDefaults.materialEmissiveFourIntensity;
      }
    }

    flashLights();
  }
}

const upgradeRingSpeedFive = () => {
  if (player.human > rings[4].ringCost) {
    player.human -= rings[4].ringCost;
    rings[4].rotationalSpeedX += 0.005;

    rings[4].ringLevel += 1;
    rings[4].ringCost = (rings[4].ringCost * 1.15) + (1 * rings[4].ringLevel);

    function flashLights() {
      if (materialFive.emissiveIntensity <= 1.5) {
        materialFive.emissiveIntensity += .02
        setTimeout(flashLights, 100);
      } else {
        materialFive.emissiveIntensity = materialDefaults.materialEmissiveFiveIntensity;
      }
    }

    flashLights();
  }
}

const upgradeRingSpeedSix = () => {
  if (player.human > rings[5].ringCost) {
    player.human -= rings[5].ringCost;
    rings[5].rotationalSpeedX += 0.005;

    rings[5].ringLevel += 1;
    rings[5].ringCost = (rings[5].ringCost * 1.15) + (1 * rings[5].ringLevel);

    function flashLights() {
      if (materialSix.emissiveIntensity <= 1.5) {
        materialSix.emissiveIntensity += .02
        setTimeout(flashLights, 100);
      } else {
        materialSix.emissiveIntensity = materialDefaults.materialEmissiveSixIntensity;
      }
    }

    flashLights();
  }
}
/**
 * Adding or Removing Test Objects
 */


// Removes all objects 

//TODO : REMOVE ONE
//TODO ISSUE: unable to correctly snag the player.torus???
//Activated and set it to false; will cause game-freezing bug

const removeAllObjects = () => {
  for (var i = scene.children.length - 1; i >= 0; i--) {
    obj = scene.children[i];
    scene.remove(obj);
  }

  player.permanentRingCountForVariableNames = 1;
}

// Removes all objects then add main sphere back
const removeAllObjectsExceptMainSphere = () => {
  for (var i = scene.children.length - 1; i >= 1; i--) {
    obj = scene.children[i];
    scene.remove(obj);
  }

  // player.torusOneActivated = false;
  // player.torusTwoActivated = false;
  // player.torusThreeActivated = false;
  // player.torusFourActivated = false;
  // player.torusFiveActivated = false;
  // player.torusSixActivated = false;


  let sphere = new THREE.Mesh(mainSphere, material);
  scene.add(sphere);
  player.permanentRingCountForVariableNames = 1;
}

/**
 * Adding Torus' to the Canvas
 */

const addNewRingToArray = () => {

  if( player.currentRingCount - 1 < 3) {
    //TODO : Change to object.js for dynamic values, currently static
    let setVariableNameForTorus = `torus${player.permanentRingCountForVariableNames}`;

    switch (setVariableNameForTorus) {
      case 'torus1':
        runTorusOne();
        break;
      case 'torus2':
        runTorusTwo();
        break;
      case 'torus3':
        runTorusThree();
        break;
    }
  } else{
    //
  }
}

const addNewHumanRingToArray = () => {
  if( player.currentRingCount - 1 >= 3) {
    //TODO : Change to object.js for dynamic values, currently static
    let setVariableNameForTorus = `torus${player.permanentRingCountForVariableNames}`;

    switch (setVariableNameForTorus) {
      case 'torus4':
        runTorusFour();
        break;
      case 'torus5':
        runTorusFive();
        break;
      case 'torus6':
        runTorusSix();
        break;
    }
  } else{
  }
}
/**
 * TORUS'
 */


// For reference, a Torus is the following:

// radius             - Radius of the torus, from the center of the torus to the center of the tube. Default is 1. 
// tube               - Radius of the tube. Default is 0.4. 
// radialSegments     - Default is 8 
// tubularSegments    - Default is 6. 
// arc                - Central angle. Default is Math.PI * 2.

// Torus One

const runTorusOne = () => {
  if (player.animal >= rings[0].ringCost) {
    // This is the standard "Create-an-Object" template
    let mainTorus = new THREE.TorusGeometry(5, 1, 4, 100);
    let torus = new THREE.Mesh(mainTorus, materialOne);
    torus.name = 'torus';
    scene.add(torus);
    torus.position.y = 3;

    // Turn the spinner on when you activate the torus
    player.torusOneActivated = true;

    // Add initial level
    rings[0].ringLevel += 1;

    // Show the Ring Section Once Activated
    document.querySelector('.ringSectionOne').classList.add("fadeIn");

    setTimeout(
      function(){ document.querySelector('.ringSectionOne').style.display = "initial"; },
    10)

    player.permanentRingCountForVariableNames++;
    player.currentRingCount++;
  } 
}

// Torus Two

const runTorusTwo = () => {
  if (player.animal >= rings[1].ringCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusTwo = new THREE.TorusGeometry(9, 1.65, 4, 100);
    let torusTwo = new THREE.Mesh(mainTorusTwo, materialTwo);
    torusTwo.name = 'torusTwo';
    scene.add(torusTwo);
    torusTwo.position.y = 3;

    // Turn the spinner on when you activate the torus
    player.torusTwoActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 500;


    // Add initial level
    rings[1].ringLevel += 1;

    // Show the Ring Section Once Activated
    document.querySelector('.ringSectionTwo').classList.add("fadeIn");

    setTimeout(
      function(){ document.querySelector('.ringSectionTwo').style.display = "initial"; },
    10)

    player.permanentRingCountForVariableNames++;
    player.currentRingCount++;
  }
}

// Torus Three

const runTorusThree = () => {
  if (player.animal >= rings[2].ringCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusThree = new THREE.TorusGeometry(13, 2.95, 4, 100);
    let torusThree = new THREE.Mesh(mainTorusThree, materialThree);
    torusThree.name = 'torusThree';
    scene.add(torusThree);
    torusThree.position.y = 3;

    // Turn the spinner on when you activate the torus
    player.torusThreeActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 555;

    // Add initial level
    rings[2].ringLevel += 1;

    // Show the Ring Section Once Activated
    document.querySelector('.ringSectionThree').classList.add("fadeIn");

    setTimeout(
      function(){ document.querySelector('.ringSectionThree').style.display = "initial"; },
    10)

    player.permanentRingCountForVariableNames++;
    player.currentRingCount++;

  }
}

// Torus Four

const runTorusFour = () => {
  if (player.human >= rings[3].ringCost && player.currentRingCount -1 > 2) {
    // This is the standard "Create-an-Object" template
    let mainTorusFour = new THREE.TorusGeometry(17, 1.25, 4, 100);
    let torusFour = new THREE.Mesh(mainTorusFour, materialFour);
    torusFour.name = 'torusFour';
    scene.add(torusFour);
    torusFour.position.y = 3;

    // Turn the spinner on when you activate the torus
    player.torusFourActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 635;

    // Add initial level
    rings[3].ringLevel += 1;

    // Show the Ring Section Once Activated
    document.querySelector('.ringSectionFour').classList.add("fadeIn");

    setTimeout(
      function(){ document.querySelector('.ringSectionFour').style.display = "initial"; },
    10)

    player.permanentRingCountForVariableNames++;
    player.currentRingCount++;

    //UNIQUE TO THIS SPECIFIC RING - Will Switchover Once to the HUMAN SACRIFICES to help out
    switchMenuTwo();
  }
}

// Torus Five

const runTorusFive = () => {
  if (player.human >= rings[4].ringCost && player.currentRingCount -1 > 2) {

    // This is the standard "Create-an-Object" template
    let mainTorusFive = new THREE.TorusGeometry(24, 1.55, 5, 100);
    let torusFive = new THREE.Mesh(mainTorusFive, materialFive);
    torusFive.name = 'torusFive';
    scene.add(torusFive);
    torusFive.position.y = 3;

    // Turn the spinner on when you activate the torus
    player.torusFiveActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 755;

    // Add initial level
    rings[4].ringLevel += 1;

    // Show the Ring Section Once Activated
    document.querySelector('.ringSectionFive').classList.add("fadeIn");

    setTimeout(
      function(){ document.querySelector('.ringSectionFive').style.display = "initial"; },
    10)

    player.permanentRingCountForVariableNames++;
    player.currentRingCount++;
  }
}

// Torus Six

const runTorusSix = () => {
  if (player.human >= rings[5].ringCost && player.currentRingCount -1 > 2) {
    // This is the standard "Create-an-Object" template
    let mainTorusSix = new THREE.TorusGeometry(31, 1.85, 6, 100);
    let torusSix = new THREE.Mesh(mainTorusSix, materialSix);
    torusSix.name = 'torusSix';
    scene.add(torusSix);
    torusSix.position.y = 3;

    // Turn the spinner on when you activate the torus
    player.torusSixActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 855;

    // Add initial level
    rings[5].ringLevel += 1;

    // Show the Ring Section Once Activated
    document.querySelector('.ringSectionSix').classList.add("fadeIn");

    setTimeout(
      function(){ document.querySelector('.ringSectionSix').style.display = "initial"; },
    10)

    player.permanentRingCountForVariableNames++;
    player.currentRingCount++;
  }
}

/**
 * Rotational Functions
 */

const checkRotations = () => {
  torus.position.x += .01;
}


/**
 * On Load Functions
 */

/*
 * Menu and Menu Switching
 */

// REFACTOR : 
const switchMenuOne = () => {
  $("#menuSystemOne").css('display', 'inherit');
  $("#menuSystemTwo").css('display', 'none');
  $("#menuSystemThree").css('display', 'none');
  $("#menuSystemFour").css('display', 'none');
}

const switchMenuTwo = () => {
  $("#menuSystemOne").css('display', 'none');
  $("#menuSystemTwo").css('display', 'inherit');
  $("#menuSystemThree").css('display', 'none');
  $("#menuSystemFour").css('display', 'none');
}

const switchMenuThree = () => {
  $("#menuSystemOne").css('display', 'none');
  $("#menuSystemTwo").css('display', 'none');
  $("#menuSystemThree").css('display', 'inherit');
  $("#menuSystemFour").css('display', 'none');
}

const switchMenuFour = () => {
  $("#menuSystemOne").css('display', 'none');
  $("#menuSystemTwo").css('display', 'none');
  $("#menuSystemThree").css('display', 'none');
  $("#menuSystemFour").css('display', 'inherit');
}


const checkForTalents = () => {

  if (!$('#tmodalTalents').prop('checked')) {
    $(".modalTalents").css('display', 'none');
  }

  if ($('#tmodalTalents').prop('checked')) {
    $(".modalTalents").css('display', 'inherit');
  }
}


$('.menuTable').hover(
  function () {
    $(this).addClass("custom-heading-1");
  },
  function () {
    setTimeout(() => {
      $(this).removeClass("custom-heading-1")
    }, 3000);
  }
);

/**
 * Check For Purchase Availability
 */

const checkForPurchaseAvailability = () => {
  if (player.animal >= rings[0].ringCost) {
    document.getElementById("animalInfoOne").style.color = 'white';
    document.getElementById("checkAvailabilityOneB").style.color = 'white';
  } else {
    document.getElementById("animalInfoOne").style.color = 'red';
    document.getElementById("checkAvailabilityOneB").style.color = 'red';
  }

  if (player.animal >= rings[1].ringCost) {
    document.getElementById("animalInfoTwo").style.color = 'white';
    document.getElementById("checkAvailabilityTwoB").style.color = 'white';
  } else {
    document.getElementById("animalInfoTwo").style.color = 'red';
    document.getElementById("checkAvailabilityTwoB").style.color = 'red';
  }

  if (player.animal >= rings[2].ringCost) {
    document.getElementById("animalInfoThree").style.color = 'white';
    document.getElementById("checkAvailabilityThreeB").style.color = 'white';
  } else {
    document.getElementById("animalInfoThree").style.color = 'red';
    document.getElementById("checkAvailabilityThreeB").style.color = 'red';
  }

  if (player.human >= rings[3].ringCost) {
    document.getElementById("animalInfoFour").style.color = 'white';
    document.getElementById("checkAvailabilityFourB").style.color = 'white';
  } else {
    document.getElementById("animalInfoFour").style.color = 'red';
    document.getElementById("checkAvailabilityFourB").style.color = 'red';
  }

  if (player.human >= rings[4].ringCost) {
    document.getElementById("animalInfoFive").style.color = 'white';
    document.getElementById("checkAvailabilityFiveB").style.color = 'white';
  } else {
    document.getElementById("animalInfoFive").style.color = 'red';
    document.getElementById("checkAvailabilityFiveB").style.color = 'red';
  }

  if (player.human >= rings[5].ringCost) {
    document.getElementById("animalInfoSix").style.color = 'white';
    document.getElementById("checkAvailabilitySixB").style.color = 'white';
  } else {
    document.getElementById("animalInfoSix").style.color = 'red';
    document.getElementById("checkAvailabilitySixB").style.color = 'red';
  }

  //For Ring Adding
  let w;

  if(player.permanentRingCountForVariableNames - 1 !== 6) {
    w = rings[player.permanentRingCountForVariableNames - 1].ringInitialCost;
  }
  const x = player.currentRingCount - 1;
  
  //Add Ring One Check Color Change
  if (player.isAnimalPurchaseHidden === false) {
    if (player.animal < w && x < 3) {
      document.querySelector('#addRing').style.color = 'white';
      document.querySelector('#addRing').style.backgroundColor = 'red';

    } else if (player.animal > w && player.currentRingCount <= 3) {
      document.querySelector('#addRing').style.color = 'white';
      document.querySelector('#addRing').style.backgroundColor = '#57a957';

    } else {
      document.querySelector('#addRing').classList.add("fadeOut");
      setTimeout(
        function(){ document.querySelector('#addRing').style.display = "none"; },
        3000)
      player.isAnimalPurchaseHidden = true;
    }
  }

  if (player.isHumanPurchaseHidden === false) {
    if (player.human < w || x < 3 || player.currentRingCount - 1 < 3){
      document.querySelector('#addRingHuman').style.color = 'white';
      document.querySelector('#addRingHuman').style.backgroundColor = 'red';
    } else if (player.human > w) {
      document.querySelector('#addRingHuman').style.color = 'white';
      document.querySelector('#addRingHuman').style.backgroundColor = '#57a957';
    } else {
      document.querySelector('#addRingHuman').classList.add("fadeOut");
      setTimeout(
        function(){ document.querySelector('#addRingHuman').style.display = "none"; },
        3000)
      player.isHumanPurchaseHidden = true;
    }
  }
}


setInterval(checkForPurchaseAvailability, 250);


// Show UI or Hide UI

const showOrHide = (checkbox) => {
  if (checkbox.checked != true) {
    document.getElementById('wrapper').style.display = 'inherit';
  } else {
    document.getElementById('wrapper').style.display = 'none';
  }
}