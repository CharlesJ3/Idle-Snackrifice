//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true,
  alpha: true,
});

renderer.setSize(800, 600);
renderer.setClearColor('#fff', 0.1); // the default

// Configure renderer clear color
renderer.setClearColor("lightgrey");

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
controls.autoRotateSpeed = .05;
controls.maxDistance = 800;
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

//**IN PROGRESS **/
// let dirLight = new THREE.DirectionalLight(mainLights.selectedColor);
// dirLight.position.set(43, -5, 5);
// dirLight.name = 'dirLight';
// scene.add(dirLight);

const addDirLight = () => {
  let dirLightTwo = new THREE.DirectionalLight(mainLights.selectedColorTwo);
  dirLightTwo.position.set(-43, 5, 5);
  dirLightTwo.name = 'dirLightTwo';
  scene.add(dirLightTwo);
}

addDirLight();

const addSpotLight = () => {
  let spotLight = new THREE.SpotLight('#022080');
  spotLight.position.set(43, -5, 133);
  scene.add(spotLight);
}

addSpotLight();

// let light = new THREE.PointLight( '#002080', 1, 100 );
// light.position.set( 5, 5, 50 );
// scene.add( light );

// let lightTwo = new THREE.PointLight( '#0000cc', 1, 100 );
// lightTwo.position.set( -5, -5, 50 );
// scene.add( lightTwo );

//OBJECTS (Game Objects, not OOP/Programming Objects, although they are not exactly mutually exclusive)
let mainSphere = new THREE.SphereGeometry(3, 64, 64);

let sphere = new THREE.Mesh(mainSphere, material);
scene.add(sphere);
sphere.position.y = 5;


// Update Text Inside Game
const updateText = () => {
  document.querySelector('#mainSourceInfo').innerHTML = `
  <span style="text-decoration: underline;">Source</span> 
  <br> 
    ${(player.source).toFixed(1)} 
  `

  //Source One
  document.querySelector('#sourceInfoOne').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[0].ringSourceCost).toFixed(1)}
  `
  //Source Two
  document.querySelector('#sourceInfoTwo').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[1].ringSourceCost).toFixed(1)}
  `

  //Source Three
  document.querySelector('#sourceInfoThree').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[2].ringSourceCost).toFixed(1)}
  `

  //Source Four
  document.querySelector('#sourceInfoFour').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[3].ringSourceCost).toFixed(1)}
  `

  //Source Five
  document.querySelector('#sourceInfoFive').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[4].ringSourceCost).toFixed(1)}
  `

  //Source Six
  document.querySelector('#sourceInfoSix').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[5].ringSourceCost).toFixed(1)}
  `

  //Source Seven
  document.querySelector('#sourceInfoSeven').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[6].ringSourceCost).toFixed(1)}
  `

  //Source Eight
  document.querySelector('#sourceInfoEight').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[7].ringSourceCost).toFixed(1)}
  `

  //Source Nine
  document.querySelector('#sourceInfoNine').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[8].ringSourceCost).toFixed(1)}
  `

  //Source Ten
  document.querySelector('#sourceInfoTen').innerHTML = `
  <span style="text-decoration: underline;">Cost</span> 
    <br> 
      ${(rings[9].ringSourceCost).toFixed(1)}
  `
  // document.querySelector('#ringOne').innerHTML = `Ring One Cost: <br> ${(rings[0].ringSourceCost).toFixed(1)}`
}





// RENDER LOOP 1
requestAnimationFrame(render);

function render() {

  if (player.torusOneActivated) {
    let xa = scene.getObjectByName('torus');
    xa.rotation.x += rings[0].rotationalSpeedX;
    xa.rotation.y += rings[0].rotationalSpeedY;

    rings[0].addSource();
  }

  if (player.torusTwoActivated) {
    let xb = scene.getObjectByName('torusTwo');
    xb.rotation.x += rings[1].rotationalSpeedX;
    xb.rotation.y += rings[1].rotationalSpeedY;

    rings[1].addSource();
  }

  if (player.torusThreeActivated) {
    let xc = scene.getObjectByName('torusThree');
    xc.rotation.x += rings[2].rotationalSpeedX;
    xc.rotation.y += rings[2].rotationalSpeedY;

    rings[2].addSource();
  }

  if (player.torusFourActivated) {
    let xd = scene.getObjectByName('torusFour');
    xd.rotation.x += rings[3].rotationalSpeedX;
    xd.rotation.y += rings[3].rotationalSpeedY;

    rings[3].addSource();
  }

  if (player.torusFiveActivated) {
    let xe = scene.getObjectByName('torusFive');
    xe.rotation.x += rings[4].rotationalSpeedX;
    xe.rotation.y += rings[4].rotationalSpeedY;

    rings[4].addSource();
  }

  if (player.torusSixActivated) {
    let xf = scene.getObjectByName('torusSix');
    xf.rotation.x += rings[5].rotationalSpeedX;
    xf.rotation.y += rings[5].rotationalSpeedY;

    rings[5].addSource();
  }

  if (player.torusSevenActivated) {
    let xg = scene.getObjectByName('torusSeven');
    xg.rotation.x += rings[6].rotationalSpeedX;
    xg.rotation.y += rings[6].rotationalSpeedY;

    rings[6].addSource();
  }

  if (player.torusEightActivated) {
    let xh = scene.getObjectByName('torusEight');
    xh.rotation.x += rings[7].rotationalSpeedX;
    xh.rotation.y += rings[7].rotationalSpeedY;

    rings[7].addSource();
  }

  if (player.torusNineActivated) {
    let xi = scene.getObjectByName('torusNine');
    xi.rotation.x += rings[8].rotationalSpeedX;
    xi.rotation.y += rings[8].rotationalSpeedY;

    rings[8].addSource();
  }

  if (player.torusTenActivated) {
    let xj = scene.getObjectByName('torusTen');
    xj.rotation.x += rings[9].rotationalSpeedX;
    xj.rotation.y += rings[9].rotationalSpeedY;

    rings[9].addSource();
  }

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
  updateText();
}