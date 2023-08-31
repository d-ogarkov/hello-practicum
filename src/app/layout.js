import './globals.css';
import { Roboto, Roboto_Slab } from 'next/font/google';
import styles from './layout.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({ subsets: ['latin', 'cyrillic'], weight: '400' })

export const metadata = {
  title: 'Привет, Практикум',
  description: 'Тестовое задание',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className={styles.app}>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
