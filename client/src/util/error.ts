export const getErrorMessage = (error: unknown): string =>
  typeof error === 'object' && error && 'message' in error && typeof error.message === 'string'
    ? error.message
    : 'Something went wrong :(';
