const userName = document.getElementById("user-name");
const subjectName = document.getElementById("subject-dropdown");
const wrapper = document.querySelector(".wrapper");
const modal = document.querySelector(".modal");
const submitBtn = document.getElementById("submit");
const welcomeText = document.getElementById("welcome-message");

// Store user name and subject in local storage if available
if (window.localStorage) {
    userName.value = localStorage.getItem("user-name") || "";
    subjectName.value = localStorage.getItem("subject-dropdown") || "";
}

// Hide overlay and navigate to the next page
function hideOverlay() {
    setTimeout(() => {
        location.href = "cards.html";
    }, 1000);
}

// Event listener on submit button
submitBtn.addEventListener('click', function(e) {
    // Prevent form submission if fields are empty
    if (userName.value === "" || subjectName.value === "") {
        e.preventDefault();
        alert("We would love to know who you are and what you want to learn");
    } else {
        // Save values to local storage
        localStorage.setItem("user-name", userName.value);
        localStorage.setItem("subject-dropdown", subjectName.value);

        // Hide modal and proceed with overlay hiding
        modal.style.height = "0px";
        modal.style.overflow = "hidden";
        hideOverlay();
    }
});










