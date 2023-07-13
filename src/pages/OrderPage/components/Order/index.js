import './style.css';

import { OrderItem } from '../OrderItem';

export const Order = (props) => {

    const {items} = props

    const element = document.createElement("div")
    element.classList.add("order__content" , "container")

    element.innerHTML = `
    
    <h1>Vaše objedávnka</h1>
    <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
    <div class="order__items">
      
    </div>
`

if (items === "loading"){
  fetch("https://cafelora.kodim.app/api/me/drinks", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
Authorization:
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiJzaGlzaGluZyIsInNjcCI6ImFwcCIsImlhdCI6MTY4NzQ1MDQyMX0.3oReSsO79o4DX-5KUniH9o5vgmn5fFHUywg2GPoAy9E',
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data)

    element.replaceWith(

      Order ({
        items: data.result
      })
    )
  
  
  })


} else { //na toto else davat pozor, ked mi chyba, hadze chybu
  // const drinkListELm = element.querySelector(".drinks-list")
  // drinkListELm.append(...drinks.map((drink) => Drink(drink)))

  element.querySelector(".order__items").append(...items.filter((item)=> item.ordered === true).map((item) => OrderItem(item) ) )
  if (!items.some((item) => item.ordered)) {
    element.querySelector(".empty-order").classList.remove("empty-order--hide")
  }

}



  

    return element

}