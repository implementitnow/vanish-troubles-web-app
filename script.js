document.getElementById('vanishButton').addEventListener('click', function() {
    const troubleText = document.getElementById('troubleText').value;
    const quoteBox = document.getElementById('quoteBox');
    const breathMessage = document.getElementById('breathMessage');
    const timerElement = document.getElementById('timer');
    const genie = document.getElementById('genie');

    if (troubleText) {
        // Genie Snapping Fingers Animation
        genie.classList.add('snap');
        
        // Make the text vanish
        setTimeout(() => {
            document.getElementById('troubleText').value = '';
            // Display a relevant quote (AI-generated)
            const quote = generateQuote(troubleText);  // Simulate AI-generated quote
            quoteBox.innerText = `"${quote}"`;

            // Message to start breathing exercises
            breathMessage.innerText = "Now as your trouble is vanished, perform relaxing breaths for 60 seconds";

            // Start the timer
            let timeRemaining = 60;
            const timerInterval = setInterval(() => {
                timerElement.innerText = timeRemaining;
                timeRemaining--;
                
                if (timeRemaining < 0) {
                    clearInterval(timerInterval);
                    // Reset the page after 60 seconds
                    setTimeout(() => {
                        location.reload();
                    }, 1000); // Delay before resetting
                }
            }, 1000);
        }, 1500);  // Delay for the genie animation
    }
});

// Simulate AI quote generation based on troubles
function generateQuote(trouble) {
    // Simple mock of AI-based quote generation
    return "Every challenge is an opportunity for growth.";
}
