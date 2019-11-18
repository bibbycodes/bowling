describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame(1)
    roll1 = new Roll(1, 4)
    roll2 = new Roll(2, 6)
  })

  it('has a number', function() {
    expect(frame.number).toEqual(1)
  })

  it('has an array for rolls', function() {
    expect(frame.rolls).toEqual([])
  })

  it('has can add rolls', function() {
    frame.addRoll(roll1)
    frame.addRoll(roll2)
    expect(frame.rolls).toEqual([roll1, roll2])
  })

  it('has a maximum of two rolls if the frame number is not 10', function() {
    frame.addRoll(roll1)
    frame.addRoll(roll2)
    frame.addRoll(roll1)
    expect(frame.rolls).toEqual([roll1, roll2])
  })

  it('has a maximum of three rolls if the frame number is 10', function() {
    frame10 = new Frame(10)
    frame10.addRoll(roll1)
    frame10.addRoll(roll2)
    frame10.addRoll(roll1)
    expect(frame10.rolls).toEqual([roll1, roll2, roll1])
  })

  it('has a maximum of one roll if the first roll is a strike', function() {
    strike = new Roll(1, 10)
    frame2 = new Frame(1)
    frame2.addRoll(strike)
    frame2.addRoll(roll1)
    expect(frame2.rolls).toEqual([strike])
  })
})