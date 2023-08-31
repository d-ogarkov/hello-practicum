import Image from 'next/image'
import styles from '../layout.module.css';

import imagePartner from '../../../public/images/partner-01-01.jpg';
import imageSniper1 from '../../../public/images/sniper1.png';
import imageSniper2 from '../../../public/images/sniper2.png';

export function generateMetadata() {
  return {
    title: 'О программировании',
  }
}

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>О программировании</h1>
      <p className={styles.text}>В&nbsp;90-е годы у&nbsp;меня появился компьютер рязанского производства &laquo;Партнер-01.01&raquo;. Вот он.</p>
      <Image
        priority
        src={imagePartner}
        className={`${styles.media} ${styles.rounded}`}
        alt="Партнер-01.01"
      />
      <p className={styles.text}>Он&nbsp;был развитием &laquo;Радио-86РК&raquo;, который энтузиасты собирали сами. Сердцем обоих&nbsp;ПК была советская копия процессора Intel 8080, а&nbsp;программы хранились на&nbsp;магнитофонных кассетах.</p>
      <p className={styles.text}>Что интересует подростка в&nbsp;компьютере прежде всего? Игры, конечно. Их&nbsp;было мало. Мы&nbsp;играли в&nbsp;то, что было, запускали игры от&nbsp;86РК&nbsp;и... постепенно втянулись. Писать несложные программы и&nbsp;игры оказалось интереснее, чем играть. Начали писать на&nbsp;Бейсике, а&nbsp;потом и&nbsp;на&nbsp;ассемблере.</p>
      <p className={styles.text}>Простой компьютер, 8-битный процессор, отсутствие графики (только символы на&nbsp;экране!)&nbsp;&mdash; все это увлекало. Вот игра &laquo;Снайпер&raquo; из&nbsp;тех времен, запущенная в&nbsp;эмуляторе:</p>
      <Image
        priority
        src={imageSniper1}
        className={styles.media}
        alt="Игра «Снайпер», кадр 1"
      />
      <Image
        priority
        src={imageSniper2}
        className={styles.media}
        alt="Игра «Снайпер», кадр 2"
      />
      <p className={styles.text}>Ограничения со&nbsp;всех сторон стимулируют фантазию и&nbsp;оттачивают твои навыки. Возможность видеть на&nbsp;экране результат, реакцию, нечто, созданное собственноручно&nbsp;&mdash; бесценна.</p>
    </>
  )
}
