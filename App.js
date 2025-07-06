import React, { useState } from "./React";
import { render } from "./React-Dom";

const App = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(10)
    const [name, setName] = useState("Irfan")
  return (
    <div>
        <h1 style={{textAlign: "center", userSelect: "none", cursor: "pointer"}} onclick={()=> setCount(count + 1)} >{count}</h1>
        <h1 style={{textAlign: "center", userSelect: "none", cursor: "pointer"}} onclick={()=> setCount2(count2 + 1)} >{count2}</h1>
        <h1 style={{textAlign: "center", userSelect: "none", cursor: "pointer"}} onclick={()=> setCount2(count2 + 1)} >{name}</h1>
        <div style={{textAlign: "center"}}>
          <input type="text" oninput={(e)=> setName(e.target.value)} />
        </div>
    </div>
  )
}

render(<App />, document.getElementById("root"))

export default App
