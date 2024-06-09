import { IProducts } from "./IProducts";

export interface ICourses {
    total: number;
    skip: number;
    limit: string;
    products: IProducts[]
}