import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// const currentTrime = new Date().getHours();
// let greeting;
// const customStyle = {
//   color : ""
// };
// if(currentTrime < 12){
//   greeting = "Good Morning";
//   customStyle.color = "red";
// } else if (currentTrime < 18){
//   greeting = "Good Afternoon";
//   customStyle.color = "green";
// } else{
//   greeting = "Good Night";
//   customStyle.color = "blue";
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

);

