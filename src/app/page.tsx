"use client";
import Button from "./components/Button/Button";
import styles from "./page.module.css";

export default function Home() {
  const userLogedIn = false;
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {userLogedIn ? (
          <Button title="გამოსვლა" />
        ) : (
          <Button title="ავტორიზაცია" />
        )}
      </div>
    </main>
  );
}
