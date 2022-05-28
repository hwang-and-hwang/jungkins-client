import React from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '@/components/Layout';

export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  return <Layout>ProjectDetailPage{projectId}</Layout>;
};
