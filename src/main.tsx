import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.tsx';
import React from 'react';
import { LoadingMaskServiceProvider } from './components/common/loadingMaskService.tsx';
import { Provider } from 'react-redux';
import { store } from './reducers/store';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LoadingMaskServiceProvider children={<App />}></LoadingMaskServiceProvider>      
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
