// NB you only get three rolls in the 10th frame 
// if you roll a strike in the first roll
// or a spare on the second

function Frame (number) {
  this.number = number
  this.rolls = []
  this.baseScore = 0
}

Frame.prototype.hasStrike = function() {
  return  (this.rolls[0] && this.rolls[0].isStrike)
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
      console.log("strike")
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

