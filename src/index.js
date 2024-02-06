import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ContextProvider } from './Context/Context';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'
if (process.env.NODE-ENV==='production') disableReactDevTools()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
            <Route path="/*" element={<App/>} />
        </Routes>
        </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


