window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splash.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3500); // show animation then reveal site
});
