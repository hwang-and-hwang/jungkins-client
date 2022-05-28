import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, DeploymentPage } from './pages';

import { MainPage } from '@/pages/MainPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { ProjectListPage } from '@/pages/ProjectListPage';

type RouterProps = {};

// @ts-ignore
const Router: FC<RouterProps> = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={<MainPage />}
      />
      <Route
        path='login'
        element={<LoginPage />}
      />
      <Route
        path='project'
        element={<ProjectListPage />}
      />
      <Route
        path='project/:projectId'
        element={<ProjectDetailPage />}
      />
      <Route
        path='deployment/:projectId'
        element={<DeploymentPage />}
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
