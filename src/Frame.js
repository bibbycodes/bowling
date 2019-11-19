// NB you only get three rolls in the 10th frame 
// if you roll a strike in the first roll
// or a spare on the second

function Frame (number) {
  this.number = number
  this.rolls = []
  this.baseScore = 0
}

Frame.prototype.hasStrike = function() {
  if (this.rolls[0] && this.rolls[0].isStrike) {
    return true
  } else {
    return false
  }
}

Frame.prototype.isTenth = function() {
  if(this.number == 10) {
    return true
  } else {
    return false
  }
}

Frame.prototype.isOver = function() {
  if (this.hasStrike()) {
    return true
  }

  if (this.isTenth()) {
    if ((this.hasStrike() && this.rolls.length == 3) || (this.isSpare() && this.rolls.length == 3)) {
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
  }
}

Frame.prototype.isSpare = function()  {
  total = 0
  if (this.rolls.length >= 2) {
    total += (this.rolls[0].score + this.rolls[1].score)
  }

  if (total == 10) {
    return true
  } else {
    return false
  }
}