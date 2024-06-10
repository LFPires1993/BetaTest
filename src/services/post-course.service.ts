type postCourseType = {
    title: string,
    brand: string,
    description: string,
    price: number,
    category: string
}

export async function postCourse(course: postCourseType) {
    const url: string = process.env.NEXT_PUBLIC_DUMMY_PRODUCTS_URL as string;

    await fetch(`${url}/add`, {
        method: 'POST',
        cache: "no-store",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "title": `'${course.title}'`,
            "category": `'${course.category}'`,
            "description": `'${course.description}'`,
            "brand": `'${course.brand}'`,
            "price": course.price
        })
    })

}
