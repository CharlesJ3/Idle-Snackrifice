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

  //Resources
  source: 1,

  //Rings
  currentRingCount: 1,
  permanentRingCountForVariableNames: 1,

  // Stats Area

}

const rings = [{
  ringNumber: 1,
  ringSourceCost: 1,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: Math.PI / 1080,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 2,
  ringSourceCost: 10,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 3,
  ringSourceCost: 25,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 4,
  ringSourceCost: 100,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 5,
  ringSourceCost: 250,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 6,
  ringSourceCost: 1000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 7,
  ringSourceCost: 5000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 8,
  ringSourceCost: 25000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}, {
  ringNumber: 9,
  ringSourceCost: 100000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },


}, {
  ringNumber: 10,
  ringSourceCost: 100000,
  ringColorOne: '',
  ringColorTwo: '',
  ringColorThree: '',
  ringLevel: 0,
  rotationalSpeedX: Math.PI / 1080,
  rotationalSpeedY: 0,
  addSource() {
    player.source += (this.rotationalSpeedX) + (this.rotationalSpeedY)
  },

}]

const enemy = {
  // Enemy Statistics  (essential)

  // Enemy Information (non-essential)
  name: '',
  id: '',
}

const updateCam = {
  cameraPerspectiveChange: 50,
  cameraZPos: 50,
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