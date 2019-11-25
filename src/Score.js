function Score() {
  this.baseScore = 0
  this.strikeBonus = 0
  this.spareBonus = 0
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
  for (i = 0; i < this.allFrames.length; i++) {
    this.baseScore += this.allFrames[i].baseScore
  }
  return this.baseScore
}

Score.prototype.calculateStrikeBonus = function(rolls = this.allRolls) {
  for (i = 0; i < rolls.length; i++) {
    roll = rolls[i]
    nextRoll = rolls[i + 1]
    nextNextRoll = rolls[i + 2]

    if(roll.isStrike) {
      if (nextRoll) {
        this.strikeBonus += nextRoll.score
      }
      if (nextNextRoll) {
        this.strikeBonus += nextNextRoll.score
      }
    }
  }
  return this.strikeBonus
}

Score.prototype.calculateSpareBonus = function(frames = this.allFrames) {
  bonus = 0
  for (i = 0; i < this.allFrames.length; i ++) {
    frame = this.allFrames[i]
    if (this.allFrames[i].isSpare()) {
      if (frame.number != 10) {
        nextFrame = this.allFrames[i + 1]
        console.log("SPARE!")
        bonus += nextFrame.rolls[0].score
      } else {
        bonus += frame.rolls[2].score
      }
    }
  }
  this.spareBonus = bonus
  return this.spareBonus
}
