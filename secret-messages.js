/* secret-messages.js */
const readMoreButton = document.getElementById('readMoreButton');
        const hiddenText = document.getElementById('hiddenText');

        let isHidden = true;

        readMoreButton.addEventListener('click', function () {
            if (isHidden) {
                hiddenText.style.display = 'block'; // Show the hidden text
                readMoreButton.textContent = 'Read Less';
            } else {
                hiddenText.style.display = 'none'; // Hide the text
                readMoreButton.textContent = 'Read More';
            }

            isHidden = !isHidden; // Toggle the state
        });


setTimeout(function() {
    document.getElementById('content1').style.display = 'block';
}, 2000);


setTimeout(function() {
    document.getElementById('projects1').style.display = 'block';
}, 5000);


setTimeout(function() {
    document.getElementById('skills1').style.display = 'block';
}, 7000); 


      