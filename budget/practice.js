// Budget Controller
var budgetController = (function () {
  var data = {
    allItems: {
      inc: [],
      exp: []
    },
    total: {
      inc: 0,
      exp: 0
    },
    budget: 0
  };

  function calculateTotal(type) {
    var sum = 0;
    for (var i = 0; i < data.allItems[type].length; i++) {
      sum += data.allItems[type][i].total;
    }
    data.total[type] = sum;
  }

  function calculateBudget() {
    calculateTotal('inc');
    calculateTotal('exp');
    data.budget = data.total.inc - data.total.exp;
  }

  return {
    addItem: function (type, item, quantity, unitPrice, date) {
      var id = data.allItems[type].length + 1;
      var total = quantity * unitPrice;
      var newItem = {
        id: id,
        item: item,
        quantity: quantity,
        unitPrice: unitPrice,
        date: date,
        total: total
      };
      data.allItems[type].push(newItem);
      calculateBudget();
      return newItem;
    },

    deleteItem: function (type, id) {
      var items = data.allItems[type];
      for (var i = 0; i < items.length; i++) {
        if (items[i] && items[i].id === id) {
          data.total[type] -= items[i].total;
          items.splice(i, 1);
          break;
        }
      }
      calculateBudget();
    },

    getBudget: function () {
      return {
        income: data.total.inc,
        expenses: data.total.exp,
        budget: data.budget,
        percentage:
          data.total.inc > 0
            ? Math.round((data.total.exp / data.total.inc) * 100)
            : 0
      };
    },

    testing: function () {
      console.log(data);
    }
  };
})();


// UI Controller
var uIController = (function () {
  return {
    getInput: function () {
      return {
        type: document.getElementById('type').value,
        item: document.getElementById('item').value,
        quantity: parseInt(document.getElementById('quantity').value),
        unitPrice: parseInt(document.getElementById('unit-price').value),
        date: document.getElementById('date').value
      };
    },

    addListItem: function (obj, type) {
      var container, html;

      if (type === 'inc') {
        container = document.getElementById('income-continer');
      } else {
        container = document.getElementById('expenses-continer');
      }

      html =
        '<div id="' + type + '-' + obj.id + '" class="budget-item flex md:flex-nowrap flex-wrap md:gap-0 gap-8 md:text-start text-center border-2 rounded-md mt-5 px-2 py-5">' +
        '<div class="mr-5"><p class="text-xs">Item</p><h1 class="font-medium">' + obj.item + '</h1></div>' +
        '<div class="mr-5"><p class="text-xs">Quantity</p><h1 class="font-medium">' + obj.quantity + '</h1></div>' +
        '<div class="mr-5"><p class="text-xs">Date</p><h1 class="font-medium">' + obj.date + '</h1></div>' +
        '<div class="mr-5"><p class="text-xs">Unit Price</p><h1 class="flex items-center gap-2 font-medium">&#x20A6;' + obj.unitPrice + '</h1></div>' +
        '<div class="mr-5"><p class="text-xs">Total Price</p><h1 class="flex items-center gap-2 font-medium">&#x20A6;' + obj.total + '</h1></div>' +
        '<div class="md:mx-0 mx-auto">' +
        '<p class="text-xs">Action</p>' +
        '<i class="fas fa-trash-alt delete-btn cursor-pointer text-red-500" data-type="' + type + '" data-id="' + obj.id + '"></i>' +
        '</div>' +
        '</div>';

      container.insertAdjacentHTML('beforeend', html);
    },

    deleteListItem: function (type, id) {
      var item = document.getElementById(type + '-' + id);
      if (item) {
        item.parentNode.removeChild(item);
      }
    },

    clearFields: function () {
      document.getElementById('item').value = '';
      document.getElementById('quantity').value = '';
      document.getElementById('unit-price').value = '';
      document.getElementById('date').value = '';
    },

    displayBudget: function (total) {
      document.getElementById('budget').innerHTML = '&#x20A6; ' + total.budget;
      document.getElementById('income').innerHTML = '&#x20A6; ' + total.income;
      document.getElementById('expenses').innerHTML = '&#x20A6; ' + total.expenses;
      document.getElementById('exp-percentage').innerHTML = total.percentage + '%';
    },

    changeType:function(e){ 
      var el = Array.from(document.getElementsByClassName('form-group'));
        for(var i = 0; i < el.length; i++){
          var currentEl = el[i];
            currentEl.classList.toggle('focus-within:border-red-700')
            console.log(currentEl);
            
        }
    },


  updateToCurrentMonthAndYear: function() {
    var label = document.getElementById('date-label');
    var now = new Date();
    var options = { month: 'long', year: 'numeric' };
    label.textContent = now.toLocaleDateString('en-US', options);
  }

  };
})();
uIController.updateToCurrentMonthAndYear()



// App Controller
var appController = (function (budgetCtrl, uiCtrl) {
  var setupEventListeners = function () {
    document.getElementById('add-btn').addEventListener('click', ctrlAddItem);

    document.getElementById('items-container').addEventListener('click', ctrlDeleteItem);

    document.getElementById('type').addEventListener('change', uiCtrl.changeType)

  };

  var ctrlAddItem = function () {
    var input = uiCtrl.getInput();

    if (
      input.item !== '' &&
      !isNaN(input.quantity) &&
      input.quantity > 0 &&
      !isNaN(input.unitPrice) &&
      input.unitPrice > 0 &&
      input.date !== ''
    ) {
      var newItem = budgetCtrl.addItem(
        input.type,
        input.item,
        input.quantity,
        input.unitPrice,
        input.date
      );

      uiCtrl.addListItem(newItem, input.type);
      uiCtrl.clearFields();

      var totals = budgetCtrl.getBudget();
      uiCtrl.displayBudget(totals);
    } else {
      alert('Please fill all fields correctly.');
    }
  };

  var ctrlDeleteItem = function (event) {
    var target = event.target;

    if (target.classList.contains('delete-btn')) {
      var type = target.getAttribute('data-type');
      var id = parseInt(target.getAttribute('data-id'));

      budgetCtrl.deleteItem(type, id);
      uiCtrl.deleteListItem(type, id);

      var totals = budgetCtrl.getBudget();
      uiCtrl.displayBudget(totals);
    }
  };

  return {
    init: function () {
      console.log('Application started');
      setupEventListeners();
      var total = budgetCtrl.getBudget();
      uiCtrl.displayBudget(total);
    }
  };
})(budgetController, uIController);

appController.init();
