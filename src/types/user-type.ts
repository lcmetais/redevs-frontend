export type TUser = {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
}

export type TCompleteUser = {
    createdAt: Date | string
    email: string
    id: string
    name: string
    phone: string
    role: "USER" | "ADMIN"
    updatedAt: Date | string
}