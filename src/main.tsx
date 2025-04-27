import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.tsx';
import React from 'react';
import { LoadingMaskServiceProvider } from './components/common/loadingMaskService.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingMaskServiceProvider children={<App />}></LoadingMaskServiceProvider>      
    </BrowserRouter>
  </React.StrictMode>,
);
