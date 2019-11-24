describe('Score', function() {

  beforeEach(function() {
    testScore = new Score()
    roll1 = new Roll(1, 4)
    roll2 = new Roll(2, 6)
    strike = new Roll(1, 10)
    frame = new Frame(1)
    frame2 = new Frame(1)
  })

  describe("#addFrame", function() {
    it("adds a frame", function() {
      testScore.addFrame(frame)
      testScore.addFrame(frame)
      expect(testScore.allFrames.length).toEqual(2)
    })

    it("adds each roll for each frame added", function(){
      frame.addRoll(roll1)
      frame.addRoll(roll1)
      testScore.addFrame(frame)
      expect(testScore.allRolls.length).toEqual(2)
    })
  })

  describe("calculating the scorre", function() {

    beforeEach(function() {
      scores = [[8,1], [0,9], [2,8], [0,10], [6,3], [7,0], [5,2], [0,10], [0,6], [2,8,10]]
      frames = []
      i = 1
      scores.forEach(function(frame) {
        j = 1
        currentFrame = new Frame(i)
        frame.forEach(function(roll){
          currentRoll = new Roll(j, roll)
          currentFrame.addRoll(currentRoll)
          j += 1
        })

        frames.push(currentFrame)
        i += 1
      })

      frames.forEach(function(frame) {
        testScore.addFrame(frame)
      })

    })
 
    it("calculates the base score", function() {
      testScore.calculateBaseScore()
      expect(testScore.baseScore).toEqual(97)
    })

    it("calculates the strike bonus", function() {
      testScore.calculateStrikeBonus()
      expect(testScore.strikeBonus).toEqual(15)
    })
  })
})



    // rollA = new Roll(1, 8)
    // rollB = new Roll(2, 1)
    // rollC = new Roll(3, 0)
    // rollD = new Roll(4, 9)
    // rollE = new Roll(5, 2)
    // rollF = new Roll(6, 8)
    // rollG = new Roll(7, 0)
    // rollH = new Roll(8, 10)
    // rollI = new Roll(9, 6)
    // rollJ = new Roll(10, 3)
    // rollK = new Roll(11, 7)
    // rollL = new Roll(12, 0)
    // rollM = new Roll(13, 3)
    // rollN = new Roll(14, 7)