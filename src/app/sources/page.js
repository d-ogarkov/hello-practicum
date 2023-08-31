import Link from "next/link";
import styles from '../layout.module.css';

export function generateMetadata() {
  return {
    title: 'Исходники',
  }
}

export default function Screencast() {
  return (
    <>
      <h1 className={styles.title}>Исходники</h1>
      <p className={styles.text}>Репозиторий проекта на&nbsp;GitHub: <Link className={styles.link} href='https://github.com/d-ogarkov/hello-practicum'>github.com/d-ogarkov/hello-practicum</Link>
      </p>
    </>
  )
}
