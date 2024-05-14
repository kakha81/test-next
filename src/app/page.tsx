"use client";
import Button from "./components/Button/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button title="ავტორიზაცია" mode="outline" />
      </div>
    </main>
  );
}
