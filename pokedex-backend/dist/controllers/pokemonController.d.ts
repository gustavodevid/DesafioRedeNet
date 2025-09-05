import { type Request, type Response } from 'express';
interface AuthRequest extends Request {
    userId?: number;
}
export declare const listPokemons: (req: Request, res: Response) => Promise<void>;
export declare const addPokemon: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removePokemon: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUserPokedex: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=pokemonController.d.ts.map