import React, { useState } from "react"

export const Counter = ()=>{
    const [value, setValue] = useState(0);

    const Increment = ()=>{
        setValue(value+1);
    }
    const Decrement= ()=>{
        // setValue(value-1);

        
        if(value>>0){
            setValue(value-1)
        }
       
    }

    return(
        <div>
            <h2>Counter-App</h2>
            <h5>count :{value}</h5>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}