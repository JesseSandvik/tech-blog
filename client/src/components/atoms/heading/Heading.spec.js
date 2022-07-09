import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('<Heading />', () => {
  test('01. Renders the Heading component', () => {
    render(<Heading>testing</Heading>);

    const heading = screen.getByRole('heading', {
      name: /testing/i,
    });

    expect(heading).toBeInTheDocument();
  });
  test('02. Heading component renders even if level prop is not provided', () => {
    render(<Heading>whoops</Heading>);

    const heading = screen.getByRole('heading', { name: /whoops/i });

    expect(heading).toBeInTheDocument();
  });
  test('03. Heading component renders the children prop', () => {
    render(<Heading>I am a child prop</Heading>);

    const heading = screen.getByRole('heading', {
      name: /I am a child prop/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
