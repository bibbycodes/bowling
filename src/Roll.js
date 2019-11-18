function Roll(number, score) {
  this.maxScore = 10
  this.minScore = 0
  this.number = number
  this.score = score
  this.isStrike = false
  this.checkStrike()
}

Roll.prototype.checkStrike = function() {
  if (this.score == 10) {
    this.isStrike = true
  }
}

roll = new Roll(1, 10)

console.log(roll.isStrike)