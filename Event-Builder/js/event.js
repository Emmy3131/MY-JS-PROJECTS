  function getInputs() {
    var eventName = document.getElementById('eventName').value;
    var eventVenue = document.getElementById('venue').value;
    var time = document.getElementById('time').value;
    var date = document.getElementById('date').value;

    if (eventName === "" || eventVenue === "" || time === "" || date === "") {
      alert("Please fill in all fields before submitting.");
      return null;
    }

    return { eventName, eventVenue, time, date };
  }

  function displayEvent(data) {
    var eventDisplay = document.getElementById('eventDisplay');

    var eventItem  = `
      <div class="event-item">
        <img src="images/img-1.png" alt="Event Cover" class="event-cover">
        <div class="event-details">
            <p class="event-name">${data.eventName}</p>
            <p>Venue: ${data.eventVenue}</p>
            <p>Time: ${data.time}</p>
            <p>Date: ${data.date}</p>
        </div>
        <div>
            <button class="delete-btn">Delete</button>
        </div>
      </div>
    `;

    eventDisplay.insertAdjacentHTML('beforeend', eventItem);
  }

  document.getElementById("eventForm").addEventListener('submit', function(e) {
    e.preventDefault();
    var inputData = getInputs();
    if (inputData) {
      displayEvent(inputData);
      e.target.reset();
    }
  });

  // Handle deleting events
  document.getElementById('eventDisplay').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
      e.target.closest('.event-item').remove();
    }
  })