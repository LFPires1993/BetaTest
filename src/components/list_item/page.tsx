'use client'
import styles from "./page.module.css";

import Image from "next/image";
import { useState } from "react";

import { IProducts } from "@/services/interfaces/IProducts";

import imageDefault from "@/assets/image-default.jpg"
import editIcon from '@/assets/edit-icon.png'
import deleteIcon from '@/assets/delete-icon.png'

import { ConfirmationModalComponent } from "../confirmation_modal/page";

export function ListItem({course}: {course: IProducts}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div key={course.id} className={styles.container}>
            <Image
                className={styles.image}
                src={course.thumbnail ? course.thumbnail : imageDefault}
                alt="Logo do curso a ser apresentada"
                width={80}
                height={80}
            />
            <div className={styles.content}>
                <div className={styles.box}>
                    <span className={styles.title}>{course.title}</span>
                    <p className={styles.p}>{course.description}</p>
                </div>
                <button className={styles.button}>
                    <Image
                        src={editIcon}
                        alt="Icone de edição"
                        className={styles.icon}
                    />
                </button>
                <button className={styles.button}>
                    <Image
                            src={deleteIcon}
                            alt="Icone de deleção"
                            className={styles.button}
                            onClick={() => {
                                setShowModal(true)
                            }}
                        />
                </button>
                {
                    showModal
                        ? <ConfirmationModalComponent closeModal={setShowModal} id={course.id} />
                        : <></>
                }
            </div>
        </div>
    )
}
