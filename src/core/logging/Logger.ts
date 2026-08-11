/**
 * Structured logging with level control.
 * 
 * In production, debug logs are suppressed.
 * All log entries include a source tag for filtering.
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

let globalMinLevel: LogLevel = import.meta.env.DEV ? 'debug' : 'warn';

export function setLogLevel(level: LogLevel): void {
  globalMinLevel = level;
}

export class Logger {
  constructor(private readonly source: string) {}

  debug(message: string, ...data: unknown[]): void {
    this.log('debug', message, data);
  }

  info(message: string, ...data: unknown[]): void {
    this.log('info', message, data);
  }

  warn(message: string, ...data: unknown[]): void {
    this.log('warn', message, data);
  }

  error(message: string, ...data: unknown[]): void {
    this.log('error', message, data);
  }

  private log(level: LogLevel, message: string, data: unknown[]): void {
    if (LOG_LEVEL_PRIORITY[level] < LOG_LEVEL_PRIORITY[globalMinLevel]) {
      return;
    }

    const prefix = `[${this.source}]`;
    const method = level === 'debug' ? 'log' : level;

    if (data.length > 0) {
      // eslint-disable-next-line no-console
      console[method](prefix, message, ...data);
    } else {
      // eslint-disable-next-line no-console
      console[method](prefix, message);
    }
  }
}

export function createLogger(source: string): Logger {
  return new Logger(source);
}
