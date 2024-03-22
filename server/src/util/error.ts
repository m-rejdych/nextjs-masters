import type { ErrorRequestHandler } from 'express';

export const genericErrorHandler: ErrorRequestHandler = (error, _, res, __) => {
  console.log(error);
  res.json({ result: 'failure', data: error.message });
};
