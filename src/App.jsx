import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./components/Nav";
import Users from "./pages/Users.jsx";

// Nav imports nav with Links to link to different pages w/o refresh
// Wrap everything in <Router> 
// <Routes> contain the page routes
// path="/users/:name" creates dynamics pages
function App() {
  return (
    <>
      <Router>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route> */}
          <Route path="/users/:username" element={<Users />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

// first half of the tutorial:

// import "./App.css";
// import Todo from "./components/Todo"; // created own component for todo item
// import Heading from "./components/Heading";
// import Modal from "./components/Modal";
// import Counter from "./components/Counter";
// import React, { useState, useEffect } from "react";

// function App() {
//   const [showModal, setShowModal] = useState(false); // initially we don't want to see Modal
//   // stores first value of array into the variable showModal
//   // 'destructing arrays'
//   // pass in whatever data type you want
//   // setShowModal(false); // results in infinite loop, goes back and forth from line 8-12 infinitely

//   // 1. parent function
//   function onTodoDelete() {
//     setShowModal(true); // show confirm or deny option when delete
//   }

//   function cancelModal() {
//     setShowModal(false);
//   }

//   function confirmModal() {
//     setShowModal(false);
//   }

//   // useEffect(() => {
//   //   console.log("Only on mount")
//   // }, []); // pass in empty array else it'll run every time a change occurs

//   useEffect(() => {
//     console.log("EVERY render");
//   }) // runs every render

//   useEffect(() => {
//     console.log(`on mount and ${showModal} change`);
//     // setShowModal(!showModal); creates an infinite loop
//   }, [showModal]) // pass in dependencies or functions

//   return (
//     <>
//       <Heading />

//       <div>
//         <Counter />
//       </div>

//       <div>
//         <input
//           type="text"
//           onChange={(event) => {
//             console.log(event.target.value);
//           }}
//         />
//         <button onClick={() => setShowModal(true)}>Add Todo Item</button>
//       </div>

//       <div className="todo__wrapper">
//         {/* 2. pass prop to child */}
//         <Todo
//           onTodoDelete={onTodoDelete}
//           title="Finish FES"
//           paragraph="Code along with David"
//         />
//         <Todo
//           onTodoDelete={onTodoDelete}
//           title="Squat 500 lbs"
//           paragraph="Go sicko mode"
//         />
//         <Todo
//           onTodoDelete={onTodoDelete}
//           title="Remote $100k/yr job"
//           paragraph="Apply for 1000 jobs"
//         />
//       </div>
//       {showModal && (
//         <Modal
//           cancelModal={cancelModal}
//           confirmModal={confirmModal}
//           title="Confirm Delete?"
//         />
//       )}
//       {/* {isModalOpen ? (
//         <Modal
//           title="Are you Sure?"
//           onClick={(event) => {
//             console.log(event.target.value);
//           }}
//         />
//       ) : null} */}

//       {/* OR the code below

//         !!isModalOpen turns boolean to falsy or truthy value
//         since react only renders truthy values
//         if isModalOpen is true it'll render Modal

//       */}
//       {!!showModal && (
//         <Modal title="Are you Sure?" cancelModal={cancelModal} confirmModal={confirmModal} />
//       )}
//     </>
//   );
// }

// // use variables to render Modal or not

// // pass params in components to make components dynamic
// // prop must be in curly brackets if not a string
// // everything must be wrapped in one fragment <> and </>
// // Todo notation is the same
// export default App; // allows us to use our app elsewhere aka the index.js file
