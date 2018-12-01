let material = new THREE.MeshPhongMaterial({
  color: '',

  // Shininess and Specular affect how shiny, useful for buffs
  shininess: 4,
  specular: 'red',

  // Emissive adds a nice little aura, may be useful for specific things
  // emissive: 'red',
  // emissiveIntensity: .225,


  reflectivity: 25,
  // transparency: true,
  // depthWrite: false,

  // Wireframe is fun for showing, maybe before you delete an item for fun?
  // wireframe: true,
});


let materialTwo = new THREE.MeshPhongMaterial({
  color: '',
  specular: 0xbb2301,
  shininess: 12
});
