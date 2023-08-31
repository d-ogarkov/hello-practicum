'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Roboto_Slab } from 'next/font/google';
import styles from './Header.module.css';

const robotoSlab = Roboto_Slab({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-roboto-slab',
});

const navLinks = [
  {
    title: "Главное",
    href: "/",
  },
  {
    title: "О программировании",
    href: "/programming",
  },
  {
    title: "Задание",
    href: "/task",
  },
  {
    title: "Скринкаст",
    href: "/screencast",
  },
  {
    title: "Исходники",
    href: "/sources",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={`${robotoSlab.variable} ${styles.header}`}>
      <h1 className={styles.title}>Привет, Практикум.</h1>
      <nav className={styles.nav}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
  
          return (
            <Link
              className={`${isActive ? styles.active : ''} ${styles.navlink}`}
              href={link.href}
              key={link.title}
            >
              {link.title}
            </Link>
          )
        })}
      </nav>
    </header>
  );
}