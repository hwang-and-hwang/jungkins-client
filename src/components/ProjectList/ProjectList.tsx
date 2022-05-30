import React from 'react';

import * as css from './ProjectList.css';

import { Project } from '@/components/ProjectList/project.types';
import { ProjectListItem } from '@/components/ProjectList/ProjectListItem';

export const ProjectList = () => {
  const projectList: Project[] = [];
  return (
    <div className={css.root}>
      <ul>
        {projectList.map((project) => (
          <ProjectListItem
            project={project}
            key={project.id}
          />
        ))}
      </ul>
    </div>
  );
};
