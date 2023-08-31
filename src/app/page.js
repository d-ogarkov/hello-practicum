import Image from 'next/image'
//import Media from '@/components/Media';
import styles from './layout.module.css';
//import styles from './page.module.css'
import utilStyles from '../styles/utils.module.css';

import imageAvatar from '../../public/images/avatar.jpg';
import imageOldSchool from '../../public/images/old-school.jpg';

export default function Home() {
  return (
    <>
      <h2 className={styles.title}>Я&nbsp;&mdash; Дмитрий.</h2>
      <Image
        priority
        src={imageAvatar}
        className={`${styles.media} ${utilStyles.borderCircle}`}
        alt="Селфи"
      />
      <p className={styles.text}>Фото, которое удалось найти&nbsp;&mdash; из&nbsp;немного более поздних времен, чем средняя школа. Зато это мой день рождения. На&nbsp;столе&nbsp;&mdash; что-то с&nbsp;Пентиумом внутри и&nbsp;шикарный 15-дюймовый монитор. И&nbsp;все друзья рядом.</p>
      <Image
        priority
        src={imageOldSchool}
        className={`${styles.media} ${styles.rounded}`}
        alt="А вот были времена"
      />
    </>
  )
}
