document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const thankYouGif = document.getElementById('thankYouGif');
    const greasyGroveButton = document.getElementById('greasyGroveButton');

    playButton.addEventListener('click', function() {
        // Play the background music when "Click me" is clicked
        if (backgroundMusic) {
            backgroundMusic.play().catch(e => {
                console.error("Failed to play audio:", e);
            });
        }

        // Display the GIF 3 seconds after the music starts
        setTimeout(function() {
            if (thankYouGif) {
                thankYouGif.style.display = 'block';
            }
        }, 3800);
    });

    setTimeout(function() {
        if (greasyGroveButton) {
            greasyGroveButton.style.display = 'block';
            // Redirect to greasygrove.html when "Greasy Grove" button is clicked
            greasyGroveButton.addEventListener('click', function() {
                window.location.href = 'greasygrove.html';
            });
        }
    }, 10000);
});
