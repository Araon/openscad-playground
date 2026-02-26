import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex align-items-center justify-content-center p-4" style={{ height: '100vh' }}>
          <Card title="Something went wrong" className="w-full max-w-30rem">
            <div className="flex flex-column gap-3">
              <p>{this.state.error?.message || 'An unexpected error occurred'}</p>
              <Button label="Try Again" onClick={this.handleReset} />
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
