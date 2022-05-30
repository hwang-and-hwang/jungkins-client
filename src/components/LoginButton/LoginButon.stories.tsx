import { Meta, Story } from '@storybook/react';

import { LoginButton, LoginButtonProps } from '@/components/LoginButton';

export default {
  title: 'login/button/LoginButton',
  component: LoginButton,
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story<LoginButtonProps> = (args) => <LoginButton {...args} />;

export const Default = Template.bind({});
