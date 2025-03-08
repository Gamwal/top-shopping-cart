import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.bar}>
      <div>Store Logo</div>
      <div>
        <input type="text" />
        <div className={styles.searchButton}>SearchIcon</div>
      </div>
      <div>Icons</div>
    </div>
  );
}
