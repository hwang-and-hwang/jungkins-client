import { Meta, Story } from '@storybook/react';

import { ProjectList } from '@/components/ProjectList/ProjectList';

export default {
  title: 'project/ProjectList',
  component: ProjectList,
} as Meta;

export const Default: Story = (args) => <ProjectList {...args} />;
Default.parameters = {
  msw: {
    handlers: {},
  },
};
