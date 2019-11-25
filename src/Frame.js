function Frame (number) {
  this.number = number
  this.rolls = []
  this.baseScore = 0
}

Frame.prototype.hasStrike = function() {
  if ((this.rolls[0] && this.rolls[0].isStrike)) {
    return true
  }

  if (this.rolls[1] && this.rolls[1].isStrike) {
    return true
  }

  return false
}

Frame.prototype.isTenth = function() {
  return this.number == 10
}

Frame.prototype.isOver = function() {
  if (this.hasStrike() && !this.isTenth()) {
    return true
  }
  
  if (this.isTenth()) {
    if ((this.hasStrike()) || (this.isSpare())) {
      return this.rolls.length == 3
      }

    if (this.rolls.length == 2) {
      return true
      }
  } else {

    if (this.rolls.length == 2) {
      return true
    }
  }

  return false
}

Frame.prototype.addRoll = function(roll) {
  if (!this.isOver()) {
    this.rolls.push(roll)
    this.baseScore = this.calcBaseScore()
  }
}

Frame.prototype.isSpare = function()  {
  total = 0

  if (this.hasStrike()) {
    return false
  }

  if ((this.rolls.length >= 2)) {
    total += (this.rolls[0].score + this.rolls[1].score)
  }
  return total == 10
}

Frame.prototype.calcBaseScore = function() {
  score = 0
  this.rolls.forEach(function(roll) {
    score += roll.score
  })
  this.baseScore = score
  return score
}

Frame.prototype.isValidFrame = function() {
  if (this.isTenth()) {
    console.log("tenth")
    return this.calcBaseScore() <= 30
  } else {
    return this.calcBaseScore() <= 10
  }
}