import styles from "./page.module.css";

import { fetchCourses } from "@/services/fetch-courses.service"

import { ICourses } from "@/services/interfaces/ICourses";

import { SearchComponent } from "@/components/search/page";
import { CoursesListComponent } from "@/components/courses_list/page";

interface IPageParams {
    params: {
        label: string,
    }
}

export default async function ListCoursesPage({params}: IPageParams) {

    const courses: ICourses = await fetchCourses();

    const listParams = {
        courses: params.label != '%20'
        ? courses.products.filter((item) =>
            `${item.title}`.toLowerCase().includes(`${params.label}`.toLowerCase()) ||
        `${item.brand}`.toLowerCase().includes(`${params.label}`.toLowerCase()))
        : courses.products
    }

    return (
        <div className={styles.body}>
            <div className={styles.search}><SearchComponent /></div>
            <CoursesListComponent params={listParams} />
        </div>
    )
}
