import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  loading: boolean;
}

class LoadingBoundary extends Component<Props> {
  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return this.props.children;
  }
}

export default LoadingBoundary;
