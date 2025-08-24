var budgeController = (function(){
  function greet(name){
    console.log(`Hello ${name}`)
  }
  return{
    greet
  }
})()
budgeController.greet('Emmanuel');


var uiController = (function(){
  function checkAge(){
    var currentYear = 2025
    var dateOfBirth = 1998;
    var age = currentYear - dateOfBirth
    console.log(`your age is ${age}`)
  }
  return{
    checkAge
  }
})()
uiController.checkAge()


var AppController = (function(budgetctr, uictr){
  document.getElementById('add-btn').addEventListener('click',function(){
    console.log('App is running')
    uictr.checkAge()
  })
  return{
    init: function(){
      console.log('App control is running')
    }
  }
})(budgeController, uiController)

