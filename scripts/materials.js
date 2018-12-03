const materialDefaults = {
  materialEmissiveIntensity: '.225', 
  materialEmissiveOneIntensity: .125, 
  materialEmissiveTwoIntensity: .225, 
  materialEmissiveThreeIntensity: .325, 
  materialEmissiveFourIntensity: .125, 
  materialEmissiveFiveIntensity: .225, 
  materialEmissiveSixIntensity: .325, 
}


const material = new THREE.MeshPhongMaterial({
  color: 0x000000,

  // Shininess and Specular affect how shiny, useful for buffs
  shininess: 25,
  specular: 'red',

  // Emissive adds a nice little aura, may be useful for specific things
  emissive: 'red',
  emissiveIntensity: .225,


  reflectivity: 2555,
  // transparency: true,
  // depthWrite: false,

  // Wireframe is fun for showing, maybe before you delete an item for fun?
  // wireframe: true,
});

// const textureMaterialOne = new THREE.TextureLoader().load( 'textures/test.png' );
// textureMaterialOne.crossOrigin = "anonymous";

const materialOne = new THREE.MeshPhongMaterial({
  // map: textureMaterialOne,
  color: 0x000000,
  specular: '#FF7F50',
  shininess: 15,
  emissive: 'pink',
  emissiveIntensity: .325,
  wireframe: true,
});

const materialTwo = new THREE.MeshPhongMaterial({
  color: 0x000000,
  specular: '#FF7F50',
  shininess: 15,
  emissive: 'crimson',
  emissiveIntensity: .225,
  wireframe: true,
});

const materialThree = new THREE.MeshPhongMaterial({
  color: 0x000000,
  specular: '#FF7F50',
  shininess: 15,
  emissive: 'maroon',
  emissiveIntensity: .125,
  wireframe: true,
});

const materialFour = new THREE.MeshPhongMaterial({
  color: 0x000000,
  specular: '#008080',
  shininess: 15,
  emissive: 'teal',
  emissiveIntensity: .125,
  wireframe: true,
});

const materialFive = new THREE.MeshPhongMaterial({
  color: 0x000000,
  specular: '#008080',
  shininess: 15,
  emissive: 'skyblue',
  emissiveIntensity: .225,
  wireframe: true,
});

const materialSix = new THREE.MeshPhongMaterial({
  color: 0x000000,
  specular: '#008080',
  shininess: 15,
  emissive: 'navy',
  emissiveIntensity: .325,
  wireframe: true,
});

material.needsUpdate = true
materialTwo.needsUpdate = true
materialThree.needsUpdate = true
materialFour.needsUpdate = true
materialFive.needsUpdate = true
materialSix.needsUpdate = true