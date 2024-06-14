import api from "./axios";

type TCreateAdvertBody = {
    name: string,
    value: number,
    shortDescription: string,
    longDescription: string,
    specificPhone: string,
    category: string,
}

export const createAdvert = async ({
    name, value, shortDescription, longDescription, specificPhone, category
}: TCreateAdvertBody) => {
    try {
        const body = {
            name, value, shortDescription, longDescription, specificPhone, category
        };
        const response = await api.post(`/advert/create`, body);

        return response;
    } catch (error) {
        throw error;
    }
}

type TGetAllAdverts = {
    name?: string
    take?: number,
    skip?: number,
}

export const getAllAdverts = async ({ skip, take, name }: TGetAllAdverts) => {
    try {
        const response = await api.get(`/advert/get/`, {
            params: {
                skip, take, name
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

type TGetAllAdvertsByUser = {
    userId: string
} & TGetAllAdverts;

export const getAllAdvertByUser = async ({ userId }: TGetAllAdvertsByUser) => {
    try {
        const response = await api.get(`/advert/get/owner/${userId}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}

type TUpdateAdvertBody = {
    id: string,
    name?: string,
    value?: number,
    shortDescription?: string,
    longDescription?: string,
    specificPhone?: string,
    category?: string,
}

export const updateAdvert = async ({
    id, name, value, shortDescription, longDescription, specificPhone, category
}: TUpdateAdvertBody) => {
    try {
        const body = {
            name, value, shortDescription, longDescription, specificPhone, category
        };
        const response = await api.patch(`/advert/patch/${id}`, body);

        return response;
    } catch (error) {
        throw error;
    }
}

type TDeleteAdvert = {
    id: string
}

export const deleteAdvert = async ({ id }: TDeleteAdvert) => {
    try {
        const response = await api.delete(`/advert/delete/remove/${id}`);

        return response;
    } catch (error) {
        throw error;
    }
}
