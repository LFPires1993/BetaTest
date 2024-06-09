import { ICourses } from "./interfaces/ICourses";

export async function fetchCourses(): Promise<ICourses>{
    const url: string = process.env.DUMMY_PRODUCTS_URL as string;
    
    let courseResponse = await fetch(`${url}?limit=0`, {
        cache: "no-store"
    })
    
    const response: ICourses = await courseResponse.json();    

    return response;
}