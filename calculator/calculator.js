var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');
var outputDisplay = document.getElementById('output-value')
var historyDisplay =document.getElementById('history-value')

for(var i = 0; i < numbers.length; i++){
  var buttun = numbers[i]
  buttun.addEventListener('click', function(){
    outputDisplay.textContent += this.id
  })
}

for(var j = 0; j < operators.length; j++){
  var operator = operators[j];
  operator.addEventListener('click', function(){
    if(this.id === 'clear'){
      outputDisplay.innerText = '';
      historyDisplay.innerText = '';
    }else if(this.id === 'backspace'){
      outputDisplay.innerText = outputDisplay.innerText.slice(0, -1);
    }else{
        if(this.id === '='){
          historyDisplay.innerText += outputDisplay.innerText
          var result = eval(historyDisplay.innerText)
          historyDisplay.innerText = '';
          outputDisplay.innerText = result;
        }else{
          historyDisplay.innerHTML += outputDisplay.innerText + this.id;
          historyDisplay.innerText = historyDisplay.innerText;
          outputDisplay.innerText = '';
        }
    }
  })
}
