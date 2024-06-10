'use client'

import styles from "./page.module.css";

import { useState } from "react";
import Link from "next/link";

export function SearchComponent() {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles.container}>
            <input
                value={inputValue}
                onChange={(text) => setInputValue(text.target.value)}
                type="text"
                placeholder="O quê você quer aprender hoje?"
                className={styles.input}
            />
            <Link href={`/${inputValue ? inputValue : '%20'}`}>
                <button
                    className={styles.button}
                >
                    Pesquisar
                </button>
            </Link>
        </div>
    )
}
