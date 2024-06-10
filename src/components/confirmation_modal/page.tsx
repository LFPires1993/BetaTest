'use client'

import styles from "./page.module.css";

import React from 'react';

import { deleteCourse } from '@/services/delete-course.service';

export function ConfirmationModalComponent({
        closeModal: setModalStatus,
        id
    }: {
        closeModal: (showModal: boolean) => void,
        id: number
    }) {

    const removeCourse = () => {
        deleteCourse(id)
    }

  return (
    <>
        <div className={styles.diplay_modal}>
            <div className={styles.modal}>
                <h2 className={styles.title}>
                    Deletando Curso
                </h2>
                <p className={styles.p}>
                    Tem certeza de você gostaria de deletar este curso?<br />
                    Após deletar, não será possível recuperar o seu conteúdo
                </p>
                <div className={styles.buttons_container}>
                    <button className={styles.cancel_button + ' ' + styles.default_buttons} onClick={() => setModalStatus(false)}>Cancelar</button>
                    <button className={styles.delete_button + ' ' + styles.default_buttons}
                        onClick={() => {
                            removeCourse()
                            setModalStatus(false)
                        }}>
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    </>
  );
}
