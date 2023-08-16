import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppContextProvider>
  <BrowserRouter>
  <App />
  <ToastContainer />
  </BrowserRouter>

</AppContextProvider>
);
reportWebVitals();
