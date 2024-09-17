document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const room = document.getElementById('room').value;

    const bookingDetails = {
        name: name,
        email: email,
        checkin: checkin,
        checkout: checkout,
        room: room
    };

    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    window.location.href = 'booking-details.html';
});