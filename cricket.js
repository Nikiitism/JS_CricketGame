let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore (scoreStr) {
    score = scoreStr ? JSON.parse(scoreStr) : {win:0,lost:0,tie:0,}

    score.displayScore = 
    function () {
        return (` Won: ${score.win}    Lost: ${score.lost}    Tie: ${score.tie}`)
      }
      showResult();
}

function generateCompChoice() {
  let randonNumber = Math.round(Math.random() * 2);

  if (randonNumber === 0) 
  { return "Bat";}
  else if (randonNumber === 1) 
  { return "Ball"; }
  else
   { return "Stump";}
}

function getResult (userMove, compMove)
{
    if(userMove === 'Bat')
    {
        if('Bat' === compMove)
        { score.tie++;  return `It's a tie.`}
        else if('Ball' === compMove)
        { score.win++;  return 'You Won!!'}
        else 
        {  score.lost++; return 'You loose. Try again.'}
    }
    else if (userMove === 'Ball')
    {
        if('Ball' === compMove)
        {  score.tie++; return `It's a tie.`}
        else if('Stump' === compMove)
        { score.win++;  return 'You Won!!'}
        else 
        { score.lost++;  return ' You loose. Try again.'}
    }
    else
    {
        if('Ball' === compMove)
        { score.lost++; return 'You loose. Try again.'}
        else if('Bat' === compMove)
        { score.win++;  return 'You Won!!'}
        else 
        { score.tie++; return `It's a tie.`}
    }
}


function showResult( userMove, compMove, result)
{
     localStorage.setItem('Score', JSON.stringify(score));
     document.querySelector('#user-move').innerText = userMove ? `You have choosen ${userMove}` : ''
     document.querySelector('#comp-move').innerText = compMove ? `Computer have choosen ${compMove}` : ''
     document.querySelector('#result').innerText = result || '' 
     document.querySelector('#score').innerText = score.displayScore()
     
}


