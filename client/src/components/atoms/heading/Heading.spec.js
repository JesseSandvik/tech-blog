import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('<Heading />', () => {
  test('01. Renders the Heading component', () => {
    render(<Heading level='2'>testing</Heading>);

    const headingLevelTwo = screen.getByRole('heading', {
      name: /testing/i,
    });

    expect(headingLevelTwo).toBeInTheDocument();
  });
});
