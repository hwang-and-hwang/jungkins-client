import { keyframes, style } from '@vanilla-extract/css';

const gradient = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});

export const root = style({
  padding: '1rem 3rem',
  color: 'white',
  border: 'none',
  borderRadius: '0.5rem',
  fontSize: '1.5rem',
  fontWeight: '400',
  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  backgroundSize: '400% 400%',
  animation: `${gradient} 5s ease infinite`,
  cursor: 'pointer',
});
