/**
 * Main Functions
 */

/**
 * Reanimal Control / Ring Speed and Power
 */

const upgradeRingSpeedOne = () => {
  if (player.animal > rings[0].ringAnimalCost) {
    player.animal -= rings[0].ringAnimalCost;
    rings[0].rotationalSpeedX += 0.015;

    rings[0].ringLevel = 1;
    rings[0].ringAnimalCost = (rings[0].ringAnimalCost * 1.15) + (1 * rings[0].ringLevel);
  }
}

const upgradeRingSpeedTwo = () => {
  if (player.animal > rings[1].ringAnimalCost) {
    player.animal -= rings[1].ringAnimalCost;
    rings[1].rotationalSpeedX += 0.015;

    rings[1].ringLevel = 1;
    rings[1].ringAnimalCost = (rings[1].ringAnimalCost * 1.15) + (1 * rings[1].ringLevel);
  }
}

const upgradeRingSpeedThree = () => {
  if (player.animal > rings[2].ringAnimalCost) {
    player.animal -= rings[2].ringAnimalCost;
    rings[2].rotationalSpeedX += 0.015;

    rings[2].ringLevel = 1;
    rings[2].ringAnimalCost = (rings[2].ringAnimalCost * 1.15) + (1 * rings[2].ringLevel);
  }
}

const upgradeRingSpeedFour = () => {
  if (player.animal > rings[3].ringAnimalCost) {
    player.animal -= rings[3].ringAnimalCost;
    rings[3].rotationalSpeedX += 0.015;

    rings[3].ringLevel = 1;
    rings[3].ringAnimalCost = (rings[3].ringAnimalCost * 1.15) + (1 * rings[3].ringLevel);
  }
}

const upgradeRingSpeedFive = () => {
  if (player.animal > rings[4].ringAnimalCost) {
    player.animal -= rings[4].ringAnimalCost;
    rings[4].rotationalSpeedX += 0.015;

    rings[4].ringLevel = 1;
    rings[4].ringAnimalCost = (rings[4].ringAnimalCost * 1.15) + (1 * rings[4].ringLevel);
  }
}

const upgradeRingSpeedSix = () => {
  if (player.animal > rings[5].ringAnimalCost) {
    player.animal -= rings[5].ringAnimalCost;
    rings[5].rotationalSpeedX += 0.015;

    rings[5].ringLevel = 1;
    rings[5].ringAnimalCost = (rings[5].ringAnimalCost * 1.15) + (1 * rings[5].ringLevel);
  }
}
/**
 * Adding or Removing Test Objects
 */


// Removes all objects 

//TODO : REMOVE ONE
//TODO ISSUE: unable to correctly snag the player.torus???Activated and set it to false; will cause game-freezing bug

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

  player.torusOneActivated = false;
  player.torusTwoActivated = false;
  player.torusThreeActivated = false;
  player.torusFourActivated = false;
  player.torusFiveActivated = false;
  player.torusSixActivated = false;
  player.torusSevenActivated = false;
  player.torusEightActivated = false;
  player.torusNineActivated = false;
  player.torusTenActivated = false;

  let sphere = new THREE.Mesh(mainSphere, material);
  scene.add(sphere);
  player.permanentRingCountForVariableNames = 1;
}

/**
 * Adding Torus' to the Canvas
 */

const addNewRingToArray = () => {

  // For reference, a Torus is the following:

  // radius             - Radius of the torus, from the center of the torus to the center of the tube. Default is 1. 
  // tube               - Radius of the tube. Default is 0.4. 
  // radialSegments     - Default is 8 
  // tubularSegments    - Default is 6. 
  // arc                - Central angle. Default is Math.PI * 2.

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
    case 'torus4':
      runTorusFour();
      break;
    case 'torus5':
      runTorusFive();
      break;
    case 'torus6':
      runTorusSix();
      break;
    case 'torus7':
      runTorusSeven();
      break;
    case 'torus8':
      runTorusEight();
      break;
    case 'torus9':
      runTorusNine();
      break;
    case 'torus10':
      runTorusTen();
      break;
  }

  player.permanentRingCountForVariableNames++;
}


// Torus One

const runTorusOne = () => {
  if (player.animal >= rings[0].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorus = new THREE.TorusGeometry(5, .35, 4, 100);
    let torus = new THREE.Mesh(mainTorus, material);
    torus.name = 'torus';
    scene.add(torus);
    torus.position.y = 5;

    // Turn the spinner on when you activate the torus
    player.torusOneActivated = true;

    torusAddOne = torus1;
    torus.add(torusAddOne);
  }
}

// Torus Two

const runTorusTwo = () => {
  if (player.animal >= rings[1].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusTwo = new THREE.TorusGeometry(9, .65, 4, 100);
    let torusTwo = new THREE.Mesh(mainTorusTwo, material);
    torusTwo.name = 'torusTwo';
    scene.add(torusTwo);
    torusTwo.position.y = 5;
    // Turn the spinner on when you activate the torus
    player.torusTwoActivated = true;

    torusAddTwo = torus2;
    torusTwo.add(torusAddTwo);
  }
}

// Torus Three

const runTorusThree = () => {
  if (player.animal >= rings[2].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusThree = new THREE.TorusGeometry(13, .95, 4, 100);
    let torusThree = new THREE.Mesh(mainTorusThree, material);
    torusThree.name = 'torusThree';
    scene.add(torusThree);
    torusThree.position.y = 5;

    // Turn the spinner on when you activate the torus
    player.torusThreeActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 75;

    torusAddThree = torus3;
    torusThree.add(torusAddThree);
  }
}

// Torus Four

const runTorusFour = () => {
  if (player.animal >= rings[3].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusFour = new THREE.TorusGeometry(17, 1.25, 4, 100);
    let torusFour = new THREE.Mesh(mainTorusFour, material);
    torusFour.name = 'torusFour';
    scene.add(torusFour);
    torusFour.position.y = 5;

    // Turn the spinner on when you activate the torus
    player.torusFourActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 85;

    torusAddFour = torus4;
    torusFour.add(torusAddFour);
  }
}

// Torus Five

const runTorusFive = () => {
  if (player.animal >= rings[4].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusFive = new THREE.TorusGeometry(24, 1.55, 5, 100);
    let torusFive = new THREE.Mesh(mainTorusFive, material);
    torusFive.name = 'torusFive';
    scene.add(torusFive);
    torusFive.position.y = 5;

    // Turn the spinner on when you activate the torus
    player.torusFiveActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 105;

    // On Torus Five and above, we'll start increasing the max camera distance
    // camera.fov = 65;
    // camera.updateProjectionMatrix();

    torusAddFive = torus5;
    torusFive.add(torusAddFive);
  }
}

// Torus Six

const runTorusSix = () => {
  if (player.animal >= rings[5].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusSix = new THREE.TorusGeometry(31, 1.85, 6, 100);
    let torusSix = new THREE.Mesh(mainTorusSix, material);
    torusSix.name = 'torusSix';
    scene.add(torusSix);
    torusSix.position.y = 5;

    // Turn the spinner on when you activate the torus
    player.torusSixActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 115;

    // On Torus Five and above, we'll start increasing the max camera distance
    // camera.fov = 70;
    // camera.updateProjectionMatrix();

    torusAddSix = torus6;
    torusSix.add(torusAddSix);
  }
}

// Torus Seven

const runTorusSeven = () => {
  if (player.animal >= rings[6].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusSeven = new THREE.TorusGeometry(37, 2.15, 7, 100);
    let torusSeven = new THREE.Mesh(mainTorusSeven, material);
    torusSeven.name = 'torusSeven';
    scene.add(torusSeven);
    torusSeven.position.y = 5;

    // Turn the spinner on when you activate the torus
    player.torusSevenActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 135;

    // On Torus Five and above, we'll start increasing the max camera distance
    // camera.fov = 80;
    // camera.updateProjectionMatrix();

    torusAddSeven = torus7;
    torusSeven.add(torusAddSeven);
  }
}

// Torus Eight

const runTorusEight = () => {
  if (player.animal >= rings[7].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusEight = new THREE.TorusGeometry(45, 2.55, 8, 100);
    let torusEight = new THREE.Mesh(mainTorusEight, material);
    torusEight.name = 'torusEight';
    scene.add(torusEight);
    torusEight.position.y = 5;

    // Turn the spinner on when you activate the torus
    player.torusEightActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 165;

    // On Torus Five and above, we'll start increasing the max camera distance
    // camera.fov = 90;
    // camera.updateProjectionMatrix();

    torusAddEight = torus8;
    torusEight.add(torusAddEight);
  }
}


// Torus Nine

const runTorusNine = () => {
  if (player.animal >= rings[8].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusNine = new THREE.TorusGeometry(55, 2.85, 9, 100);
    let torusNine = new THREE.Mesh(mainTorusNine, material);
    torusNine.name = 'torusNine';
    scene.add(torusNine);
    torusNine.position.y = 5;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 195;

    // Turn the spinner on when you activate the torus
    player.torusNineActivated = true;

    // On Torus Five and above, we'll start increasing the max camera distance
    // camera.fov = 100;
    // camera.updateProjectionMatrix();

    torusAddNine = torus9;
    torusNine.add(torusAddNine);
  }
}

// Torus Ten

const runTorusTen = () => {
  if (player.animal >= rings[9].ringAnimalCost) {
    // This is the standard "Create-an-Object" template
    let mainTorusTen = new THREE.TorusGeometry(66, 3.15, 10, 100);
    let torusTen = new THREE.Mesh(mainTorusTen, material);
    torusTen.name = 'torusTen';
    scene.add(torusTen);
    torusTen.position.y = 5;

    // Turn the spinner on when you activate the torus
    player.torusTenActivated = true;

    // Update camera POV a bit to adjust to it!
    camera.position.z = 215;

    // On Torus Five and above, we'll start increasing the max camera distance
    // camera.fov = 110;
    // camera.updateProjectionMatrix();

    torusAddTen = torus10;
    torusTen.add(torusAddTen);
  }
}
/**
 * Rotational Functions
 */

const checkRotations = () => {
  torus.position.x += .01;
}

/**
 * Light Controls
 */
const spawnLightOne = () => {
  const lightColorSelector = document.querySelector('#selectColor').value;

  if (lightColorSelector != null) {
    mainLights.selectedColor = lightColorSelector;

    const removeLight = scene.getObjectByName('dirLight');

    scene.remove(removeLight);

    let dirLight = new THREE.DirectionalLight(mainLights.selectedColor);
    dirLight.position.set(-43, 5, 5);
    dirLight.name = 'dirLight';
    scene.add(dirLight);
  }
}

const spawnLightTwo = () => {
  const lightColorSelector = document.querySelector('#selectColor').value;

  if (lightColorSelector != null) {
    mainLights.selectedColorTwo = lightColorSelector;

    const removeLightTwo = scene.getObjectByName('dirLightTwo');

    scene.remove(removeLightTwo);

    let dirLightTwo = new THREE.DirectionalLight(mainLights.selectedColorTwo);
    dirLightTwo.position.set(43, -5, 5);
    dirLightTwo.name = 'dirLightTwo';
    scene.add(dirLightTwo);
  }
}


const removeLights = () => {
  const removeLight = scene.getObjectByName('dirLight');
  // console.log(removeLight)
  scene.remove(scene.getObjectByName('dirLight'));

  const removeLightTwo = scene.getObjectByName('dirLightTwo');
  // console.log(removeLight)
  scene.remove(scene.getObjectByName('dirLightTwo'));
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
  if (player.animal >= rings[0].ringAnimalCost) {
    const x = document.getElementById("animalInfoOne").style.color = 'white';
  } else {
    const x = document.getElementById("animalInfoOne").style.color = 'red';
  }

  if (player.animal >= rings[1].ringAnimalCost) {
    const x = document.getElementById("animalInfoTwo").style.color = 'white';
  } else {
    const x = document.getElementById("animalInfoTwo").style.color = 'red';
  }

  if (player.animal >= rings[2].ringAnimalCost) {
    const x = document.getElementById("animalInfoThree").style.color = 'white';
  } else {
    const x = document.getElementById("animalInfoThree").style.color = 'red';
  }

  if (player.animal >= rings[3].ringAnimalCost) {
    const x = document.getElementById("animalInfoFour").style.color = 'white';
  } else {
    const x = document.getElementById("animalInfoFour").style.color = 'red';
  }

  if (player.animal >= rings[4].ringAnimalCost) {
    const x = document.getElementById("animalInfoFive").style.color = 'white';
  } else {
    const x = document.getElementById("animalInfoFive").style.color = 'red';
  }

  if (player.animal >= rings[5].ringAnimalCost) {
    const x = document.getElementById("animalInfoSix").style.color = 'white';
  } else {
    const x = document.getElementById("animalInfoSix").style.color = 'red';
  }

  console.log('ran')
}

setInterval(checkForPurchaseAvailability, 500);