// ### ✍️ Write Only Syntax (No Explanation Required)

// -------------------------------------------------------------------------------------------
// ### 1️⃣ Write syntax to create a React Functional Component.

// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home


// -------------------------------------------------------------------------------------------
// ### 2️⃣ Write syntax of `useState`.

// import { useState } from "react";

// const [state, setState] = useState(initialValue);


// -------------------------------------------------------------------------------------------
// ### 3️⃣ Write syntax of `useEffect`.

// import { useEffect } from "react";

// useEffect(() => {
  
// }, []);


// -------------------------------------------------------------------------------------------
// ### 4️⃣ Write syntax of `useEffect` with dependency array.

// import { useEffect } from "react";

// useEffect(() => {

// }, [dependency]);


// -------------------------------------------------------------------------------------------
// ### 5️⃣ Write syntax of `useEffect` that runs only once.

// useEffect(() => {
//   // runs only once
// }, []);


// -------------------------------------------------------------------------------------------
// ### 6️⃣ Write syntax to install and setup React Router.

// npm install react-router-dom

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// -------------------------------------------------------------------------------------------
// ### 7️⃣ Write basic routing setup using `BrowserRouter`, `Routes`, and `Route`.

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


// -------------------------------------------------------------------------------------------
// ### 8️⃣ Write syntax for navigation using `Link`.

// import { Link } from "react-router-dom";

// <Link to="/about">Go to About</Link>


// -------------------------------------------------------------------------------------------
// ### 9️⃣ Write syntax to get route parameter using `useParams`.

// import { useParams } from "react-router-dom";

// const { id } = useParams();


// -------------------------------------------------------------------------------------------
// ### 🔟 Write syntax for conditional rendering using ternary operator in JSX.

// function Home() {
//   const isLoggedIn = true;

//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
//     </div>
//   );
// }

// export default Home;

