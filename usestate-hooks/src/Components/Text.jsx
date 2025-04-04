import { useState } from "react"

export const Text = () => {
    const [text , setText] = useState('Hello-coder');

    const ChangeText = ()=>{
        setText('Hello, Varsha!')
    
    }
  return (
    <div>
        <h3>{text}</h3>
        <button onClick={ChangeText}>Change Text</button>
    </div>
  )
}


