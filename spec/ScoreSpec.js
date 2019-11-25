function createScore(scores) {
  i = 1
  frames = []
  gameScore = new Score()

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
    gameScore.addFrame(frame)
  })
  return gameScore
}

describe('Score', function() {
  beforeEach(function() {
    testScore = new Score()
    perfect = new Score()
    roll1 = new Roll(1, 4)
    frame = new Frame(1)
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

  describe("calculating the score", function() {

    beforeEach(function() {
      scores = [[8,1], [0,9], [2,8], [0,10], [6,3], [7,0], [5,2], [0,10], [0,6], [2,8,10]]
      scores2 = [[1,4], [4,5], [6,4], [5,5], [10], [0,1], [7, 3], [6, 4], [10], [2 ,8 ,6]]
      perfectScore = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10,10,10]]
      testScore = createScore(scores)
      testScore2 = createScore(scores2)
      perfect = createScore(perfectScore)
    })
 
    it("calculates the base score", function() {
      testScore.calculateBaseScore()
      expect(testScore.baseScore).toEqual(97)
    })

    it("calculates the strike bonus", function() {
      testScore.calculateStrikeBonus()
      expect(testScore.strikeBonus).toEqual(15)
    })

    it("calculates the spare bonus", function() {
      testScore.calculateSpareBonus()
      expect(testScore.spareBonus).toEqual(10)
    })

    it("calculates the total score", function() {
      testScore.calculateBaseScore()
      testScore.calculateSpareBonus()
      testScore.calculateStrikeBonus()
      testScore.calculateTotalScore()
      expect(testScore.totalScore).toEqual(122)
    })

    it("calculates the total score for a perfect game", function() {
      perfect.calculateBaseScore()
      perfect.calculateSpareBonus()
      perfect.calculateStrikeBonus()
      perfect.calculateTotalScore()
      expect(perfect.totalScore).toEqual(300)
    })

    it("calculates the total score for a game", function() {
      testScore2.calculateBaseScore()
      testScore2.calculateSpareBonus()
      testScore2.calculateStrikeBonus()
      testScore2.calculateTotalScore()
      expect(testScore2.totalScore).toEqual(133)
    })
  })
})