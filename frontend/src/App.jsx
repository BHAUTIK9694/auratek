import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@components/layout';
import { Home } from '@pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Future routes will be added here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
