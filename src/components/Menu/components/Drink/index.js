import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {

    const {id, name, ordered, image, layers, } = props

    const element = document.createElement("div")
    element.classList.add("drink")

    element.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src=${image}>
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
        
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">
        Objednat
      </button>
    </div>
    `

    const drinkInfoELm = element.querySelector(".drink__info")
    drinkInfoELm.append(...layers.map((layer) => Layer(layer)))


    const btn = element.querySelector(".order-btn")

    if (ordered) {
      btn.innerHTML = `Zrušit`
      btn.classList.add(".order-btn--ordered")
    } else {
      btn.innerHTML = `Objednat`
    }

    btn.addEventListener("click", ()=>{
      fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiJzaGlzaGluZyIsInNjcCI6ImFwcCIsImlhdCI6MTY4NzQ1MDQyMX0.3oReSsO79o4DX-5KUniH9o5vgmn5fFHUywg2GPoAy9E',
        },
        body: JSON.stringify({
          "ordered": !ordered
        })
      })
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        element.replaceWith(Drink(data.result))
      })

    })

  return element


}