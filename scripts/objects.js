/**
 * 
 * Objects
 * 
 */

const player = {
  // Ring Speed Checks 
  torusOneActivated: false,
  torusTwoActivated: false,
  torusThreeActivated: false,
  torusFourActivated: false,
  torusFiveActivated: false,
  torusSixActivated: false,
  resourceOne: 'animal',
  resourceTwo: 'human',
  isAnimalPurchaseHidden: false,
  isHumanPurchaseHidden: false,

  // Player Statistics  (essential)

  // Player Information (non-essential)
  name: '',
  id: '',

  //Reanimals
  animal: 5,
  human: 5,

  //Rings
  currentRingCount: 1,
  permanentRingCountForVariableNames: 1,

  // Stats Area

}

const rings = [{
  ringNumber: 1,
  ringInitialCost: 1,
  ringCost: 1,
  ringSacrifice: 'Rat',
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
  ringNumber: 2,
  ringInitialCost: 2,
  ringCost: 2,
  ringSacrifice: 'Deer',
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
  ringInitialCost: 3,
  ringCost: 3,
  ringSacrifice: 'T-Rex',
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addAnimal() {
    player.human += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 4,
  ringInitialCost: 1,
  ringSacrifice: 'Troglodyte',
  ringCost: 1,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: 0,
  rotationalSpeedY: Math.PI / 1080,
  addAnimal() {
    player.human += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 5,
  ringInitialCost: 2,
  ringCost: 2,
  ringSacrifice: 'Peasant',
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: 0,
  rotationalSpeedY: Math.PI / 1080,
  addAnimal() {
    player.human += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 6,
  ringInitialCost: 3,
  ringCost: 3,
  ringSacrifice: 'Alien',
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: 0,
  rotationalSpeedY: Math.PI / 1080,
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