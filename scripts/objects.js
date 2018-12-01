/**
 * 
 * Objects
 * 
 */

const player = {
  // Ring Speed Checks 
  torusOneActivated: false,

  // Player Statistics  (essential)

  // Player Information (non-essential)
  name: '',
  id: '',

  //Reanimals
  animal: 1,
  human: 1,

  //Rings
  currentRingCount: 1,
  permanentRingCountForVariableNames: 1,

  // Stats Area

}

const rings = [{
  ringNumber: 1,
  ringAnimalCost: 1,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: Math.PI / 1080,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 2,
  ringAnimalCost: 10,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 3,
  ringAnimalCost: 25,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 4,
  ringAnimalCost: 100,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 5,
  ringAnimalCost: 250,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 6,
  ringAnimalCost: 1000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 7,
  ringAnimalCost: 5000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 8,
  ringAnimalCost: 25000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 9,
  ringAnimalCost: 100000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },


}, {
  ringNumber: 10,
  ringAnimalCost: 100000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.animal += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}]

const enemy = {
  // Enemy Statistics  (essential)

  // Enemy Information (non-essential)
  name: '',
  id: '',
}

const updateCam = {
  cameraPerspectiveChange: 5,
  cameraZPos: 300,
}

const mainLights = {

  lightSelect: 'lightSelect',
  lightSelectCurrent: '',
  lightSelectWhite: '#000',

  lightSelectDarkBlue: '#3366ff',
  lightSelectDarkerBlue: '#002db3',
  lightSelectVeryDarkBlue: '#002080',
  lightSelectLightBlue: '#ccd9ff',
  lightSelectBrightBlue: '#3399ff',
  lightSelectDarkBluePurple: '#0000cc',
  lightSelectLightBluePurple: '#ccccff',
  lightSelectDarkestBlue: '#000080',

  selectedColor: this.lightSelectBrightBlue,
  selectedColorTwo: this.lightSelectDarkBluePurple,

  //Array of Positions and colors to select from, if needed
  //TODO: Convert 0x to Hex or plain text
  color: [0xffffff, 0xffffff],
  xPos: [10, 0],
  yPos: [0, 10],
  zPos: [0, 0],
}