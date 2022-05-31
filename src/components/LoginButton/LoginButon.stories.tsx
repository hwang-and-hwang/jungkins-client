import { Meta } from '@storybook/react';

import { LoginButton, LoginButtonProps } from '@/components/LoginButton';

export default {
  title: 'login/button/LoginButton',
  component: LoginButton,
  parameters: {
    layout: 'padded',
  },
} as Meta;

function Template(args: LoginButtonProps) {
  return <LoginButton {...args} />;
}

export const Default = Template.bind({});
