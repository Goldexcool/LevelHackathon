function toggleCustomizeContent(event) {
  // Prevent the default behavior of the click event to avoid unnecessary navigation
  event.preventDefault();

  // Toggle the "open" class on the setup guide
  const setupGuide = document.querySelector(".setup-guide");
  setupGuide.classList.toggle("open");

  // Toggle the "up" class on the chevdown image
  const chevdownIcon = document.querySelector(".chevdown");
  chevdownIcon.classList.toggle("up");

  // Toggle the "open" class on the other sections
  const sections = document.querySelectorAll(
    ".customize, .add-product, .custom, .name-store, .payment"
  );
  sections.forEach((section) => {
    section.classList.toggle("open");
  });

  // Toggle the "open" class on the clicked article
  const clickedArticle = event.currentTarget;
  clickedArticle.classList.toggle("open");

  // Toggle the "open" class on the corresponding image
  const clickedImage = clickedArticle.querySelector(".illustrations-image");
  clickedImage.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".customize-text-1");

    buttons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
            // Close all dropdowns except the one being clicked
            buttons.forEach((otherButton) => {
                if (otherButton !== button) {
                    const otherDropdownId = otherButton.getAttribute("data-dropdown");
                    const otherDropdown = document.getElementById(otherDropdownId);
                    otherDropdown.classList.remove("open");

                    const otherImageId = otherButton.getAttribute("data-image");
                    const otherImage = document.getElementById(otherImageId);
                    otherImage.classList.remove("open");
                }
            });

            // Toggle the "open" class on the corresponding dropdown and image
            const dropdownId = button.getAttribute("data-dropdown");
            const dropdown = document.getElementById(dropdownId);
            dropdown.classList.toggle("open");

            const imageId = button.getAttribute("data-image");
            const image = document.getElementById(imageId);
            image.classList.toggle("open");
        });

        // Open the first dropdown and image when the page loads
        if (index === 0) {
            const firstDropdownId = button.getAttribute("data-dropdown");
            const firstDropdown = document.getElementById(firstDropdownId);
            firstDropdown.classList.add("open");

            const firstImageId = button.getAttribute("data-image");
            const firstImage = document.getElementById(firstImageId);
            firstImage.classList.add("open");
        }
    });
});



function changeImage(imageId, newImagePath) {
    var image = document.getElementById(imageId);
    image.src = newImagePath;
}

var completionStatus = {
    customize: 0,
    addProduct: 0,
    customDomain: 0,
    nameStore: 0,
    setupPayment: 0
};

var completionImages = [
    './Images/Property 1=Dash.svg',
    './Images/Property 1=Circle.svg',
    './Images/Property 1=Frame 1000003539.svg',
    './Images/Component 13.svg'
];

function toggleImageAndProgress(articleId, imageId) {
    var image = document.getElementById(imageId);
    var currentImageIndex = parseInt(image.dataset.imageIndex) || 0;

    // Check if the image is in the completed state
    if (currentImageIndex === completionImages.length - 1) {
        // If it is completed, reset to the initial image and update completion status
        image.src = completionImages[0];
        image.dataset.imageIndex = 0;
        completionStatus[articleId]--;
    } else {
        // If not completed, update the image and completion status
        image.src = completionImages[completionImages.length - 1];
        image.dataset.imageIndex = completionImages.length - 1;
        completionStatus[articleId]++;
    }

    updateProgress();
}

function updateProgress() {
    var completedCount = Object.values(completionStatus).reduce((total, count) => total + count, 0);
    var totalCount = Object.keys(completionStatus).length;

    var completionText = document.getElementById('completionText');
    var completionIncrease = document.getElementById('completionIncrease');

    completionText.textContent = `${completedCount} / 5 completed`;

    // Calculate the width based on completion count
    var completionPercentage = (completedCount / totalCount) * 100;
    completionIncrease.style.width = `${completionPercentage}%`;
}



document.getElementById('dashImg').addEventListener('click', function () {
    toggleImageAndProgress('customize', 'dashImg');
});

document.getElementById('dashImg1').addEventListener('click', function () {
    toggleImageAndProgress('addProduct', 'dashImg1');
});

document.getElementById('dashImg2').addEventListener('click', function () {
    toggleImageAndProgress('customDomain', 'dashImg2');
});

document.getElementById('dashImg3').addEventListener('click', function () {
    toggleImageAndProgress('nameStore', 'dashImg3');
});

document.getElementById('dashImg4').addEventListener('click', function () {
    toggleImageAndProgress('setupPayment', 'dashImg4');
});


document.addEventListener("DOMContentLoaded", function () {
    // Check if the flag for hiding the header is present in cookies
    var hideHeaderFlag = localStorage.getItem('hideHeader');

    // If the flag is present, hide the header
    if (hideHeaderFlag === 'true') {
        var subHeaderSection = document.getElementById('subHeaderSection');
        subHeaderSection.style.display = 'none';
    }

    // Add click event listener to the image
    var hideHeaderImage = document.getElementById('hideHeaderImage');
    hideHeaderImage.addEventListener('click', function () {
        // Hide the header
        var subHeaderSection = document.getElementById('subHeaderSection');
        subHeaderSection.style.display = 'none';

        // Set the flag in local storage to indicate that the header is hidden
        localStorage.setItem('hideHeader', 'true');
    });
});

function notificationDropDown() {
    // Get the notification drop element
    var notificationDrop = document.querySelector('.notification-drop');

    // Close the user dropdown if it's open
    var userDropdown = document.querySelector('.userdropdown');
    if (userDropdown.classList.contains('open')) {
        userDropdown.classList.remove('open');
    }

    // Toggle the "open" class to show/hide the notification drop
    notificationDrop.classList.toggle('open');
}

function userDropDown() {
    // Get the user dropdown element
    var userDropdown = document.querySelector('.userdropdown');

    // Close the notification drop if it's open
    var notificationDrop = document.querySelector('.notification-drop');
    if (notificationDrop.classList.contains('open')) {
        notificationDrop.classList.remove('open');
    }

    // Toggle the "open" class to show/hide the user dropdown
    userDropdown.classList.toggle('open');
}
var storeInfoList = document.querySelector('.store-info');

storeInfoList.addEventListener('click', function(event) {
    // Remove the "active" class from all li elements
    var listItems = storeInfoList.getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('active');
    }

    // Add the "active" class to the clicked li element
    var clickedListItem = event.target;
    if (clickedListItem.tagName === 'LI') {
        clickedListItem.classList.add('active');
    }
});






