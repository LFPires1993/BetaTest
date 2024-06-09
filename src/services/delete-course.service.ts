export async function deleteCourse(id: number): Promise<void>{
    const url: string = process.env.NEXT_PUBLIC_DUMMY_PRODUCTS_URL as string;
    
    await fetch(`${url}/${id}`, {
        method: 'DELETE',
        cache: "no-store"
    })
}