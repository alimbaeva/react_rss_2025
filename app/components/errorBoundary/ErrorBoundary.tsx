import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import '~/styles/errorBoundary.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: null | string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error(error);
    return { hasError: true, errorMessage: error.message };
  }

  handleReload = () => (window.location.href = '/');

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
    });
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className="error-block">
          {this.props.fallback}
          <h1>Somethig wrong is going...</h1>
          <h1 data-testid="error-message">{this.state.errorMessage}</h1>
          <button onClick={this.handleReload}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
