import api from "./axios";

type TGetAdvert = {
    id: string
}

type TGetAdverts = {
    take: number
    skip: number
}

export const getAllAdverts = async ({ take, skip }: TGetAdverts) => {
    try {
        const response = await api.get('/admin/advertsnotapproved', {
            params: {
                take, skip
            }
        });

        return response.data;
    } catch (error) {
        throw error
    }
}

export const approveAdvert = async ({ id }: TGetAdvert) => {
    try {
        const response = await api.put(`/admin/advertaprrove/${id}`);

        return response.data;
    } catch (error) {
        throw error
    }
}

export const getAllUsers = async () => {
    try {
        const response = await api.get('/admin/users');

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateUserRole = async (id: string) => {
    try {
        const response = await api.put(`/admin/user/${id}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}
