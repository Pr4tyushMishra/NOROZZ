import React from 'react';
import { ComponentErrorBoundary } from './ComponentErrorBoundary';

/**
 * SafeComponent wraps any functional or class component in an isolated ComponentErrorBoundary.
 * Usage:
 *   <SafeComponent name="CategoryGrid">
 *     <CategoryGrid />
 *   </SafeComponent>
 */
export const SafeComponent = ({ children, name = 'Component', fallback = null, onRetry = null }) => {
  return (
    <ComponentErrorBoundary componentName={name} fallback={fallback} onRetry={onRetry}>
      {children}
    </ComponentErrorBoundary>
  );
};

/**
 * withSafeErrorBoundary HOC for automatically wrapping any exported component.
 */
export function withSafeErrorBoundary(WrappedComponent, componentName) {
  const SafeWrapped = (props) => {
    const displayName = componentName || WrappedComponent.displayName || WrappedComponent.name || 'SafeComponent';
    return (
      <ComponentErrorBoundary componentName={displayName}>
        <WrappedComponent {...props} />
      </ComponentErrorBoundary>
    );
  };
  SafeWrapped.displayName = `Safe(${componentName || WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return SafeWrapped;
}
