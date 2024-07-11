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

type TAddBanner = {
    bannerName: string;
    bannerUrl: string;
}

export const addBanner = async (newBanner: TAddBanner) => {
    try {
        const response = await api.post('/admin/banner', newBanner);

        return response.data;
    } catch (error) {
        alert('Não foi possível adicionar o banner!');
        throw error;
    }
}

export const getBanners = async () => {
    try {
        const response = await api.get('/admin/banners');

        return response.data;
    } catch (error) {
        throw error;
    }
}

type TUpdateBanner = {
    newBannerName: string;
    newBannerUrl: string;
}

export const updateBanner = async (bannerId: string, newBannerData: TUpdateBanner) => {
    try {
        const response = await api.put(`/admin/banner/${bannerId}`, newBannerData);

        return response.data;
    } catch (error) {
        alert('Não foi possível atualizar o banner!');
        throw error;
    }
}

export const deleteBanner = async (bannerId: string) => {
    try {
        const response = await api.delete(`/admin/banner/${bannerId}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}
