import React, { useState } from 'react'
// import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = ()=> {
    if (count >= 10 && count < 20) {
        setCount(count + 2); 
      }else if(count < -10  ){
        setCount(count + 2);
  } else if (count >= 0 && count < 10) {
        setCount(count + 1); 
      } else if (count < 20) {
        setCount(count + 1); 
      }
      
  }

  const decrement = () =>{
    if(count <= -10 && count > -20){
        setCount(count - 2);
    } else if(count > 10 && count > -20){
          setCount(count - 2);
    }else if(count < 0 && count > -10){
        setCount(count - 1);
    }else if(count > -20){
        setCount(count - 1)
    }
  }

  return (
    <>
     <div style={{ textAlign: 'center', marginTop: '50px' }} className='box'>
      <h1>Counter: {count}</h1>
      <button 
        onClick={increment} 
        disabled={count >= 20}
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' , borderRadius:'10px'}}
      >
        Increment
      </button>
      <button 
        onClick={decrement} 
        disabled={count <= -20}
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' , borderRadius:'10px'}}
      >
        Decrement
      </button>
    </div>
    </>
  )
}

export default Counter



