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
})