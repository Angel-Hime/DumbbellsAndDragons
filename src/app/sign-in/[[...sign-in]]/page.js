import { SignIn } from "@clerk/nextjs";
import styles from "./sign-in.module.css";
import SignInBar from "@/components/SignInBar/SignInBar";

export default async function signInPage() {
  return (
    <>
      <section className={styles.page_wrapper}>
        <SignInBar />
        <section className={styles.hero_section}>
          <div className={styles.hero_background}>
            <div className={`${styles.gradient_blob} mt-2 ml-2 bg-black`} />
            <div className={`${styles.gradient_blob} mb-2 mr-2 bg-black`} />
          </div>

          <div className={styles.hero_container}>
            <div className={styles.hero_content}>
              <h1 className={styles.hero_title}>
                <span className={styles.hero_title_gradient}>
                  {" "}
                  Level Up <br />
                  Your Fitness
                </span>
              </h1>
              <p className={styles.hero_description}>
                Transform your workouts into an epic RPG adventure. Choose your
                class, earn XP, and watch your character grow stronger with
                every rep.
              </p>
              <div className={styles.hero_description}>Start Your Quest!</div>
            </div>

            <SignIn
              appearance={{
                elements: { formButtonPrimary: styles.btn_primary },
              }}
            />
          </div>
        </section>
      </section>
    </>
  );
}
