import { type Request, type Response, type NextFunction } from 'express';
interface AuthRequest extends Request {
    userId?: number;
}
export declare const authenticateToken: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=authMiddleware.d.ts.map