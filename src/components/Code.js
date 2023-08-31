import styles from './Code.module.css';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-roboto-mono',
});

export default function Code({ children }) {
  return (
    <pre className={styles.block}>
      <code className={`${styles.code} ${robotoMono.variable}`}>
        { children }
      </code>
    </pre>
  );
}