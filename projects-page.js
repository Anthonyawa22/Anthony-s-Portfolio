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
    document.getElementById('experience1').style.display = 'block';
}, 3000);
setTimeout(function() {
    document.getElementById('experience2').style.display = 'block';
}, 6000);
setTimeout(function() {
    document.getElementById('experience3').style.display = 'block';
}, 9000);
setTimeout(function() {
    document.getElementById('experience4').style.display = 'block';
}, 12000);
setTimeout(function() {
    document.getElementById('experience5').style.display = 'block';
}, 15000);
