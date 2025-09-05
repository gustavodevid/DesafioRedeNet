export declare const registerUser: (name: string, email: string, password: string) => Promise<{
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    id: number;
}>;
export declare const loginUser: (email: string, password: string) => Promise<{
    user: {
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    };
    token: string;
}>;
export declare const getUserById: (userId: number) => Promise<{
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    pokedex: {
        id: number;
    } | null;
    id: number;
}>;
//# sourceMappingURL=authService.d.ts.map