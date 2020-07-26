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

// Reference booking collection
var taxiRef = firebase.database().ref('carbooking')

// Listen for form submit
document.getElementById('booking-form').addEventListener('submit', submitForm)

//Submit Form
function submitForm(e) {
  e.preventDefault()

  // Get values
  var name = getInputVal('name')
  var phone = getInputVal('phone')
  var city = getInputVal('city')
  var destination = getInputVal('destination')
  var tripdate = getInputVal('date')
  var triptime = getInputVal('example-time-input')
  var vehicle = window.location.search.split('=')[1]
  var number_people = document.getElementsByName('number_people')
  var bookingdate = new Date()

  for (i = 0; i < number_people.length; i++) {
    if (number_people[i].checked) var person = number_people[i].value
  }

  //Booking
  carBooking(
    name,
    phone,
    city,
    destination,
    tripdate,
    triptime,
    vehicle,
    person,
    bookingdate
  )

  //Show alert
  document.querySelector('.alert').style.display = 'block'

  //Hide alert
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none'
  }, 3000)

  //Clear form
  document.getElementById('booking-form').reset()
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// Save Booking to Firebase
function carBooking(
  name,
  phone,
  city,
  destination,
  tripdate,
  triptime,
  vehicle,
  person,
  bookingdate
) {
  var newtaxiRef = taxiRef.push()
  newtaxiRef.set({
    name: name,
    phone: phone,
    city: city,
    destination: destination,
    tripdate: tripdate,
    triptime: triptime,
    vehicle: vehicle,
    person: person,
    bookingdate: bookingdate.toDateString(),
  })
  // showBooking()
}

// Get Booking from Firebase
// function showBooking() {
//   taxiRef.on('value', function (snapshot) {
//     snapshot.forEach(function (childSnapshot) {
//       var data = childSnapshot.val()

//       document.getElementById('booking-table').innerHTML += `
//         <tr>
//         <th scope="row">${data.bookingdate}</th>
//         <td>${data.name}</td>
//         <td>${data.phone}</td>
//         <td>${data.city}</td>
//         <td>${data.destination}</td>
//         <td>${data.tripdate}</td>
//         <td>${data.triptime}</td>
//         <td>${data.vehicle}</td>
//         <td>${data.person}</td>
//         </tr>`
//     })
//   })
// }
