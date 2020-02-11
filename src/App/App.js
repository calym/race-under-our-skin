import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

// Serve the app from a subdirectory in production if needed.

const basename = process.env.NODE_ENV === 'development' ? '/' : '/';

const App = () => (
  <BrowserRouter basename={basename}>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
