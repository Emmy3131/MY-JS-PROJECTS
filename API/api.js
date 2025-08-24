let adviceCounter = 0;
document.getElementById('btn').addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice', {
    method: 'GET'
  })
    .then(response =>{
      if(response.status===200){
         return response.json()
      }
    })
    .then(data => {  
      if(data){
        const advice = document.querySelector('#adviceBoxs');
        advice.innerHTML = `<p>${data.slip.advice}</p>`
        adviceCounter ++
        const para = document.getElementById('para')
        para.innerText = `You have listen to ${adviceCounter} advice today`

        console.log(data);
      }
    })
    .catch(error => {
      console.log('Error fetching advice:', error);
    });

  console.log('yes it worked');
});
