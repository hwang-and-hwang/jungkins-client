import { describe, expect, it } from 'vitest';

import App from './App';

import { render, screen } from '@/test/utils';

describe('example', () => {
  it('jungkins 텍스트가 표시되어야 함.', () => {
    render(<App />);
    expect(screen.getByText('jungkins')).toBeInTheDocument();
  });
});
