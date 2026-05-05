import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BlogProvider } from './Admin/BlogContext/BlogContext';
import BlogDeleteProvider from './Admin/BlogContext/BlogDeleteContext';
import App from './App.jsx'
import { store } from "./Redux/store.js";
import { Provider } from "react-redux";
import { HelmetProvider } from 'react-helmet-async';
// Optional: Add MUI ThemeProvider if you are using MUI components like <Box>




createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <HelmetProvider>
      {/* BrowserRouter stays here */}
      <BrowserRouter>
        
          <Provider store={store}>
            <BlogDeleteProvider>
              <BlogProvider>
                <App />
              </BlogProvider>
            </BlogDeleteProvider>
          </Provider>
    
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
