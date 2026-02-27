import Link from "next/link";
import styles from "./profile.module.css";

export default function NotFound() {
  return (
    <main className={styles.notfound_wrapper}>
      <div className={styles.notfound_card}>
        <div className={styles.notfound_icon}>🗺️</div>

        <h1 className={styles.notfound_title}>UH-OH, LOST IN DUNGEON!</h1>

        <p className={styles.notfound_description}>
          Beg pardon dear traveller,
          <br />
          The path thou desirest does not exist.
          <br />
          Perhaps the map was wrong…or the dragon moved it.
          <br />
          Canst thou try another way perhaps?
        </p>

        <div className={styles.notfound_actions}>
          <Link href={"/tavern"} className={styles.notfound_button}>
            RETURN TO TAVERN
          </Link>
        </div>
      </div>
    </main>
  );
}
