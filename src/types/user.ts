export type User ={
    id: number;
    name: string;
    email: string;
    phone?: string;
    metadata: {
        source: string;
        createdAt: string;
    };
}