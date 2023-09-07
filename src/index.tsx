import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './account/login';
import { App } from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App name="StackBlitz" />
  </StrictMode>
);
