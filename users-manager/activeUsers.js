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
    contact: +234-7011053181,
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


var Status = document.getElementById('status');
Status.addEventListener('change', function(){
 var selectedStatus = this.value;

// const filteredUsers = fetchusers.filter(function(user){
//   if(user.status === selectedStatus) return user
// })
const filteredUsers = fetchusers.filter(currentUser=> currentUser.status === selectedStatus)
 displayUsers(filteredUsers);
})

