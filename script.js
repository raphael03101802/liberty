// Handle the preloader animation
window.onload = function() {
    const preloader = document.getElementById('js-preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1500); // Hide the preloader after 1.5 seconds
};

// Handle search functionality
function handle(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        let searchQuery = document.getElementById('searchText').value;
        alert("Você pesquisou por: " + searchQuery);
    }
}

// Mobile menu toggle
const menuTrigger = document.querySelector('.menu-trigger');
const navMenu = document.querySelector('.main-nav ul');

menuTrigger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});
