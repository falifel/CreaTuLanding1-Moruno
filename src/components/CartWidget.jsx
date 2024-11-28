import { useState } from "react"

function CartWidget(){

    const [count, setCount]=useState(0)

    return (
    <div>
    <button className="cartWidget">
      <img src="src/assets/carritoImg.svg" className="carrito" alt="Go to Cart" />
      <span className="productsCount">{count}</span>
    </button>
    </div>
)
}

export default CartWidget