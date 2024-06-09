'use client'

import styles from "./page.module.css";
import { useState } from "react";
import { IProducts } from "@/services/interfaces/IProducts";
import { ListItem } from "../list_item/page";

interface IListCoursesParams {
    params: {
        courses: IProducts[]
    }
}

export function CoursesListComponent({params}: IListCoursesParams) {
    const [getPage, setPage] = useState(1);
    const [getCourses, setCourses] = useState<IProducts[]>(paginateArray(params.courses, 1));
    
    const getTotalPages = () => {
        const value = params.courses.length / 10;
        if(value.toFixed().split('.')[1] != '0') {
            return parseInt((params.courses.length / 10).toFixed()) + 1;
        } else {
            return params.courses.length / 10;
        }
    }

    const totalPages = getTotalPages();
    
    function getPaginator() {
        return(
            [...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                    <ol className={styles.list_item} key={pageNumber}>
                        <button className={styles.unselected_page} 
                        onClick={() => {
                            setCourses(paginateArray(params.courses, pageNumber))
                        }}>
                            {pageNumber}
                        </button>
                    </ol>
                )
            })
        )
    }

    function paginateArray(array: IProducts[], newPage: number): IProducts[] {  
        if(getPage != 1) setPage(newPage);
        const startIndex = (newPage - 1) * 10;
        const endIndex = startIndex + 10;
        return array.slice(startIndex, endIndex);
    }
    
    return (
        <>
            {             
                getCourses.length == 0 
                    ? (
                        <div>Nenhum curso encontrado!</div>
                    ) 
                    : getCourses.map((item) => (
                        <ListItem key={item.id} course={item} />
                    )
                )
            }
            <div className={styles.paginator}>
                <ul className={styles.list}>
                    {getPaginator()}
                </ul>
            </div>
        </>
    )
}
