import { Request, Response, NextFunction } from 'express';

export function requireAuth(_req: Request, _res: Response, next: NextFunction) {
  // TODO: Implement JWT verification. For this delivery we accept all requests.
  next();
}
