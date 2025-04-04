import React, { useState } from 'react'

export const Table = () => {
    const [number, setNumber] = useState([]);

    const generateTable = ()=>{
        const newtable = [];
        for (let i = 1; i<=10;i++){
            newtable.push({table: i, result: 2*i})
          
            
        }
        setNumber(newtable)
        
        
    }
   
    
  return (
    <div>
        <h2>table of 2</h2>
        <button onClick={generateTable}>TABLES</button>
        
        <table border='1' style={{marginTop:'50px', marginLeft:'20px'}}>
            <thead >
                <tr>
                    <th style={{margin:'5px',padding:'10px'}}>Number</th>
                    <th style={{margin:'5px',padding:'10px'}}>Output</th>
                </tr>
                
            </thead>
            <tbody>
                    {number.map((item,index)=>(
                       <tr key={index}>
                        <td>2   * {item.table}</td>
                        <td>{item.result}</td>
                       </tr>
                ))}
                </tbody>
        </table>
    
    </div>
  )
}

       