import { useState } from "react"

function Counter(){
   const [count, setCount]=useState(0)

     function handleAdd(){
        return setCount(count +1)
    }

    function handleResta(){
        return setCount(count -1)
    }

    
    return(<div>
        <p style={{border: "solid 1px black"}}>{count}</p>
        <button style={{ backgroundColor: "green"}} onClick={handleAdd}>Sumar</button>
        <button style={{ backgroundColor: "red"}} onClick={handleResta}>Restar</button>
    </div>)
}


export default Counter