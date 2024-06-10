import styles from "./page.module.css";

import Image from "next/image";
import Link from "next/link";

import logoImage from '@/assets/una logo.png'
import FacebookIcon from '@/assets/facebook-icon.png'
import instagramIcon from '@/assets/instagram-icon.png'
import LinkedinIcon from '@/assets/linkedlin-icon.png'
import YoutubeIcon from '@/assets/youtube-icon.png'

export function FooterComponent() {
    return (
        <div className={styles.footer}>
            <Link
                href={'/'}>
                <Image
                    src={logoImage}
                    alt="Una Cursos Logotipo"
                    className={styles.logo}
                />
            </Link>
            <div className={styles.buttons_container}>
                <button
                    className={styles.button}>
                    <Image
                        src={FacebookIcon}
                        alt="Icone do Facebook"
                        className={styles.icons}
                    />
                </button>
                <button
                    className={styles.button}>
                    <Image
                        src={instagramIcon}
                        alt="Icone do Instagram"
                        className={styles.icons}
                    />
                </button>
                <button
                    className={styles.button}>
                    <Image
                        src={LinkedinIcon}
                        alt="Icone do LinkedIn"
                        className={styles.icons}
                    />
                </button>
                <button
                    className={styles.button}>
                    <Image
                        src={YoutubeIcon}
                        alt="Icone do YouTube"
                        className={styles.icons}
                    />
                </button>
            </div>
        </div>

    )
}
