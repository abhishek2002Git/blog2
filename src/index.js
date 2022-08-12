import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from "./contexts/Context";
import './index.css';
import App from './App';
import 'tw-elements';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import AppProvider from "./contexts/Context";
// import App from "./App";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>
// );

