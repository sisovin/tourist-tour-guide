import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingBoundary from '../../../components/LoadingBoundary';

describe('LoadingBoundary', () => {
  it('should render loading message when loading is true', () => {
    render(
      <LoadingBoundary loading={true}>
        <div>Test Child</div>
      </LoadingBoundary>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render children when loading is false', () => {
    render(
      <LoadingBoundary loading={false}>
        <div>Test Child</div>
      </LoadingBoundary>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
