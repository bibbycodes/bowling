describe('Roll', function(){
  beforeEach(function() {
    roll = new Roll(1, 5);
  })

  it('has a number', function() {
    expect(roll.number).toBeInstanceOf(Number);
  })

  it('has a score', function() {
    expect(roll.score).toBeInstanceOf(Number)
  })

  it('has a max score of 10', function() {
    expect(roll.maxScore).toEqual(10)
  })

  it('has a minimum score of 0', function() {
    expect(roll.minScore).toEqual(0)
  })

  it('is a strike if the score is 10', function() {
    strike = new Roll(2,10)
    expect(roll.isStrike).toEqual(false)
    expect(strike.isStrike).toEqual(true)
  })
})