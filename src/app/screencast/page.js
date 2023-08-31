import styles from '../layout.module.css';

export function generateMetadata() {
  return {
    title: 'Скринкаст: свойство gap',
  }
}

export default function Screencast() {
  return (
    <>
      <h1 className={styles.title}>Скринкаст: свойство gap</h1>
      <p className={styles.text}>Один маленький пример того, как развивается веб-разработка: свойство gap в верстке флексами и гридами.</p>
      <iframe
        className={`${styles.media} ${styles.video}`}
        id="ytplayer"
        type="text/html"
        width="800"
        height="450"
        src="https://www.youtube.com/embed/q4_-uOxEVG8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
    </>
  )
}
