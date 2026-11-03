import { useState } from "react"
//React Hook

function Button(props){
    
    const [count, setCount] = useState(0)

    return(
        <button className="counter" onClick={() => setCount(count + 1)}>
          {props.namn}s gym sessioner: {count}
        </button>
    )
}

export default Button