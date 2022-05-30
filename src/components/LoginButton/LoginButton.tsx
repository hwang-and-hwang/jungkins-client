import React from 'react';

import * as css from './LoginButton.css';

export type LoginButtonProps = {};

export const LoginButton: React.FC<LoginButtonProps> = ({}) => (
  <button
    className={css.root}
    type='button'
  >
    Login
  </button>
);
