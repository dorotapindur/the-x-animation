const changeMode = document.querySelector('.mode--js');
let isDark = false;

changeMode.addEventListener('click', () => {
    if (isDark) {
        document.documentElement.style.setProperty('--background', ' #ffffff');
        document.documentElement.style.setProperty('--color', ' #181818');
        isDark = false;
        console.log('changed to light mode');
    } else {
        document.documentElement.style.setProperty('--background', ' #181818');
        document.documentElement.style.setProperty('--color', ' #dddddd');
        isDark = true;
        console.log('changed to dark mode');
    }
})