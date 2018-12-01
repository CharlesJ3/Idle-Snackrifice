/**
 * All Globals Declared Here
 */

 let angleOfLight001 = 0;

 // Let's create a few torus[x] Objects. This way we can control the variables outside of creating the actual torus
 //TODO : Change the check from 35 to a set number of a created variable; perhaps in player.permanent???
 for (let x = 0; x < 35; x++){
  this["torus" + x] = new THREE.Object3D();
 }


