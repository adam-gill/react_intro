import "./App.css";
import Todo from "./components/Todo"; // created own component for todo item
import Heading from "./components/Heading";
import Modal from "./components/Modal";
import Counter from "./components/Counter"
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false); // initially we don't want to see Modal
  // stores first value of array into the variable showModal
  // 'destructing arrays'
  // pass in whatever data type you want
  // setShowModal(false); // results in infinite loop, goes back and forth from line 8-12 infinitely

  // 1. parent function
  function onTodoDelete() {
    setShowModal(true); // show confirm or deny option when delete
  }
  
  // function 1:16:12 - finish cancel and confirm functions for modal pop up

  return (
    <>
      <Heading />

      <div>
        <Counter />
      </div>

      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add Todo Item</button>
      </div>

      <div className="todo__wrapper">
        {/* 2. pass prop to child */}
        <Todo onTodoDelete={onTodoDelete} title="Finish FES" paragraph="Code along with David" />
        <Todo onTodoDelete={onTodoDelete} title="Squat 500 lbs" paragraph="Go sicko mode" />
        <Todo onTodoDelete={onTodoDelete} title="Remote $100k/yr job" paragraph="Apply for 1000 jobs" />
      </div>
      {/* {isModalOpen ? (
        <Modal
          title="Are you Sure?"
          onClick={(event) => {
            console.log(event.target.value);
          }}
        />
      ) : null} */}

      {/* OR the code below
      
        !!isModalOpen turns boolean to falsy or truthy value
        since react only renders truthy values
        if isModalOpen is true it'll render Modal


      */}
      {!!showModal && (
        <Modal
          title="Are you Sure?"
          onTodoDelete={onTodoDelete}
        />
      )}
    </>
  );
}

// use variables to render Modal or not

// pass params in components to make components dynamic
// prop must be in curly brackets if not a string
// everything must be wrapped in one fragment <> and </>
// Todo notation is the same
export default App; // allows us to use our app elsewhere aka the index.js file
