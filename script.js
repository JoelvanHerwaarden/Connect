
const showPopupButton = document.getElementById('showPopup');
const popupContainer = document.getElementById('popupContainer');

showPopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'block'; // Show the popup

    // Hide the popup after 5 seconds
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 5000);
} );

function showPopupButton() {
    popupContainer.style.display = 'block'; // Show the popup

    // Hide the popup after 5 seconds
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 5000);
};

function CopyEmail() {
    // Get the text field
    var copyText = "joel.van.herwaarden@rhdhv.com";
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

  
function OpenLinkedIn() {
    const url = 'https://www.linkedin.com/in/joel-van-herwaarden/'; // Replace with your desired URL
    window.open(url, '_blank');
}