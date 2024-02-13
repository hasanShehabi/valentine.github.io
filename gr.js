document.getElementById('adventureForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const date = document.getElementById('datePicker').value;
    const time = document.getElementById('timePicker').value;
    alert("Great! See you on " + date + " at " + time + " in Greasy Grove!");
});



document.getElementById('adventureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'games.html';
});