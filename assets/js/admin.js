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
        </tr>`
    })
  })
}

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
        </tr>`
    })
  })
}

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
          </tr>`
    })
  })
}
