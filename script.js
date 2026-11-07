const themeToggle = document.getElementById('themeToggle');
const themeText = document.querySelector('.theme-toggle__text');
const themeIcon = document.querySelector('.theme-toggle__icon');

function applyTheme(theme) {
    const isDark = theme === 'dark';

    document.body.classList.toggle('dark', isDark);
    document.body.setAttribute('data-theme', theme);

    themeText.textContent = isDark ? 'Темна тема' : 'Світла тема';
    themeIcon.textContent = isDark ? '🌙' : '☀️';
    themeToggle.setAttribute(
        'aria-label',
        isDark ? 'Переключити на світлу тему' : 'Переключити на темну тему'
    );
}

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || 'light';
applyTheme(initialTheme);

themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
});