/**
 * Application error hierarchy.
 * 
 * Provides structured error types for different layers:
 * - DomainError: Business logic violations
 * - ApplicationError: Use-case / service layer errors
 * - InfrastructureError: Storage, network, browser API failures
 * - UIError: Rendering and interaction failures
 */

export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly context?: Record<string, unknown>,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class DomainError extends AppError {
  constructor(message: string, code: string, context?: Record<string, unknown>) {
    super(message, code, context);
    this.name = 'DomainError';
  }
}

export class ApplicationError extends AppError {
  constructor(message: string, code: string, context?: Record<string, unknown>) {
    super(message, code, context);
    this.name = 'ApplicationError';
  }
}

export class InfrastructureError extends AppError {
  constructor(message: string, code: string, context?: Record<string, unknown>) {
    super(message, code, context);
    this.name = 'InfrastructureError';
  }
}

export class UIError extends AppError {
  constructor(message: string, code: string, context?: Record<string, unknown>) {
    super(message, code, context);
    this.name = 'UIError';
  }
}
