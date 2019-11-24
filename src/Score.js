function Score() {
  this.baseScore = 0
  this.strikeBonus = 0
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

Score.prototype.calculateBaseScore = function(frames = this.allFrames) {
  baseScore = this.baseScore
  for (i = 0; i < this.allFrames.length; i++) {
    this.baseScore += this.allFrames[i].baseScore
  }
}

Score.prototype.calculateStrikeBonus = function(rolls = this.allRolls) {
  for (i = 0; i < this.allRolls.length; i++) {
    roll = this.allRolls[i]
    nextRoll = this.allRolls[i + 1]
    nextNextRoll = this.allRolls[i + 2]

    if(roll.isStrike) {
      if (nextRoll) {
        this.strikeBonus += nextRoll.score
      }
      if (nextNextRoll) {
        this.strikeBonus += nextNextRoll.score
      }
    }
  }
}

Score.prototype.calculateSpareBonus = function(frames = this.allFrames) {
  
}


// for(i = 0; i < rolls.length; i ++) {


//   this.finalScore += roll.score


// }
// return this.finalScore