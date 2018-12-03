//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true,
  alpha: true,
});

renderer.setSize(800, 605);
// renderer.setClearColor('#fff', 0.1); // the default

// Configure renderer clear color
renderer.setClearColor("black");

//Camera
const camera = new THREE.PerspectiveCamera(
  updateCam.cameraPerspectiveChange,
  16 / 10,
  .1,
  1000
);
camera.position.z = updateCam.cameraZPos;

// Build the controls.
var controls = new THREE.OrbitControls(camera);
controls.autoRotate = true;
controls.autoRotateSpeed = 0
controls.maxDistance = 900;
controls.minDistance = 10;

// Help with left mouse speed
controls.enableDamping = true;
controls.dampingFactor = .15;

// controls.maxAzimuthAngle = 100;
controls.maxPolarAngle = 2.0;

controls.mouseButtons = {
  LEFT: THREE.MOUSE.LEFT,
}

// controls.panSpeed = 0;
camera.lookAt(camera);

//Scene
const scene = new THREE.Scene();

//Lights

let dirLight = new THREE.DirectionalLight(0xffffff, .5);
dirLight.intensity = 1;
dirLight.position.set(435, -5, 125);
dirLight.name = 'dirLight';
scene.add(dirLight);

let dirLight2 = new THREE.DirectionalLight(0xffffff, .5);
// dirLight.intensity = 1;
dirLight2.position.set(-435, -5, 125);
dirLight2.name = 'dirLightTwo';
scene.add(dirLight2);

var light = new THREE.SpotLight(0xffffff, 15, 25, 1.00, 0, 1);
light.position.x = 15;
light.position.y = -1;
light.position.z = 1;
scene.add(light);


var light2 = new THREE.SpotLight(0xffffff, 15, 25, 1.00, 0, 1);
light2.position.x = -15;
light2.position.y = -1;
light2.position.z = -1;
scene.add(light2);

// var light2 = new THREE.SpotLight( 0xff0000, 2, 10);
// scene.add( light2 );

// var light3 = new THREE.SpotLight( 0x00ff00, 2, 17);
// scene.add( light3 );

// var light4 = new THREE.SpotLight( 0x0000ff, 2, 25);
// scene.add( light4 );

//OBJECTS (Game Objects, not OOP/Programming Objects, although they are not exactly mutually exclusive)
let mainSphere = new THREE.SphereGeometry(3, 64, 64);

let sphere = new THREE.Mesh(mainSphere, material);
scene.add(sphere);
sphere.position.y = 3;


// Update Text Inside Game
const updateText = () => {
  document.querySelector('#mainAnimalInfo').innerHTML = `
  Animal<br>
    ${(player.animal).toFixed(1)} 
  `

  document.querySelector('#mainAnimalInfoTwo').innerHTML = `
  Human<br>
    ${(player.human).toFixed(1)} 
  `
  /**
   * Speed Upgrade
   */

  //Animal One
  document.querySelector('#animalInfoOne').innerHTML = `
  <span class="underlineText">
    &nbsp;Speed&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    Cost&nbsp
  </span>
    <br>
  <span class="positionInsideSpeedLeft"> ${(rings[0].ringSpeedUpgrade() * 100).toFixed(3)} </span>
  <span class="positionInsideSpeedRight"> ${(rings[0].ringCost).toFixed(0)} </span>
  `
  //Animal Two
  document.querySelector('#animalInfoTwo').innerHTML = `
  <span class="underlineText">
    &nbsp;Speed&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    Cost&nbsp
  </span>
    <br>
  <span class="positionInsideSpeedLeft"> ${(rings[1].ringSpeedUpgrade() * 100).toFixed(3)} </span>
  <span class="positionInsideSpeedRight"> ${(rings[1].ringCost).toFixed(0)} </span>
  `
  //Animal Three
  document.querySelector('#animalInfoThree').innerHTML = `
  <span class="underlineText">
    &nbsp;Speed&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    Cost&nbsp
  </span>
    <br>
  <span class="positionInsideSpeedLeft"> ${(rings[2].ringSpeedUpgrade() * 100).toFixed(3)} </span>
  <span class="positionInsideSpeedRight"> ${(rings[2].ringCost).toFixed(0)} </span>
  `

  //Human One
  document.querySelector('#animalInfoFour').innerHTML = `
  <span class="underlineText">
    &nbsp;Speed&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    Cost&nbsp
  </span>
    <br>
  <span class="positionInsideSpeedLeft"> ${(rings[3].ringSpeedUpgrade() * 100).toFixed(3)} </span>
  <span class="positionInsideSpeedRight"> ${(rings[3].ringCost).toFixed(0)} </span>
  `

  //Human Two
  document.querySelector('#animalInfoFive').innerHTML = `
  <span class="underlineText">
    &nbsp;Speed&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    Cost&nbsp
  </span>
    <br>
  <span class="positionInsideSpeedLeft"> ${(rings[4].ringSpeedUpgrade() * 100).toFixed(3)} </span>
  <span class="positionInsideSpeedRight"> ${(rings[4].ringCost).toFixed(0)} </span>
  `

  //Human Three
  document.querySelector('#animalInfoSix').innerHTML = `
  <span class="underlineText">
    &nbsp;Speed&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    Cost&nbsp
  </span>
    <br>
  <span class="positionInsideSpeedLeft"> ${(rings[5].ringSpeedUpgrade() * 100).toFixed(3)} </span>
  <span class="positionInsideSpeedRight"> ${(rings[5].ringCost).toFixed(0)} </span>
  `

  /**
   * Power Upgrade
   */

  //Animal One
  document.querySelector('#animalInfoPowerOne').innerHTML = `
 <span class="underlineText">
   Power|
   Cost
 </span>
   <br>
 <span class="positionInsidePowerLeft"> ${(rings[0].ringPower.toFixed(2))} </span>
 <span class="positionInsidePowerRight"> ${Math.ceil(rings[0].ringPowerCost).toFixed(0)} </span>
 `
  //Animal Two
  document.querySelector('#animalInfoPowerTwo').innerHTML = `
 <span class="underlineText">
   Power|
   Cost
 </span>
   <br>
 <span class="positionInsidePowerLeft"> ${(rings[1].ringPower.toFixed(2))} </span>
 <span class="positionInsidePowerRight"> ${Math.ceil(rings[1].ringPowerCost).toFixed(0)} </span>
 `
  //Animal Three
  document.querySelector('#animalInfoPowerThree').innerHTML = `
 <span class="underlineText">
   Power|
   Cost
 </span>
   <br>
 <span class="positionInsidePowerLeft"> ${(rings[2].ringPower.toFixed(2))} </span>
 <span class="positionInsidePowerRight"> ${Math.ceil(rings[2].ringPowerCost).toFixed(0)} </span>
 `

  //Human One
  document.querySelector('#animalInfoPowerFour').innerHTML = `
 <span class="underlineText">
   Power|
   Cost
 </span>
   <br>
 <span class="positionInsidePowerLeft"> ${(rings[3].ringPower.toFixed(2))} </span>
 <span class="positionInsidePowerRight"> ${Math.ceil(rings[3].ringPowerCost).toFixed(0)} </span>
 `

  //Human Two
  document.querySelector('#animalInfoPowerFive').innerHTML = `
 <span class="underlineText">
   Power|
   Cost
 </span>
   <br>
 <span class="positionInsidePowerLeft"> ${(rings[4].ringPower.toFixed(2))} </span>
 <span class="positionInsidePowerRight"> ${Math.ceil(rings[4].ringPowerCost).toFixed(0)} </span>
 `

  //Human Three
  document.querySelector('#animalInfoPowerSix').innerHTML = `
 <span class="underlineText">
   Power|
   Cost
 </span>
   <br>
 <span class="positionInsidePowerLeft"> ${(rings[5].ringPower.toFixed(2))} </span>
 <span class="positionInsidePowerRight"> ${Math.ceil(rings[5].ringPowerCost).toFixed(0)} </span>
 `
  // Show Levels inside of Level Section
  document.querySelector('#ringSectionOneLevel').innerHTML = `
  Lvl: <br>
    ${rings[0].ringLevel.toFixed(0)}
  `

  document.querySelector('#ringSectionTwoLevel').innerHTML = `
  Lvl: <br>
    ${rings[1].ringLevel.toFixed(0)}
  `

  document.querySelector('#ringSectionThreeLevel').innerHTML = `
  Lvl: <br>
    ${rings[2].ringLevel.toFixed(0)}
  `

  document.querySelector('#ringSectionFourLevel').innerHTML = `
  Lvl: <br>
    ${rings[3].ringLevel.toFixed(0)}
  `

  document.querySelector('#ringSectionFiveLevel').innerHTML = `
  Lvl: <br>
    ${rings[4].ringLevel.toFixed(0)}
  `

  document.querySelector('#ringSectionSixLevel').innerHTML = `
  Lvl: <br>
    ${rings[5].ringLevel.toFixed(0)}
  `

  // Show Titles inside of Title Sections
  document.querySelector('#ringSectionOneTitle').innerHTML = `
  Sacrifice <br>
  ${rings[0].ringSacrifice}
  `

  document.querySelector('#ringSectionTwoTitle').innerHTML = `
  Sacrifice <br>
    ${rings[1].ringSacrifice}
  `

  document.querySelector('#ringSectionThreeTitle').innerHTML = `
  Sacrifice <br>
    ${rings[2].ringSacrifice}
  `

  document.querySelector('#ringSectionFourTitle').innerHTML = `
  Sacrifice <br>
    ${rings[3].ringSacrifice}
  `

  document.querySelector('#ringSectionFiveTitle').innerHTML = `
  Sacrifice <br>
    ${rings[4].ringSacrifice}
  `

  document.querySelector('#ringSectionSixTitle').innerHTML = `
  Sacrifice <br>
    ${rings[5].ringSacrifice}
  `

  /*Section for Updating NEW RING TEXT*/
  if (player.currentRingCount - 1 === 0) {
    document.querySelector('#addRing').style.backgroundImage = "url('textures/rat1.png')";
    document.querySelector('#addRing').style.backgroundSize = "cover";

    document.querySelector('#addRing').innerHTML = `
    Start Rats Engine <p></p> (A: ${rings[0].ringPurchaseCost}) <br>
  `
  }

  if (player.currentRingCount - 1 === 1) {
    document.querySelector('#addRing').style.backgroundImage = "url('textures/deer1.png')";
    document.querySelector('#addRing').style.backgroundSize = "cover";

    document.querySelector('#addRing').innerHTML = `
  Start Deer Engine <p></p> (A: ${rings[1].ringPurchaseCost}) <br>
  `
  }

  if (player.currentRingCount - 1 === 2) {
    document.querySelector('#addRing').style.backgroundImage = "url('textures/trex1.png')";
    document.querySelector('#addRing').style.backgroundSize = "cover";

    document.querySelector('#addRing').innerHTML = `
  Start T-Rex Engine <p></p> (A: ${rings[2].ringPurchaseCost}) <br>
  `
  }

  if (player.currentRingCount - 1 === 3) {
    document.querySelector('#addRingHuman').style.backgroundImage = "url('textures/trog1.png')";

    document.querySelector('#addRing').innerHTML = `
  Start Troglodyte Engine <p></p> (A: ${rings[3].ringPurchaseCost}) <br>
  `
  }

  if (player.currentRingCount - 1 === 4) {
    document.querySelector('#addRingHuman').style.backgroundImage = "url('textures/peasant1.png')";

    document.querySelector('#addRingHuman').innerHTML = `
  Start Peasant Engine <p></p> (A: ${rings[4].ringPurchaseCost}) <br>
  `
  }

  if (player.currentRingCount - 1 === 5) {
    document.querySelector('#addRingHuman').style.backgroundImage = "url('textures/alien1.png')";
    // document.querySelector('#addRingHuman').style.backgroundSize = "cover";

    document.querySelector('#addRingHuman').innerHTML = `
  Start Alien Engine <p></p> (A: ${rings[5].ringPurchaseCost}) <br>
  `
  }
  // document.querySelector('#ringOne').innerHTML = `Ring One Cost: <br> ${(rings[0].ringCost).toFixed(1)}`
}

const checkTorusRotations = () => {

  if (player.torusOneActivated) {
    let xa = scene.getObjectByName('torus');
    xa.rotation.x += rings[0].rotationalSpeedX;
    xa.rotation.y += rings[0].rotationalSpeedY;
    rings[0].addAnimal();
  }

  if (player.torusTwoActivated) {
    let xb = scene.getObjectByName('torusTwo');
    xb.rotation.x += rings[1].rotationalSpeedX;
    xb.rotation.y += rings[1].rotationalSpeedY;

    rings[1].addAnimal();
  }

  if (player.torusThreeActivated) {
    let xc = scene.getObjectByName('torusThree');
    xc.rotation.x += rings[2].rotationalSpeedX;
    xc.rotation.y += rings[2].rotationalSpeedY;

    rings[2].addAnimal();
  }

  if (player.torusFourActivated) {
    let xd = scene.getObjectByName('torusFour');
    xd.rotation.x += rings[3].rotationalSpeedX;
    xd.rotation.y += rings[3].rotationalSpeedY;

    rings[3].addAnimal();
  }

  if (player.torusFiveActivated) {
    let xe = scene.getObjectByName('torusFive');
    xe.rotation.x += rings[4].rotationalSpeedX;
    xe.rotation.y += rings[4].rotationalSpeedY;

    rings[4].addAnimal();
  }

  if (player.torusSixActivated) {
    let xf = scene.getObjectByName('torusSix');
    xf.rotation.x += rings[5].rotationalSpeedX;
    xf.rotation.y += rings[5].rotationalSpeedY;

    rings[5].addAnimal();
  }

  // sphere.rotation.x += .11;
  // sphere.rotation.y += .11;
  // sphere.rotation.z += .11;

}

const rotateLights = () => {
  // if (spotlight.position.y >= 250 && spotlight.position.y >= 0 ){
  //   spotlight.position.z += 5;
  // }

  // if (spotlight.position.y <= 250 && spotlight.position.y >= 0){
  //   spotlight.position.z -= 5;
  // }
}

// RENDER LOOP 1
requestAnimationFrame(render);

function render() {

  controls.update();
  // checkForPurchaseAvailability();
  updateText();
  rotateLights();
  checkTorusRotations();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}