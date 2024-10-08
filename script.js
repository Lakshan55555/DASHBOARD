window.onload = function() {
    const refreshAnimation = document.getElementById('refresh-animation');
    refreshAnimation.classList.remove('hidden');
    
    // Set a timeout to remove the animation after it completes
    setTimeout(() => {
        refreshAnimation.classList.add('hidden');
    }, 2000); // Adjust this time as necessary
};
