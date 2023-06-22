import "./style.css"

export const OrderDetail = () => {

const element = document.createElement("div")
element.classList.add("order-detail")
element.innerHTML = `

<a href="/objednavka">Detail objednávky</a>

`
return element

}