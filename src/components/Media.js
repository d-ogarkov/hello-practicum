import styles from './Media.module.css';

export default function Media({ children }) {
  return (
    <div className={styles.media}>
      {children}
    </div>
  );
}