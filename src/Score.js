function Score() {
  this.currentScore = 0
  this.finalScore = 0
  this.allFrames = []
  this.allRolls = []
}

Score.prototype.addFrame = function(frame) {
  this.allFrames.push(frame)
  this.addRollsFromFrame(frame)
}

Score.prototype.addRollsFromFrame = function(frame) {
  for (i = 0; i < frame.rolls.length; i++) {
    this.allRolls.push(frame.rolls[i])
  }
}



