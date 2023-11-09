import React, { useState } from "react";
import "./Counter.css";
function Counter() {

  // NUMBER
  //   const [num, changeNum] = useState(0);

  //   function increment() {
  //     // when using prev state or the value of 'num'
  //     // need to use callback in the changeNum() function
  //     changeNum((prevNum) => prevNum + 1);

  //     // or changeNum(num += 1) does the same
  //   }

  //   function decrement() {
  //     changeNum((prevNum) => prevNum - 1);
  //   }

  // OBJECT

//   const [cart, setCart] = useState({
//     item: "apple",
//     quantity: 0,
//   });

//   function addApple() {
//     setCart((prevCart) => ({
//       ...prevCart,
//       quantity: prevCart.quantity + 1,
//     }));
//   }
//   function removeApple() {
//     // 1. callback to get prev value
//     // 2. spread out all prev properties of state '...prevCart'
//     // 3. only change the property that you need to change
//     setCart((prevCart) => ({
//       ...prevCart,
//       quantity: prevCart.quantity - 1,
//     }));
//   }

//  ARRAY

    const [arr, setArr] = useState([]);

    function addPlus() {
        setArr(prevArr => [ ...prevArr, "+"]);
        // spread out prev values of arr '...' then add + at end
    }
    function addMinus() {
        setArr(prevArr => [ ...prevArr, "-"]);
    }


  return (

    // ARRAY

    

    <>

        <div className="counter">

            <button onClick={addMinus} className="btn2">-</button>
            {arr}
            <button onClick={addPlus} className="btn2">+</button>
            
        </div>

    </>


    // OBJECT

    // <>
    //   <div className="counter">
    //     <button className="btn" onClick={removeApple}>
    //       -
    //     </button>
    //     <p className="num">
    //       {cart.item} {cart.quantity}
    //     </p>
    //     <button className="btn" onClick={addApple}>
    //       +
    //     </button>
    //   </div>
    // </>

    // NUMBER

    // <>
    //   <button onClick={() => changeNum(num -= 1)}>-</button>
    //   <p>{num}</p>
    //   <button onClick={() => changeNum(num += 1)}>+</button>
    // </>
    // doesn't need two additional functions

    // OR

    // <>
    //   <div className="counter">
    //     <button className='btn' onClick={decrement}>-</button>
    //     <p className='num'>{num}</p>
    //     <button className='btn' onClick={increment}>+</button>
    //   </div>
    // </>
  );
}

export default Counter;
