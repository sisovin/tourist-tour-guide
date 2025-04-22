import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../../../components/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test Child</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('should render error message when there is an error', () => {
    const ThrowError = () => {
      throw new Error('Test Error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });
});
