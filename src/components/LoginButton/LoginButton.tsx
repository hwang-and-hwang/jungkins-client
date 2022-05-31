import React from 'react';

import { root } from './LoginButton.css';

export type LoginButtonProps = {};

export const LoginButton: React.FC<LoginButtonProps> = ({}) => (
  <button
    className={root}
    type='button'
  >
    Login
  </button>
);
