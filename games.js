document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const selectedGames = [];
    document.querySelectorAll('#gameForm input[type="checkbox"]:checked').forEach(function(checkbox) {
        selectedGames.push(checkbox.value);
    });

    const queryString = selectedGames.map(game => 'game=' + encodeURIComponent(game)).join('&');
    window.location.href = 'thanks.html?' + queryString;
});
