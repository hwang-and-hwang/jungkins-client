import React, { FC } from 'react';

import { Project } from '@/components/ProjectList/project.types';

type ProjectListItemProp = {
  project: Project;
};

export const ProjectListItem: FC<ProjectListItemProp> = ({ project }) => (
  <div>
    <div>name: {project.name}</div>
  </div>
);
