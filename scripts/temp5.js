window.innerWidth / window.innerHeight;


// Fun add to object stuff for new array 
rings.currentRings.push({
  name: `ring${player.currentRingCount}`,
  addThisRing() {
    console.log('test complete')
  },
})



// Loop inside of torus creation, in case I need dynamic variables again
for (let i = 0; i < 1; i++){
  this["torus" + player.permanentRingCountForVariableNames] = new THREE.Object3D();
  player.permanentRingCountForVariableNames++;
}
