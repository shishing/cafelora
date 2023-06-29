import './style.css';

export const Header = (props) => {

const { showMenu } = props

const element = document.createElement("header")

if (showMenu){

element.innerHTML = `

      <div class="header__content container">
        <div class="site-logo"></div>

        <div class="navigation">
          <button class="nav-btn"></button>
          <nav class="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>

      </div>

`

const navElm = element.querySelector(".rollout-nav")
const btnElm = element.querySelector(".nav-btn")

btnElm.addEventListener("click", ()=>{navElm.classList.toggle("nav-closed")})
navElm.addEventListener("click", ()=>{navElm.classList.toggle("nav-closed")})

} else {
  element.innerHTML = `
        <div class="header__content container">
          <div class="site-logo"></div>

          <nav class="inline-nav">
            <a href="/">Hlavní stránka</a>
          </nav>

        </div>
  
  `
}


return element


}