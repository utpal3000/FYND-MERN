// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";

import {createRoot} from "react-dom/client"
import Greet from "./App.jsx"
import "./style.css"

createRoot(document.getElementById("root")).render(
  <Greet/>
)