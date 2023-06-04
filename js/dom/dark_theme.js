const d = document,
      ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
          $selectors = d.querySelectorAll('[data-dark]');
    
    let moon = '🌙',
        sun = '☀️';

    const lightMode = () => {
            $selectors.forEach(el => el.classList.remove(classDark));
            $themeBtn.textContent = moon;
            ls.setItem('theme','light');
        },
        
        darkMode = () => {
            $selectors.forEach(el => el.classList.add(classDark));
            $themeBtn.textContent = sun;
            ls.setItem('theme','dark');
            }

    d.addEventListener('click', e => {
        if (e.target.matches(btn)) $themeBtn.textContent === '🌙'? darkMode() : lightMode();
    });

    d.addEventListener('DOMContentLoaded', e => {
        if (!ls.getItem('theme')) ls.setItem('theme','light');

        if (ls.getItem('theme') === 'light')lightMode();

        if (ls.getItem('theme') === 'dark') darkMode();
    });
}