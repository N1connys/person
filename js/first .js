let topnav=document.querySelector('.topnav')
let menus= document.querySelector('.menu')

window.onscroll=function(sco){
  if(window.scrollY>10)
  {
    topnav.classList.add('sticky')
    menus.style.display="block"
  }
  else
  {
    topnav.classList.remove('sticky')
  
  }
}