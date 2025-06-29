
var budgetController = (function(){
   console.log("Budget controller running")
   var sum = function(a , b){
    return a + b
   }

   
   return{
    sum:sum(2, 7)
   }
   
})()

var UIController = (function(){
    console.log('U controller i running');

    return{
        printResult:function(num){
            console.log(num);
            
        }
    }
})()


var controller = (function(budgetCtrl,UICtrl){
    console.log('Controller is running');
    console.log(budgetCtrl);
    UICtrl.printResult(budgetCtrl.sum)
    
    
})(budgetController,UIController)

