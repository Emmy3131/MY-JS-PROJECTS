var fetchusers = [
  {
    name: 'Emmanuel',
    address: 'mbano',
    contact: '07011053181',
    email: 'devinechild@gmail.com',
    status: 'active'
  },
  {
    name: 'Emmanuel',
    address: 'mbano',
    contact: '07011053181',
    email: 'devinechild@gmail.com',
    status: 'active'
  },
  {
    name: 'austine',
    address: 'mbano',
    contact: '07011053181',
    email: 'devinechild@gmail.com',
    status: 'pending'
  },
  {
    name: 'andrew',
    address: 'mbano',
    contact: '07011053181',
    email: 'devinechild@gmail.com',
    status: 'pending'
  },
  {
    name: 'peter',
    address: 'mbano',
    contact: '07011053181',
    email: 'devinechild@gmail.com',
    status: 'deactive'
  },
  {
    name: 'james',
    address: 'mbano',
    contact: '07011053181',
    email: 'devinechild@gmail.com',
    status: 'deactive'
  }
  
]

function displayUsers(fetchusers){
  var tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  for(var i = 0; i < fetchusers.length; i++){
    var user = fetchusers[i];
    var trHTML = `
     <tr>
        <td>${i + 1}</td>
        <td>${user.name}</td>
        <td>${user.address}</td>
        <td>${user.contact}</td>
        <td>${user.email}</td>
        <td>${user.status}</td>
      </tr>
    `
    tableBody.innerHTML += trHTML
  }
}
displayUsers(fetchusers)

function filterUsersByStatus(status) {
    var filtered = [];
    for (var i = 0; i < fetchusers.length; i++) {
      if (status === "all" || fetchusers[i].status === status) {
        filtered.push(fetchusers[i]);
      }
    }
    return filtered;
  }

var Status = document.getElementById('status');
Status.addEventListener('change', function(){
 var selectedStatus = this.value;
 var filteredUsers = filterUsersByStatus(selectedStatus);
 displayUsers(filteredUsers);
})

