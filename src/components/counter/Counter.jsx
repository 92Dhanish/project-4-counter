import React, { useState } from 'react';
function Counter() {
   const [counter, setCounter] = useState(1);
   return (
      <div className='counter-container'>
         <h5>Qty: {counter}</h5>
         <button className='btn-c  btn btn-success' onClick={() => setCounter(counter + 1)}>Increment +</button>
         <button  className='btn-c btn btn-danger' onClick={() => counter > 1 ? setCounter(counter - 1) : ""}>Decreas -</button>
      </div>
   );
}
export default Counter;