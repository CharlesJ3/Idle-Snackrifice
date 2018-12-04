/**
 * 
 * Objects
 * 
 */

const player = {
  beginIntro: 0,
  beginIntroOne: 0,
  beginIntroTwo: 0,
  beginIntroThree: 0,

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
  animal: 2,
  human: 2,

  //Rings
  currentRingCount: 1,
  permanentRingCountForVariableNames: 1,

  // Stats Area

}

const rings = [{
  ringNumber: 1,
  ringPurchaseCost: 1,
  ringInitialCost: 1,
  ringInitialPowerCost: 1,
  ringCost: 3,
  ringPowerCost: 5,
  ringSacrifice: 'Rat',
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringPower: 1.00,
  ringLevel: 0,
  ringPowerLevel: 0,
  rotationalSpeedX: 0,
  rotationalSpeedY: Math.PI / 1080,
  ringSpeedUpgrade() {
    return this.rotationalSpeedX + this.rotationalSpeedY
  }, 
  addAnimal() {
    player.animal += ((this.rotationalSpeedX) + (this.rotationalSpeedY)) * (this.ringPower * 1.75)
  },

}, {
  ringNumber: 2,
  ringPurchaseCost: 25,
  ringInitialCost: 100,
  ringInitialPowerCost: 250,
  ringCost: 25,
  ringPowerCost: 25,
  ringSacrifice: 'Deer',
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringPower: 2.00,
  ringLevel: 0,
  ringPowerLevel: 0,
  rotationalSpeedX: 0,
  rotationalSpeedY: Math.PI / 1080,
  ringSpeedUpgrade() {
    return this.rotationalSpeedX + this.rotationalSpeedY
  }, 
  addAnimal() {
    player.animal += ((this.rotationalSpeedX) + (this.rotationalSpeedY)) * (this.ringPower * 2.25)
  },

}, {
  ringNumber: 3,
  ringPurchaseCost: 250,
  ringInitialCost: 1000,
  ringInitialPowerCost: 2500,
  ringCost: 250,
  ringPowerCost: 250,
  ringSacrifice: 'T-Rex',
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringPower: 3.00,
  ringLevel: 0,
  ringPowerLevel: 0,
  rotationalSpeedX: 0,
  rotationalSpeedY: Math.PI / 1080,
  ringSpeedUpgrade() {
    return this.rotationalSpeedX + this.rotationalSpeedY
  }, 
  addAnimal() {
    player.animal += ((this.rotationalSpeedX) + (this.rotationalSpeedY)) * (this.ringPower * 3)
  },

}, {
  ringNumber: 4,
  ringPurchaseCost: 1,
  ringInitialCost: 1,
  ringInitialPowerCost: 1,
  ringCost: 3,
  ringPowerCost: 5,
  ringSacrifice: 'Troglodyte',
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringPower: 1.00,
  ringLevel: 0,
  ringPowerLevel: 0,
  rotationalSpeedX: 0,
  rotationalSpeedY: Math.PI / 1080,
  ringSpeedUpgrade() {
    return this.rotationalSpeedX + this.rotationalSpeedY
  }, 
  addAnimal() {
    player.human += ((this.rotationalSpeedX) + (this.rotationalSpeedY)) * (this.ringPower * 1.75)
  },

}, {
  ringNumber: 5,
  ringPurchaseCost: 25,
  ringInitialCost: 2,
  ringInitialPowerCost: 2,
  ringCost: 2,
  ringPowerCost: 2,
  ringSacrifice: 'Peasant',
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  ringPowerLevel: 0,
  ringPower: 2.00,
  rotationalSpeedX: 0,
  rotationalSpeedY: Math.PI / 1080,
  ringSpeedUpgrade() {
    return this.rotationalSpeedX + this.rotationalSpeedY
  }, 
  addAnimal() {
    player.human += ((this.rotationalSpeedX) + (this.rotationalSpeedY)) * (this.ringPower * 2.25)
  },

}, {
  ringNumber: 6,
  ringPurchaseCost: 250,
  ringInitialCost: 1000,
  ringInitialPowerCost: 2500,
  ringCost: 250,
  ringPowerCost: 250,
  ringSacrifice: 'Alien',
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '', 
  ringPower: 3.00,
  ringLevel: 0,
  ringPowerLevel: 0,
  rotationalSpeedX: 0,
  rotationalSpeedY: Math.PI / 1080,
  ringSpeedUpgrade() {
    return this.rotationalSpeedX + this.rotationalSpeedY
  }, 
  addAnimal() {
    player.human += ((this.rotationalSpeedX) + (this.rotationalSpeedY)) * (this.ringPower * 3)
  },
}]

const enemy = {
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