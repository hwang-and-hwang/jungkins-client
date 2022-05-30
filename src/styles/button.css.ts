import { style } from '@vanilla-extract/css';

export const button = style({
  padding: '1rem 3rem',
  color: 'white',
  border: 'none',
  borderRadius: '0.5rem',
  fontSize: '1.5rem',
  fontWeight: '400',
  cursor: 'pointer,',
  ':active': {
    borderColor: '1px solid #fefefe',
  },
});
