import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationLink from './NavigationLink';

describe('<NavigationLink />', () => {
  test('01. Renders the NavigationLink component', () => {
    render(
      <Router>
        <NavigationLink to='/'>testing</NavigationLink>
      </Router>
    );

    const link = screen.getByRole('link', { name: /testing/i });
    const fakeLink = screen.queryByRole('link', {
      name: /fake link/i,
    });

    expect(link).toBeInTheDocument();
    expect(fakeLink).not.toBeInTheDocument();
  });
  test('02. NavigationLink component renders the prop children', () => {
    render(
      <Router>
        <NavigationLink to='/test'>this is a test</NavigationLink>
      </Router>
    );

    const link = screen.getByRole('link', {
      name: /this is a test/i,
    });
    expect(link.textContent.match(/this is a test/i)).toBeDefined();
  });
});
