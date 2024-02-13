document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'thankyou.html'; // Redirects to the Thank You page
});

const noButton = document.getElementById('noButton');
const phrases = ["Why not?", "Pls no", "UwU", "No SHOT!", "AYOOOO Chilll", "Srsly?", "Just took an L.", "Vibes = Nope!", "Big oof!", "Yeet outta here!"];
let phraseIndex = 0; 
noButton.addEventListener('mouseover', function(event) {
    const buttonRect = noButton.getBoundingClientRect();
    let newX = Math.random() * (window.innerWidth - buttonRect.width);
    let newY = Math.random() * (window.innerHeight - buttonRect.height);

    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';

    noButton.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length; 
});





