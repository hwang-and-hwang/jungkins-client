import { style } from '@vanilla-extract/css';

import { flexCenter, flexColumn } from '@/styles';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const loginContainer = style([
  flexCenter,
  flexColumn,
  {
    width: '400px',
    height: '50%',
    border: '1px solid #fefefe',
    borderRadius: '0.2rem',
    gap: '3rem',
  },
]);

export const loginTitle = style({
  fontWeight: '400',
  fontSize: '2rem',
});
