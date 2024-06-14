import api from "./axios";

type TGetUserById = {
    id: string
}

export const getUserById = async ({ id }: TGetUserById) => {
    try {
        const response = await api.get(`/user/get/id/${id}`);

        return response.data;
    } catch (error) {
        throw error
    }
}

type TGetUserByName = {
    name: string
}

export const getUserByName = async ({ name }: TGetUserByName) => {
    try {
        const response = await api.get(`/user/get/id/${name}`);

        return response;
    } catch (error) {
        throw error
    }
}

type TUpdateUserBody = {
    name?: string,
    email?: string,
    password?: string,
    phone?: string
} & TGetUserById;

export const updateUser = async ({ id, name, email, password, phone }: TUpdateUserBody, token?: string) => {
    try {
        const body = {
            name, email, password, phone
        }
        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = token ? await api.patch(`/user/patch/${id}`, body, header) : await api.patch(`/user/patch/${id}`, body);

        return response;
    } catch (error) {
        throw error;
    }
}

type TDeleteUser = {} & TGetUserById;

export const deleteUser = async ({ id }: TDeleteUser) => {
    try {
        const response = await api.delete(`/user/delete/${id}`)

        return response;
    } catch (error) {
        throw error;
    }
}
