describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame(1)
    frame10 = new Frame(10)
    roll1 = new Roll(1, 4)
    roll2 = new Roll(2, 6)
    strike = new Roll(1, 10)
  })

  it('has a number', function() {
    expect(frame.number).toEqual(1)
  })

  it('has an array for rolls', function() {
    expect(frame.rolls).toEqual([])
  })

  it('can add rolls', function() {
    frame.addRoll(roll1)
    frame.addRoll(roll2)
    expect(frame.rolls).toEqual([roll1, roll2])
  })

  it('returns true if its the tenth frame', function() {
    expect(frame10.isTenth()).toEqual(true)
  })

  it('returns false if its the tenth frame', function() {
    expect(frame.isTenth()).toEqual(false)
  })

  it('checks if the first roll was a strike', function() {
    frame.addRoll(strike)
    expect(frame.hasStrike()).toEqual(true)
  })

  it('checks if the the frame is over when there is a strike', function() {
    frame.addRoll(strike)
    expect(frame.isOver()).toEqual(true)
  })

  it('checks if the the frame is over after two rolls', function() {
    frame.addRoll(roll1)
    frame.addRoll(roll2)
    expect(frame.isOver()).toEqual(true)
  })

  it('returns false if frame is not over with one roll', function() {
    frame.addRoll(roll1)
    expect(frame.isOver()).toEqual(false)
  })

  it('returns false if the frame is not over in the tenth frame after two rolls', function() {
    frame10.addRoll(roll1)
    frame10.addRoll(roll2)
    expect(frame.isOver()).toEqual(false)
  })

  it('checks if the the frame is over after three rolls in the tenth frame', function() {
    frame.addRoll(roll1)
    frame.addRoll(roll2)
    frame.addRoll(roll2)
    expect(frame.isOver()).toEqual(true)
  })

  it('has a maximum of two rolls if the frame number is not 10', function() {
    frame.addRoll(roll1)
    frame.addRoll(roll2)
    frame.addRoll(roll1)
    expect(frame.rolls).toEqual([roll1, roll2])
  })

  it('has a maximum of three rolls if the frame number is 10', function() {
    frame10.addRoll(roll1)
    frame10.addRoll(roll2)
    frame10.addRoll(roll1)
    expect(frame10.rolls).toEqual([roll1, roll2, roll1])
  })

  it('has a maximum of one roll if the first roll is a strike', function() {
    frame2 = new Frame(1)
    frame2.addRoll(strike)
    frame2.addRoll(roll1)
    expect(frame2.rolls).toEqual([strike])
  })
})