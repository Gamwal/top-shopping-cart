import styles from "./Body.module.css";

export default function Body() {
  return (
    <div className={styles.body}>
      <div>
        <p>Welcome to Jibowu Online</p>
        <p>Enjoy exceptionally good prices</p>
        <div>
          <button>Begin Shopping!</button>
        </div>
      </div>
    </div>
  );
}
