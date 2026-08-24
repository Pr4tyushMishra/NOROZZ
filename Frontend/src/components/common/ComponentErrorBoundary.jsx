import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

/**
 * ComponentErrorBoundary prevents component failures from breaking parent or sibling trees.
 * Renders an isolated fallback with retry capabilities.
 */
export class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`[ComponentErrorBoundary] Captured error in <${this.props.componentName || 'Unknown'}>:`, error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback({ error: this.state.error, retry: this.handleRetry })
          : this.props.fallback;
      }

      return (
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl my-4 text-center">
          <div className="w-10 h-10 mx-auto mb-3 text-brandDanger bg-red-50 rounded-full flex items-center justify-center">
            <AlertCircle className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-semibold text-navy mb-1">
            {this.props.componentName || 'This section'} temporarily unavailable
          </h4>
          <p className="text-xs text-slate-muted mb-4 max-w-sm mx-auto">
            We encountered an unexpected issue while loading this component. Sibling content remains fully functional.
          </p>
          <button
            onClick={this.handleRetry}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-primary bg-primary-tint hover:bg-teal-100 rounded-full transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Retry Component
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
