import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, ProjectPage, DeploymentPage } from './pages';

type RouterProps = {};

const Router: FC<RouterProps> = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/login'
        element={<LoginPage />}
      />
      <Route
        path='/'
        element={<ProjectPage />}
      />
      <Route path='/deployment'>
        <Route
          path=':projectId'
          element={<DeploymentPage />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
