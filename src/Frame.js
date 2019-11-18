function Frame (number) {
  this.number = number
  this.rolls = []
}

Frame.prototype.addRoll = function(roll) {
    if (this.number != 10 && this.rolls.length < 2) {
      this.rolls.push(roll)
    } else if (this.number == 10 && this.rolls.length < 3) {
      this.rolls.push(roll)
    }
    // if (this.rolls[0]) {
    //   if (this.rolls[0].isStrike == false) {
    //     this.rolls.push(roll)
    //   }
  // }
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