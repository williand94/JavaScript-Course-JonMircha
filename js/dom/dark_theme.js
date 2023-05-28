const d = document;
export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn),
          $selectors = d.querySelectorAll('[data-dark]');
    console.log($selectors);      

    let moon = '🌙',
        sun = '☀️';
    console.log(classDark);
    
    d.addEventListener('click',e=>{
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === '🌙') {
                $selectors.forEach(el => el.classList.add(classDark))
                $themeBtn.textContent = sun
            }else{
                $selectors.forEach(el => el.classList.remove(classDark))
                $themeBtn.textContent = moon
            }
        }
    })    

}