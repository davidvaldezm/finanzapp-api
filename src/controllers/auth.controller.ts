import { Request, Response } from 'express';

export const register = (_req: Request, res: Response) => {
  return res.status(201).json({ message: 'User registered (dummy)' });
};

export const login = (_req: Request, res: Response) => {
  return res.json({ token: 'dummy.jwt.token' });
};

export const me = (_req: Request, res: Response) => {
  return res.json({ id: 'user_dummy_id', email: 'user@example.com' });
};
