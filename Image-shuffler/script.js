var activePlayer = 0;
var roundedScore = 0;
var scores = [0, 0];
var isPlaying = true;

document.getElementById('btn-shuffle').addEventListener('click', function(){
 if(isPlaying){
   var images = [
    'fruit-1.jpg', 'fruit-2.png', 'fruit-3.jfif', 'fruit-4.jfif', 'fruit-5.jpg', 'fruit-6.webp', 'fruit-7.png', 'image-1.jpg', 'image-2.jpeg', 'image-3.jpg', 'image-4.jpg', 'image-5.jpg', 'image-6.jpg', 'swiss_flag.jpg', 'us_flag.jfif'
  ]
  var flags = ['swiss_flag.jpg', 'us_flag.jfif']
  var imageDisplay = document.getElementById('image')
  var index = Math.floor(Math.random() * images.length)
  var image = images[index];
  imageDisplay.src = image

  var indexOf = flags.indexOf(image)
  if(indexOf === -1){
    roundedScore += 2
    document.getElementById(`current-${activePlayer}`).textContent =roundedScore
  }else{
    nextPlayer()
  }
 }
  
})

  function nextPlayer() {
      roundedScore = 0;
      document.getElementById(`current-${ activePlayer}`).textContent = roundedScore;

      // Toggle active player
      document.getElementById(`player-${activePlayer}-panel`).classList.remove('active');
      activePlayer = activePlayer === 0 ? 1 : 0;
      document.getElementById(`player-${activePlayer}-panel`).classList.add('active');
    }



    document.getElementById('hold').addEventListener('click', function () {
    
    if(isPlaying){
      scores[activePlayer] += roundedScore;
      document.getElementById(`score-${ activePlayer}`).textContent = scores[activePlayer];

      var finalScoreInput = document.getElementById('final-score').value;
      var winningScore = finalScoreInput ? finalScoreInput : 20;

        if (scores[activePlayer] >= winningScore) {
        document.getElementById(`name-${activePlayer}`).textContent = 'WINNER!';
        document.getElementById(`player-${activePlayer}-panel`).classList.add('WINNER')
        document.getElementById(`player-${activePlayer}-panel`).classList.remove('active')
        document.getElementById('image').style.display = 'none'
        isPlaying = false;
      } else{
        nextPlayer()
      }
      }
    
  });



  document.getElementById('btn-new').addEventListener('click', init)
  init()
  function init() {
    scores = [0, 0];
    roundedScore = 0;
    activePlayer = 0;
    isPlaying = true;

    // Reset UI
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';

    document.getElementById('player-0-panel').classList.add('active');
    document.getElementById('player-1-panel').classList.remove('active');

    document.getElementById('image').style.display = 'block'
  }


