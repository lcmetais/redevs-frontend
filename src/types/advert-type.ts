import { TImageObject } from "./image-object-type";

export type TAdvert = {
    id: string
    images: TImageObject[]
    name: string
    value: number
    shortDescription: string
    longDescription: string
    specificPhone: string
    category: string
}
