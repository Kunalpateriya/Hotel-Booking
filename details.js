
document.addEventListener('DOMContentLoaded', function() {
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));

    if (bookingDetails) {
        const summary = `
            <strong>Name:</strong> ${bookingDetails.name}<br>
            <strong>Email:</strong> ${bookingDetails.email}<br>
            <strong>Check-in Date:</strong> ${bookingDetails.checkin}<br>
            <strong>Check-out Date:</strong> ${bookingDetails.checkout}<br>
            <strong>Room Type:</strong> ${bookingDetails.room}
        `;

        document.getElementById('summary').innerHTML = summary;
    } else {
        document.getElementById('summary').innerHTML = 'No booking details found.';
    }
});