import { FC } from 'react';

import * as css from './LoginPage.css';

import { Layout } from '@/components/Layout';
import { LoginButton } from '@/components/LoginButton';

type LoginPageProps = {};

export const LoginPage: FC<LoginPageProps> = () => (
  <Layout>
    <div className={css.root}>
      <div className={css.loginContainer}>
        <h2 className={css.loginTitle}>Sign-in with Github</h2>
        <LoginButton />
      </div>
    </div>
  </Layout>
);
