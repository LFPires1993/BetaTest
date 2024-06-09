import Image from "next/image";
import styles from "./page.module.css";
import { SearchComponent } from "@/components/search/page";

import logoImage from '@/assets/una logo.png'

export default function Home() {
  return (
    <div className={styles.home}>
        <Image 
          src={logoImage}
          alt="Una Cursos Logotipo"
          className={styles.logo}
        />
        <SearchComponent />
    </div>
  );
}
