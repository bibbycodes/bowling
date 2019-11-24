describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame(1)
    frame10 = new Frame(10)
    roll1 = new Roll(1, 4)
    roll2 = new Roll(2, 6)
    roll3 = new Roll(3, 3)
    roll4 = new Roll(4, 7)
    strike = new Roll(1, 10)
  })

  describe('constructor', function() {
    it('has a number', function() {
      expect(frame.number).toEqual(1)
    })
  
    it('has an array for rolls', function() {
      expect(frame.rolls).toEqual([])
    })
  
    it('has an initial score of 0',function(){
      expect(frame.baseScore).toEqual(0)
    })
  })

  describe("#isTenth()", function() {
    it('returns true if its the tenth frame', function() {
      expect(frame10.isTenth()).toEqual(true)
    })
  
    it('returns false if its not the tenth frame', function() {
      expect(frame.isTenth()).toEqual(false)
    })
  })
  
  describe("spares and strikes", function() {
    it('detects when there is a spare', function() {
      frame.addRoll(roll1)
      frame.addRoll(roll2)
      expect(frame.isSpare()).toEqual(true)
    })

    it('detects when there is not a spare', function() {
      frame.addRoll(roll1)
      frame.addRoll(roll3)
      expect(frame.isSpare()).toEqual(false)
    })
  
    it('checks if the first roll was a strike', function() {
      frame.addRoll(strike)
      expect(frame.hasStrike()).toEqual(true)
    })

    it("checks if the first roll was not a strike", function() {
      frame.addRoll(roll3)
      expect(frame.hasStrike()).toEqual(false)
    })
  })

  describe("#isOver()", function(){
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
  })

  describe("number of rolls per frame", function() {
    it('can add rolls', function() {
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
  
    it('has a maximum of three rolls if the frame number is 10 and the first roll is a strike', function() {
      frame10.addRoll(strike)
      frame10.addRoll(roll2)
      frame10.addRoll(roll1)
      expect(frame10.isOver()).toEqual(true)
    })

    it('has a maximum of two rolls if the frame number is 10 and there is no strike or spare', function() {
      frame10.addRoll(roll3)
      frame10.addRoll(roll1)
      frame10.addRoll(roll2)
      frame10.addRoll(roll2)
      expect(frame10.rolls.length).toEqual(2)
    })

    it('has a maximum of three rolls if the frame number is 10 and the first 2 rolls make up a spare', function() {
      frame10.addRoll(roll2)
      frame10.addRoll(roll1)
      frame10.addRoll(roll3)
      expect(frame10.rolls.length).toEqual(3)
    })
  
    it('has a maximum of one roll if the first roll is a strike', function() {
      frame2 = new Frame(1)
      frame2.addRoll(strike)
      frame2.addRoll(roll1)
      expect(frame2.rolls).toEqual([strike])
    })
  })

  describe("#checkScore", function() {

    it("calculates the base score", function() {
      frame.addRoll(roll1)
      frame.addRoll(roll3)
      expect(frame.calcBaseScore()).toEqual(7)
    })
    it("doesnt allow for normal frames to add up to more than 10 points before the bonus is applied", function() {
      frame.addRoll(roll2)
      frame.addRoll(roll4)
      expect(frame.isValidFrame()).toEqual(false)
    }) 

    it("doesnt allow for the tenth frame to have a score of more than 30", function() {
      frame10.addRoll(strike)
      frame10.addRoll(strike)
      frame10.addRoll(strike)
      expect(frame.isValidFrame()).toEqual(true)
    }) 
  })

})