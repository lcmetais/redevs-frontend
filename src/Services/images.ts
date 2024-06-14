import { TCreateImageObject, TImageObject } from '../types/image-object-type';
import api from './axios';

type TCreateImage = {
    advertId: string
    originalName: string
    imageStorageUrl: string
}

export const createImageToAdvert = async ({ advertId, imageStorageUrl, originalName }: TCreateImage) => {
    try {
        const response = await api.post(`/image/create/`, {
            advertId, imageStorageUrl, originalName
        });

        return response;
    } catch (error) {
        throw error;
    }
}

type TDeleteImage = {
    id: string
}

export const deleteImageFromAdvert = async ({ id }: TDeleteImage) => {
    try {
        const response = await api.delete(`/image/remove/${id}`);

        return response;
    } catch (error) {

    }
}
