import { describe, it, expect } from 'vitest';
import {
  AppError,
  DomainError,
  ApplicationError,
  InfrastructureError,
  UIError,
} from '@core/errors/AppError';

describe('AppError hierarchy', () => {
  it('AppError should have correct properties', () => {
    const err = new AppError('test', 'TEST_CODE', { key: 'value' });
    expect(err.message).toBe('test');
    expect(err.code).toBe('TEST_CODE');
    expect(err.context).toEqual({ key: 'value' });
    expect(err.name).toBe('AppError');
    expect(err).toBeInstanceOf(Error);
  });

  it('DomainError should extend AppError', () => {
    const err = new DomainError('domain issue', 'DOMAIN_001');
    expect(err).toBeInstanceOf(AppError);
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('DomainError');
  });

  it('ApplicationError should extend AppError', () => {
    const err = new ApplicationError('app issue', 'APP_001');
    expect(err).toBeInstanceOf(AppError);
    expect(err.name).toBe('ApplicationError');
  });

  it('InfrastructureError should extend AppError', () => {
    const err = new InfrastructureError('infra issue', 'INFRA_001');
    expect(err).toBeInstanceOf(AppError);
    expect(err.name).toBe('InfrastructureError');
  });

  it('UIError should extend AppError', () => {
    const err = new UIError('ui issue', 'UI_001');
    expect(err).toBeInstanceOf(AppError);
    expect(err.name).toBe('UIError');
  });
});
