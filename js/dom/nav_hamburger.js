export default function hamburgerMenu(hamburger, nav, menuLink){
  const d = document;
 
  d.addEventListener('click',e =>{
    if(e.target.matches(hamburger) || e.target.matches(`${hamburger} *`)){
      d.querySelector(nav).classList.toggle('show');
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(nav).classList.remove('show');
    }

  })
}