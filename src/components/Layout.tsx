import React, { FC } from 'react';

import { root } from '@/components/Layout.css';
import { attempts } from '@/utils/attempts';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={root}>{attempts(children)}</div>
);
