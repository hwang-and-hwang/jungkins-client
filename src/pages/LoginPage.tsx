import { FC } from 'react';

import { Layout } from '@/components/Layout';
import { LoginButton } from '@/components/LoginButton';

type LoginPageProps = {};

export const LoginPage: FC<LoginPageProps> = () => (
  <Layout>
    <LoginButton />
  </Layout>
);
