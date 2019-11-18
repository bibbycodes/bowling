function Frame (number) {
  this.number = number
  this.rolls = []
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
    if (this.rolls.length == 3) {
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