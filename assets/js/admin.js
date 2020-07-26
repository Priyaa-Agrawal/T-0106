var firebaseConfig = {
  apiKey: 'AIzaSyCHLioFJvnng5Y6HO81RGMk42TbBg_yb6Y',
  authDomain: 'tripdoor-7e669.firebaseapp.com',
  databaseURL: 'https://tripdoor-7e669.firebaseio.com',
  projectId: 'tripdoor-7e669',
  storageBucket: 'tripdoor-7e669.appspot.com',
  messagingSenderId: '109681312727',
  appId: '1:109681312727:web:368bea89ae7e4770d50192',
  measurementId: 'G-PVHDLYPD3C',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()

var messagesRef = firebase.database().ref('messages')
var bookingRef = firebase.database().ref('carbooking')
var taxiRef = firebase.database().ref('taxi')

function showMessage() {
  messagesRef.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var data = childSnapshot.val()
      document.getElementById('contact-table').innerHTML += `
        <tr>
        <th scope="row">${data.date}</th>
        <td>${data.name}</td>
        <td>${data.phone}</td>
        <td>${data.email}</td>
        <td>${data.message}</td>
        <td id="deletemessage"><button type="submit" class="btn btn-primary" onclick="deleteMessage('${childSnapshot.key}');">Delete</button></td>
        </tr>`
    })
  })
}

// Get Booking from Firebase
function showBooking() {
  bookingRef.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var data = childSnapshot.val()
      document.getElementById('booking-table').innerHTML += `
        <tr>
        <th scope="row">${data.bookingdate}</th>
        <td>${data.name}</td>
        <td>${data.phone}</td>
        <td>${data.city}</td>
        <td>${data.destination}</td>
        <td>${data.tripdate}</td>
        <td>${data.triptime}</td>
        <td>${data.vehicle}</td>
        <td>${data.person}</td>
        <td id="deleteBooking"><button type="submit" class="btn btn-success" onclick="deleteBooking('${childSnapshot.key}');">Delete</button></td>
        </tr>`
    })
  })
}

// Get Taxi details from Firebase
function showTaxi() {
  taxiRef.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var data = childSnapshot.val()

      document.getElementById('taxi-table').innerHTML += `
          <tr>
          <th scope="row">${data.date}</th>
          <td>${data.firstname}</td>
          <td>${data.lastname}</td>
          <td>${data.phone}</td>
          <td>${data.email}</td>
          <td>${data.vehicle}</td>
          <td id="deleteTaxi"><button type="submit" class="btn btn-warning"  onclick="deleteTaxi('${childSnapshot.key}');">Delete</button></td>
          
          </tr>`
    })
  })
}

// Delete Message
// document.getElementById('deleteMessage').addEventListener('click', deleteMessage)
function deleteMessage(id) {
  messagesRef.child(id).remove()
}

// Delete Booking
function deleteBooking(id) {
  bookingRef.child(id).remove()
}

// Delete Taxi
function deleteTaxi(id) {
  taxiRef.child(id).remove()
}

// Login
// Listen for form submit
document.getElementById('login').addEventListener('submit', login)
function login(e) {
  e.preventDefault()
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  if (username == 'tripdoor' && password == 'tripdoor@123') {
    // window.location.href = '/adminlogin.html'
    showBooking()
    showMessage()
    showTaxi()
    document.getElementById('data').style.display = 'block'
    document.getElementById('login').style.display = 'none'
  }
}
