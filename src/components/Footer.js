'use client';
import Image from 'next/image';
import styles from './Footer.module.css';
import imageToTop from '../../public/images/to-top.svg';

function scrollToTop() {
  let browserDetected = typeof window !== 'undefined';
  if (!browserDetected) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <button className={styles.buttonToTop} onClick={scrollToTop}>
      </button>
    </footer>
  );
}