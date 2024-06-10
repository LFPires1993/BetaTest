'use client'

import styles from '@/app/management/page.module.css'

import { useState } from "react";
import { postCourse } from "@/services/post-course.service";

export default function ManagementPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState(0);

    const postCourses = () => {
        postCourse({
            title: name,
            brand: brand,
            description: description,
            category: category,
            price: price
        })
    }

    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Criação de curso</h1>
            <form className={styles.form} >
                <label className={styles.label}>
                    Nome do curso:
                    <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className={styles.label}>
                    Categoria:
                    <input className={styles.input} type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </label>
                <div className={styles.labels_in_row}>
                    <label className={styles.label + ' ' + styles.label_in_row_left}>
                        Valor:
                        <input className={styles.input} type="number" value={price} onChange={(e) => setPrice(Number.parseFloat(e.target.value))} />
                    </label>
                    <label className={styles.label + ' ' + styles.label_in_row_right}>
                        Brand:
                        <input className={styles.input} type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </label>
                </div>
                <label className={styles.label}>
                    Descrição:
                    <textarea className={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <button 
                    className={styles.button}
                    onClick={postCourses}>
                        Criar
                </button>
            </form>
        </div>
    )
}
