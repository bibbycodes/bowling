function Frame (number) {
  this.number = number
  this.rolls = []
  this.hasStrike()
}

Frame.prototype.addRoll = function(roll) {
  if (!this.hasStrike()) {
    if (this.number != 10 && this.rolls.length < 2) {
      this.rolls.push(roll)
    } else if (this.number == 10 && this.rolls.length < 3) {
      this.rolls.push(roll)
    }
  }
}

Frame.prototype.hasStrike = function() {
  if (this.rolls[0] && this.rolls[0].isStrike) {
    return true
  } else {
    return false
  }
}



frame = new Frame(1)
roll = {
  score: 10,
  isStrike : true,
}

frame.addRoll(roll)
console.log(frame.rolls[0].score)
frame.addRoll(roll)
console.log(frame.rolls)